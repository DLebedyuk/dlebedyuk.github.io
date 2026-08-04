import { Github, Mail } from 'lucide-react';
import { Container } from '@/components/container';
import { Reveal } from '@/components/reveal';
import { profile } from '@/content/profile';

export function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28">
      <Container>
        <Reveal className="rounded-2xl border border-border bg-card p-10 text-center md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">Contact</p>
          <h2 className="mt-3 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
            Обсудим проект?
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-muted-fg">
            Пишите на почту или заходите в GitHub — TODO: добавить LinkedIn/Telegram, если хочешь
            их показывать.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
            >
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
