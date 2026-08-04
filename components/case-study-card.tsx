'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { DraftBadge } from '@/components/draft-badge';
import type { CaseStudy } from '@/content/case-studies';

const fields: { key: keyof CaseStudy; label: string }[] = [
  { key: 'context', label: 'Контекст' },
  { key: 'problem', label: 'Проблема' },
  { key: 'whyHard', label: 'Почему это было сложно' },
  { key: 'role', label: 'Моя роль' },
  { key: 'decisions', label: 'Какие решения принимались' },
  { key: 'tradeoffs', label: 'Компромиссы' },
  { key: 'outcome', label: 'Что получилось' },
  { key: 'learned', label: 'Чему научилась' },
];

export function CaseStudyCard({ study }: { study: CaseStudy }) {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-start justify-between gap-4 p-6 text-left"
      >
        <div>
          <div className="mb-2 flex flex-wrap items-center gap-2">
            <h3 className="text-lg font-medium">{study.title}</h3>
            {study.draft && <DraftBadge />}
          </div>
          <p className="text-sm text-muted-fg">{study.oneLiner}</p>
          {study.technologies.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {study.technologies.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-muted px-2.5 py-1 font-mono text-[11px] text-muted-fg"
                >
                  {t}
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
            <div className="border-t border-border p-6 pt-6">
              {study.draft && study.draftNote && (
                <div className="mb-6 rounded-xl border border-dashed border-accent/40 bg-accent/5 p-4">
                  <p className="mb-1 font-mono text-[11px] uppercase tracking-wide text-accent">
                    Чего не хватает
                  </p>
                  <p className="text-sm text-muted-fg">{study.draftNote}</p>
                </div>
              )}
              <div className="grid gap-6 sm:grid-cols-2">
                {fields.map(({ key, label }) => (
                  <div key={key}>
                    <p className="mb-1.5 font-mono text-[11px] uppercase tracking-wide text-accent">
                      {label}
                    </p>
                    <p className="text-sm leading-relaxed text-muted-fg">{study[key] as string}</p>
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
