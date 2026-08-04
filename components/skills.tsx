import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { skillCategories } from '@/content/skills';

export function Skills() {
  return (
    <section id="skills" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Technical Skills" title="Стек и области" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillCategories.map((cat, i) => (
            <Reveal key={cat.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <h3 className="mb-3 font-medium">{cat.title}</h3>
                <ul className="space-y-1.5 text-sm text-muted-fg">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
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
