import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

// Навыки строками, как в резюме: слева название, справа список через точку.
export function Skills({ c }: { c: SiteContent }) {
  return (
    <section id="skills" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={c.ui.skills.eyebrow} title={c.ui.skills.title} />
        <Reveal>
          <dl className="divide-y divide-border rounded-2xl border border-border bg-card">
            {c.skillCategories.map((cat) => (
              <div key={cat.title} className="grid gap-1.5 px-5 py-4 sm:grid-cols-[13rem_1fr] sm:gap-6 sm:px-6">
                <dt className="font-mono text-xs uppercase tracking-wide text-accent sm:pt-0.5">{cat.title}</dt>
                <dd className="text-sm leading-relaxed text-muted-fg">{cat.items.join(' · ')}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </Container>
    </section>
  );
}
