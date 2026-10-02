// Contact form endpoint (Vercel Function). Sends the enquiry — including an
// optional attachment — to Benjamin's inbox through the Resend HTTP API.
//
// Environment variables (Vercel → Project → Settings → Environment Variables):
//   RESEND_API_KEY  required  — from https://resend.com/api-keys
//   CONTACT_TO      optional  — inbox that receives enquiries
//   CONTACT_FROM    optional  — verified sender, e.g. "Benjamin Baya <contact@benjaminbaya.com>"

const MAX_FILE_BYTES = 4 * 1024 * 1024; // Vercel caps request bodies at 4.5 MB
const MAX_MESSAGE_CHARS = 8000;
const DEFAULT_TO = 'b3njaminbaya@gmail.com';
const DEFAULT_FROM = 'Portfolio enquiries <onboarding@resend.dev>';

const json = (status, body) =>
  new Response(JSON.stringify(body), { status, headers: { 'Content-Type': 'application/json' } });

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Only accept submissions from the site itself (or local development)
const allowedOrigin = (origin) => {
  if (!origin) return true; // same-origin requests may omit the header
  try {
    const { hostname } = new URL(origin);
    return (
      hostname === 'benjaminbaya.com' ||
      hostname.endsWith('.benjaminbaya.com') ||
      hostname.endsWith('.vercel.app') ||
      hostname === 'localhost'
    );
  } catch {
    return false;
  }
};

export async function POST(request) {
  if (!allowedOrigin(request.headers.get('origin'))) return json(403, { error: 'forbidden' });

  if (!process.env.RESEND_API_KEY) {
    // Lets the frontend fall back to its secondary delivery method
    return json(503, { error: 'not_configured' });
  }

  let form;
  try {
    form = await request.formData();
  } catch {
    return json(400, { error: 'invalid_form' });
  }

  // Honeypot: real visitors never fill this in. Pretend success so bots move on.
  if (form.get('_honey')) return json(200, { ok: true });

  const name = String(form.get('name') || '').trim().slice(0, 200);
  const email = String(form.get('email') || '').trim().slice(0, 320);
  const business = String(form.get('business') || '').trim().slice(0, 200);
  const message = String(form.get('message') || '').trim().slice(0, MAX_MESSAGE_CHARS);

  if (!name || !message || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json(400, { error: 'missing_fields' });
  }

  const attachments = [];
  const file = form.get('attachment');
  if (file && typeof file === 'object' && file.size > 0) {
    if (file.size > MAX_FILE_BYTES) return json(413, { error: 'file_too_large' });
    attachments.push({
      filename: (file.name || 'attachment').replace(/[^\w.\- ()]/g, '_').slice(0, 120),
      content: Buffer.from(await file.arrayBuffer()).toString('base64'),
    });
  }

  const subjectName = name.replace(/[\r\n]+/g, ' ');
  const html = `
    <div style="font-family:system-ui,-apple-system,Segoe UI,sans-serif;font-size:15px;line-height:1.6;color:#0e1116">
      <h2 style="margin:0 0 16px">New enquiry from benjaminbaya.com</h2>
      <p style="margin:0"><strong>Name:</strong> ${esc(name)}</p>
      <p style="margin:0"><strong>Email:</strong> <a href="mailto:${esc(email)}">${esc(email)}</a></p>
      ${business ? `<p style="margin:0"><strong>Business:</strong> ${esc(business)}</p>` : ''}
      <p style="margin:0"><strong>Attachment:</strong> ${attachments.length ? esc(attachments[0].filename) : 'none'}</p>
      <hr style="border:none;border-top:1px solid #dedbd3;margin:18px 0" />
      <p style="margin:0;white-space:pre-wrap">${esc(message)}</p>
    </div>`;

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || DEFAULT_FROM,
      to: [process.env.CONTACT_TO || DEFAULT_TO],
      reply_to: email,
      subject: `New enquiry from ${subjectName}${business ? ` (${business.replace(/[\r\n]+/g, ' ')})` : ''}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\n${business ? `Business: ${business}\n` : ''}\n${message}`,
      attachments,
    }),
  });

  if (!res.ok) {
    console.error('Resend error', res.status, await res.text().catch(() => ''));
    return json(502, { error: 'send_failed' });
  }
  return json(200, { ok: true });
}
