import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { timeline } from '@/content/timeline';

export function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Experience & Timeline"
          title="Где и над чем я работала"
          description="TODO: компании, роли и период — заполнить реальными данными."
        />
        <div className="relative border-l border-border pl-8">
          {timeline.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-wide text-muted-fg">
                {item.period}
              </p>
              <h3 className="mt-1 text-lg font-medium">
                {item.title} · {item.place}
              </h3>
              <p className="mt-2 max-w-2xl text-sm text-muted-fg">{item.summary}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
