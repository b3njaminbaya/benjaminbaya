import { useState, useEffect, useRef } from 'react';
import { Send, X, MessageSquareText } from 'lucide-react';

const API_BASE = import.meta.env.VITE_API_URL || 'https://portfolio-server-kbti.onrender.com';

const QUICK_REPLIES = [
  { label: 'What do you do?', prompt: 'What do you help businesses with?' },
  { label: 'Can you help my business?', prompt: 'I have a business problem but I am not sure what technology I need. Can you help?' },
  { label: 'Show me your work', prompt: 'Tell me about your most relevant projects.' },
  { label: 'Book a consultation', prompt: 'How do I book a consultation?' },
];

const STORAGE_KEY = 'chatMessages';

const loadMessages = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

const Chatbot = () => {
  const [messages, setMessages] = useState(loadMessages);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [open, setOpen] = useState(false);

  const endRef = useRef(null);
  const inputRef = useRef(null);
  const launcherRef = useRef(null);
  const controllerRef = useRef(null);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(-30)));
    } catch {
      // storage unavailable — conversation still works for this visit
    }
  }, [messages]);

  useEffect(() => {
    endRef.current?.scrollIntoView({ block: 'end' });
  }, [messages, isTyping, open]);

  useEffect(() => {
    if (!open) return undefined;
    inputRef.current?.focus();
    const onKey = (e) => {
      if (e.key === 'Escape') {
        setOpen(false);
        launcherRef.current?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open]);

  const sendMessage = async (text) => {
    const userText = text.trim();
    if (!userText || isTyping) return;

    const history = messages;
    setMessages([...history, { user: true, text: userText }]);
    setInput('');
    setIsTyping(true);

    controllerRef.current?.abort();
    const controller = new AbortController();
    controllerRef.current = controller;
    // 15s timeout — the API host can cold-start
    const timeoutId = setTimeout(() => controller.abort(), 15000);

    try {
      const res = await fetch(`${API_BASE}/api/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userText, history: history.slice(-4) }),
        signal: controller.signal,
      });
      if (!res.ok) {
        const errData = await res.json().catch(() => ({}));
        throw new Error(errData.error || `Request failed (${res.status})`);
      }
      const data = await res.json();
      setMessages((prev) => [...prev, { user: false, text: data.reply }]);
    } catch (err) {
      const text =
        err.name === 'AbortError'
          ? 'The assistant is waking up — please try again in a moment, or book a consultation directly.'
          : err.message?.toLowerCase().includes('rate')
            ? 'You’ve sent a lot of messages — please wait a few minutes before trying again.'
            : 'Something went wrong on my end. Please try again or use the contact form.';
      setMessages((prev) => [...prev, { user: false, text, error: true }]);
    } finally {
      clearTimeout(timeoutId);
      setIsTyping(false);
      controllerRef.current = null;
    }
  };

  const clearHistory = () => setMessages([]);

  return (
    <>
      {!open && (
        <button
          ref={launcherRef}
          type="button"
          onClick={() => setOpen(true)}
          className="fixed bottom-5 right-5 z-40 inline-flex items-center gap-2 rounded-full bg-ink py-3 pl-4 pr-5 text-sm font-semibold text-paper shadow-lg transition-transform hover:-translate-y-0.5 sm:bottom-6 sm:right-6"
          aria-label="Open the AI assistant"
        >
          <MessageSquareText size={18} aria-hidden="true" />
          <span className="hidden sm:inline">Ask the assistant</span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-label="AI assistant"
          className="fixed inset-x-3 bottom-3 z-50 flex h-[min(34rem,calc(100dvh-1.5rem))] flex-col overflow-hidden rounded-2xl border border-line bg-surface text-ink shadow-2xl sm:inset-x-auto sm:bottom-6 sm:right-6 sm:w-[23rem]"
        >
          <div className="flex items-center justify-between border-b border-line px-4 py-3">
            <div>
              <p className="text-sm font-bold">Ask about my work</p>
              <p className="text-xs text-muted">AI assistant · answers from verified info</p>
            </div>
            <div className="flex items-center gap-1">
              {messages.length > 0 && (
                <button type="button" onClick={clearHistory} className="rounded-md px-2 py-1 text-xs text-muted hover:text-ink">
                  Clear
                </button>
              )}
              <button
                type="button"
                onClick={() => {
                  setOpen(false);
                  setTimeout(() => launcherRef.current?.focus(), 0);
                }}
                aria-label="Close assistant"
                className="grid h-8 w-8 place-items-center rounded-full text-muted hover:bg-ink/5 hover:text-ink"
              >
                <X size={17} aria-hidden="true" />
              </button>
            </div>
          </div>

          <div className="flex-1 space-y-2.5 overflow-y-auto p-4 text-sm" role="log" aria-live="polite">
            {messages.length === 0 && (
              <div className="px-1 pt-2">
                <p className="font-semibold">Hi — I’m Benjamin’s assistant.</p>
                <p className="mt-1 text-muted">
                  Ask what he does, whether he can help with a problem in your business, or about past projects.
                </p>
              </div>
            )}

            {messages.map((msg, i) => (
              <div key={i} className={`flex ${msg.user ? 'justify-end' : 'justify-start'}`}>
                <p
                  className={`max-w-[85%] whitespace-pre-wrap rounded-2xl px-3.5 py-2.5 leading-relaxed ${
                    msg.user
                      ? 'rounded-br-md bg-accent text-on-accent'
                      : msg.error
                        ? 'rounded-bl-md border border-red-300/60 bg-red-50 text-red-800 dark:bg-red-950/40 dark:text-red-200'
                        : 'rounded-bl-md bg-sunken'
                  }`}
                >
                  {msg.text}
                </p>
              </div>
            ))}

            {isTyping && (
              <div className="flex gap-1 px-2 py-2" aria-label="Assistant is typing">
                {[0, 150, 300].map((d) => (
                  <span key={d} className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted" style={{ animationDelay: `${d}ms` }} />
                ))}
              </div>
            )}
            <div ref={endRef} />
          </div>

          {messages.length === 0 && !isTyping && (
            <div className="flex flex-wrap gap-1.5 px-4 pb-3">
              {QUICK_REPLIES.map(({ label, prompt }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => sendMessage(prompt)}
                  className="rounded-full border border-line px-3 py-1.5 text-xs font-medium hover:border-accent hover:text-accent"
                >
                  {label}
                </button>
              ))}
            </div>
          )}

          <form
            className="flex items-center gap-2 border-t border-line p-3"
            onSubmit={(e) => {
              e.preventDefault();
              sendMessage(input);
            }}
          >
            <label htmlFor="chat-input" className="sr-only">
              Message
            </label>
            <input
              id="chat-input"
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 rounded-full border border-line bg-paper px-4 py-2.5 text-sm focus:border-accent focus:outline-none"
              placeholder="Ask a question…"
              disabled={isTyping}
              maxLength={500}
              autoComplete="off"
            />
            <button
              type="submit"
              disabled={isTyping || !input.trim()}
              className="grid h-10 w-10 place-items-center rounded-full bg-accent text-on-accent disabled:opacity-40"
              aria-label="Send message"
            >
              <Send size={16} aria-hidden="true" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;
