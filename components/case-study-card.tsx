'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import type { CaseStudy } from '@/content/case-studies';
import type { SiteContent } from '@/content';

const fieldKeys = [
  'context',
  'problem',
  'whyHard',
  'role',
  'decisions',
  'tradeoffs',
  'outcome',
] as const;

export function CaseStudyCard({ study, c }: { study: CaseStudy; c: SiteContent }) {
  const [open, setOpen] = React.useState(false);
  const category = c.categories.find((x) => x.id === study.category);
  const t = c.ui.cases;
  const fields = fieldKeys.filter((k) => study[k].trim() !== '');

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-start justify-between gap-3 p-5 text-left sm:gap-4 sm:p-6"
      >
        <div className="min-w-0 flex-1">
          {category && (
            <p className="mb-2 font-mono text-[11px] uppercase tracking-wide text-muted-fg">
              {category.label}
            </p>
          )}
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-medium">{study.title}</h3>
          </div>
          {study.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {study.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-fg"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
        <ChevronDown
          className={`mt-1 h-5 w-5 shrink-0 text-muted-fg transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="border-t border-border p-5 pt-5 sm:p-6 sm:pt-6">
              <div className="grid gap-6 lg:grid-cols-2">
                {fields.map((key) => (
                  <div key={key}>
                    <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                      {t.fields[key]}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-fg">{study[key]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
