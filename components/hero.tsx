'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Linkedin, MapPin, Send } from 'lucide-react';
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
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl text-balance font-display text-3xl font-medium leading-[1.15] tracking-tight sm:text-4xl sm:leading-[1.1] md:text-5xl"
        >
          {profile.tagline}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.12 }}
          className="mt-6 max-w-2xl text-base leading-relaxed text-muted-fg sm:text-lg"
        >
          {profile.summary}
        </motion.p>

        <motion.ul
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="mt-5 flex flex-wrap gap-2"
        >
          {c.facts.map((f, i) => (
            <li
              key={f}
              className="inline-flex items-center gap-1.5 rounded-full bg-muted px-3 py-1.5 text-xs text-muted-fg sm:text-sm"
            >
              {i === 0 && <MapPin className="h-3.5 w-3.5" />}
              {f}
            </li>
          ))}
        </motion.ul>

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
            href={`https://t.me/${profile.telegram}`}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Send className="h-4 w-4" />
            {ui.contact.telegram}
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
          >
            <Linkedin className="h-4 w-4" />
            {ui.contact.linkedin}
          </a>
          <ResumeButtons c={c} className="contents" />
        </motion.div>

      </Container>
    </section>
  );
}
