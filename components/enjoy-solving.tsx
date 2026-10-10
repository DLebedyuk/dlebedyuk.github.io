import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function EnjoySolving({ c }: { c: SiteContent }) {
  return (
    <section id="enjoy" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={c.ui.enjoy.eyebrow} title={c.ui.enjoy.title} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.enjoySolving.map((item, i) => (
            <Reveal key={item.title} delay={i * 0.04}>
              <div className="h-full rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50">
                <h3 className="font-medium">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-fg">{item.description}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
