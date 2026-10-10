import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { Container } from '@/components/container';
import { Reveal } from '@/components/reveal';
import { ResumeButtons } from '@/components/resume-buttons';
import type { SiteContent } from '@/content';

const btn =
  'inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted';

export function Contact({ c }: { c: SiteContent }) {
  const t = c.ui.contact;
  const { profile } = c;
  return (
    <section id="contact" className="py-14 sm:py-20 md:py-28">
      <Container>
        <Reveal className="rounded-2xl border border-border bg-card p-6 text-center sm:p-10 md:p-16">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-accent">{t.eyebrow}</p>
          <h2 className="mt-3 text-balance text-2xl font-semibold tracking-tight sm:text-3xl md:text-4xl">
            {t.title}
          </h2>
          <p className="mx-auto mt-4 max-w-md text-balance text-muted-fg">{t.text}</p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
            >
              <Mail className="h-4 w-4" />
              {profile.email}
            </a>
            {profile.telegram && (
              <a href={`https://t.me/${profile.telegram}`} target="_blank" rel="noreferrer" className={btn}>
                <Send className="h-4 w-4" />
                {t.telegram}
              </a>
            )}
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className={btn}>
              <Linkedin className="h-4 w-4" />
              {t.linkedin}
            </a>
            <a href={profile.github} target="_blank" rel="noreferrer" className={btn}>
              <Github className="h-4 w-4" />
              GitHub
            </a>
          </div>
          <ResumeButtons c={c} className="mt-3 justify-center" />
        </Reveal>
      </Container>
    </section>
  );
}
