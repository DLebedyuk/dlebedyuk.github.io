import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function About({ c }: { c: SiteContent }) {
  return (
    <section id="about" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={c.ui.about.eyebrow} title={c.ui.about.title} />
        <Reveal className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]" delay={0.05}>
          <div className="space-y-4 text-lg leading-relaxed text-muted-fg">
            <p>{c.profile.about}</p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <p className="mb-4 font-mono text-[11px] uppercase tracking-wide text-accent">
              {c.ui.about.keySkills}
            </p>
            <ul className="space-y-3 text-sm text-muted-fg">
              {c.keySkills.map((item) => (
                <li key={item} className="flex gap-2">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
