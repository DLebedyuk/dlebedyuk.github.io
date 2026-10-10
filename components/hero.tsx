'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Github, Mail } from 'lucide-react';
import { Container } from '@/components/container';
import { ResumeButtons } from '@/components/resume-buttons';
import type { SiteContent } from '@/content';

export function Hero({ c }: { c: SiteContent }) {
  const { profile, ui } = c;
  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-16 sm:pt-28 sm:pb-20 md:pt-36 md:pb-32">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_20%_-10%,rgb(var(--accent)/0.14),transparent_45%)]"
      />
      <Container>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-5 font-mono text-sm text-accent"
        >
          {profile.role}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-balance text-3xl font-semibold leading-[1.15] tracking-tight sm:text-4xl sm:leading-[1.1] md:text-5xl lg:text-6xl"
        >
          {profile.tagline}
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.18 }}
          className="mt-8 flex flex-col gap-3 sm:mt-9 sm:flex-row sm:flex-wrap sm:items-center"
        >
          <a
            href="#case-studies"
            className="inline-flex items-center justify-center gap-2 rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-transform hover:-translate-y-0.5"
          >
            {ui.hero.cases}
            <ArrowDown className="h-4 w-4" />
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Github className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Mail className="h-4 w-4" />
            {ui.hero.write}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.24 }}
          className="mt-3"
        >
          <ResumeButtons c={c} />
        </motion.div>
      </Container>
    </section>
  );
}
