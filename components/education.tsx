import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function Education({ c }: { c: SiteContent }) {
  const t = c.ui.education;
  return (
    <section id="education" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} />
        <div className="grid gap-4 md:grid-cols-2">
          {c.education.map((e, i) => (
            <Reveal key={e.place} delay={i * 0.05}>
              <div className="h-full rounded-2xl border border-border bg-card p-6">
                <p className="font-mono text-xs uppercase tracking-wide text-muted-fg">
                  {e.period} · {e.city}
                </p>
                <h3 className="mt-2 font-medium">{e.place}</h3>
                <p className="mt-1 text-sm text-muted-fg">{e.program}</p>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-8" delay={0.1}>
          <p className="mb-3 font-mono text-[11px] uppercase tracking-wide text-accent">{t.additional}</p>
          <ul className="space-y-2 text-sm text-muted-fg">
            {c.courses.map((k) => (
              <li key={k.provider + k.name} className="flex gap-2">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                <span>
                  <span className="font-medium text-fg">{k.provider}</span> — {k.name}
                </span>
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
