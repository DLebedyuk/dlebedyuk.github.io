import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function Experience({ c }: { c: SiteContent }) {
  const t = c.ui.experience;
  return (
    <section id="experience" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className="relative border-l border-border pl-8">
          {c.timeline.map((item, i) => (
            <Reveal key={i} delay={i * 0.05} className="relative mb-10 last:mb-0">
              <span className="absolute -left-[2.35rem] top-1.5 h-2.5 w-2.5 rounded-full bg-accent" />
              <p className="font-mono text-xs uppercase tracking-wide text-muted-fg">
                {item.period} · {item.location}
              </p>
              <h3 className="mt-1 text-lg font-medium">
                {item.place} · {item.title}
              </h3>
              <ul className="mt-3 max-w-3xl space-y-2.5 text-sm text-muted-fg">
                {item.bullets.map((b) => (
                  <li key={b.title} className="flex gap-2">
                    <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                    <span>
                      <span className="font-medium text-fg">{b.title}.</span> {b.text}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
