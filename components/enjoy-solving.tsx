import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { enjoySolving } from '@/content/profile';

export function EnjoySolving() {
  return (
    <section id="enjoy" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="Things I Enjoy Solving" title="Что мне интересно решать" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {enjoySolving.map((item, i) => (
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
