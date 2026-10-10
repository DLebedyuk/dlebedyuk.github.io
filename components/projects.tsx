import { ExternalLink, GitFork } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import type { SiteContent } from '@/content';

export function Projects({ c }: { c: SiteContent }) {
  const t = c.ui.projects;
  return (
    <section id="projects" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow={t.eyebrow} title={t.title} description={t.description} />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {c.projects.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.04}>
              <a
                href={p.url}
                target="_blank"
                rel="noreferrer"
                className="group flex h-full flex-col justify-between rounded-2xl border border-border bg-card p-6 transition-colors hover:border-accent/50"
              >
                <div>
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="font-medium">{p.name}</h3>
                    <ExternalLink className="h-4 w-4 text-muted-fg transition-colors group-hover:text-accent" />
                  </div>
                  {p.description && <p className="text-sm text-muted-fg">{p.description}</p>}
                </div>
                <div className="mt-4 flex items-center gap-3 text-xs text-muted-fg">
                  {p.language && <span className="font-mono">{p.language}</span>}
                  {p.isFork && (
                    <span className="inline-flex items-center gap-1">
                      <GitFork className="h-3 w-3" /> {t.fork}
                    </span>
                  )}
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
