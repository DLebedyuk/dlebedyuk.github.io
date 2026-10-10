'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { CaseStudyCard } from '@/components/case-study-card';
import type { CaseStudyCategory } from '@/content/case-studies';
import type { SiteContent } from '@/content';

type FilterValue = CaseStudyCategory | 'all';

export function CaseStudies({ c }: { c: SiteContent }) {
  const [active, setActive] = React.useState<FilterValue>('all');
  const t = c.ui.cases;
  const all = c.caseStudies;
  const filtered = active === 'all' ? all : all.filter((s) => s.category === active);
  const cats = c.categories.filter((cat) => all.some((s) => s.category === cat.id));

  return (
    <section id="case-studies" className="py-14 sm:py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow={t.eyebrow}
          title={t.title}
          description={c.showDrafts ? t.descriptionDraft : t.description}
        />

        <Reveal
          className="mb-10 -mx-5 flex gap-2 overflow-x-auto px-5 pb-1 sm:mx-0 sm:flex-wrap sm:overflow-visible sm:px-0 sm:pb-0"
          delay={0.05}
        >
          <FilterPill
            active={active === 'all'}
            onClick={() => setActive('all')}
            label={t.all}
            count={all.length}
          />
          {cats.map((cat) => (
            <FilterPill
              key={cat.id}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
              label={cat.label}
              count={all.filter((s) => s.category === cat.id).length}
            />
          ))}
        </Reveal>

        <div className="space-y-4">
          <AnimatePresence mode="popLayout" initial={false}>
            {filtered.map((study) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
              >
                <CaseStudyCard study={study} c={c} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </Container>
    </section>
  );
}

function FilterPill({
  active,
  onClick,
  label,
  count,
}: {
  active: boolean;
  onClick: () => void;
  label: string;
  count: number;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`shrink-0 whitespace-nowrap rounded-full border px-3.5 py-2 text-sm transition-colors ${
        active
          ? 'border-fg bg-fg text-bg'
          : 'border-border text-muted-fg hover:border-accent/50 hover:text-fg'
      }`}
    >
      {label} <span className="opacity-60">({count})</span>
    </button>
  );
}
