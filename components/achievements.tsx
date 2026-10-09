import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { achievements } from '@/content/achievements';

export function Achievements() {
  return (
    <section id="achievements" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Selected Achievements"
          title="Измеримые результаты"
          description="TODO: цифры и метрики — самая убедительная часть портфолио, а сейчас самая пустая."
        />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {achievements.map((a, i) => (
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
