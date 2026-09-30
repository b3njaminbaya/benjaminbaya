import { STACK } from '../../data/profile';
import Container from '../ui/Container';
import SectionHeading from '../ui/SectionHeading';

const Stack = () => (
  <section id="stack" aria-labelledby="stack-title" className="border-y border-line bg-sunken py-24 lg:py-28">
    <Container>
      <SectionHeading
        id="stack-title"
        eyebrow="Technology"
        title="The tools behind the outcomes."
        intro="Clients buy outcomes, not programming languages — so this comes last. For the technically curious, here’s what I build with."
      />
      <dl className="reveal mt-12 grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-4">
        {STACK.map(({ group, items }) => (
          <div key={group} className="bg-surface p-6">
            <dt className="eyebrow mb-4">{group}</dt>
            <dd>
              <ul className="space-y-1.5 text-[0.95rem]">
                {items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Container>
  </section>
);

export default Stack;
