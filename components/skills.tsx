import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function Skills({ c }: { c: SiteContent }) {
  return (
    <section id="skills" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={c.ui.skills.eyebrow} title={c.ui.skills.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 font-medium">{cat.title}</h3>
                <ul className="space-y-1.5 text-sm text-muted-fg">
                  {cat.items.map((item, j) => (
                    <li key={j}>{item}</li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
