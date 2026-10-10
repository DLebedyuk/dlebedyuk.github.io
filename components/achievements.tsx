import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function Achievements({ c }: { c: SiteContent }) {
  const t = c.ui.achievements;
  if (c.achievements.length === 0) return null;
  return (
    <section id="achievements" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={c.showDrafts ? t.descriptionDraft : undefined}
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.achievements.map((a, i) => (
            <Reveal key={i} delay={i * 0.05}>
              <div className="rounded-2xl border border-dashed border-border bg-card p-5 text-center sm:p-6">
                <p className="text-3xl font-semibold text-accent">{a.metric}</p>
                <p className="mt-2 text-sm font-medium">{a.label}</p>
                <p className="mt-1 text-xs text-muted-fg">{a.context}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
