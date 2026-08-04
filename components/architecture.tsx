import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { integrationNodes } from '@/content/architecture';

export function Architecture() {
  const external = integrationNodes.filter((n) => n.kind === 'external');
  const internal = integrationNodes.filter((n) => n.kind === 'internal');

  return (
    <section id="architecture" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Architecture & Integrations"
          title="Карта интеграций"
          description="TODO: заменить на реальную диаграмму потоков данных, когда будут детали по каждой системе."
        />
        <Reveal>
          <div className="rounded-2xl border border-border bg-card p-8">
            <div className="grid gap-8 md:grid-cols-[1fr_auto_1fr] md:items-center">
              <div className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted-fg">
                  Внешние системы
                </p>
                {external.map((n) => (
                  <div key={n.name} className="rounded-xl border border-border bg-bg p-3">
                    <p className="text-sm font-medium">{n.name}</p>
                    <p className="mt-0.5 text-xs text-muted-fg">{n.note}</p>
                  </div>
                ))}
              </div>

              <div className="hidden h-full w-px bg-border md:block" />

              <div className="space-y-3">
                <p className="font-mono text-[11px] uppercase tracking-wide text-muted-fg">
                  Ядро
                </p>
                {internal.map((n) => (
                  <div
                    key={n.name}
                    className="rounded-xl border border-accent/40 bg-accent/5 p-3"
                  >
                    <p className="text-sm font-medium">{n.name}</p>
                    <p className="mt-0.5 text-xs text-muted-fg">{n.note}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
