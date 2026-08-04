import { Github, Star, Users } from 'lucide-react';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { githubStats } from '@/content/projects';

export function GithubSection() {
  return (
    <section id="github" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="GitHub" title="Открытый код" />
        <Reveal>
          <a
            href={githubStats.profileUrl}
            target="_blank"
            rel="noreferrer"
            className="group flex flex-col items-start justify-between gap-6 rounded-2xl border border-border bg-card p-8 transition-colors hover:border-accent/50 sm:flex-row sm:items-center"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-muted">
                <Github className="h-6 w-6" />
              </div>
              <div>
                <p className="font-medium">github.com/{githubStats.username}</p>
                <p className="text-sm text-muted-fg">
                  {githubStats.publicRepos} репозиториев · Arctic Code Vault Contributor
                </p>
              </div>
            </div>
            <div className="flex gap-6 text-sm text-muted-fg">
              <span className="inline-flex items-center gap-1.5">
                <Star className="h-4 w-4" /> звёзды
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Users className="h-4 w-4" /> {githubStats.followers} подписчиков
              </span>
            </div>
          </a>
        </Reveal>
      </Container>
    </section>
  );
}
