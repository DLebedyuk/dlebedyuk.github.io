'use client';

import * as React from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { CaseStudyCard } from '@/components/case-study-card';
import { caseStudies, caseStudyCategories, type CaseStudyCategory } from '@/content/case-studies';

type FilterValue = CaseStudyCategory | 'all';

export function CaseStudies() {
  const [active, setActive] = React.useState<FilterValue>('all');

  const filtered =
    active === 'all' ? caseStudies : caseStudies.filter((s) => s.category === active);

  return (
    <section id="case-studies" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Engineering Case Studies"
          title="Инженерные истории, а не строчки из Jira"
          description="Контекст, ограничения, решения и компромиссы по каждой задаче. Ни у одной пока нет подтверждённых цифр — это честно помечено на карточке."
        />

        <Reveal className="mb-10 flex flex-wrap gap-2" delay={0.05}>
          <FilterPill
            active={active === 'all'}
            onClick={() => setActive('all')}
            label="Все"
            count={caseStudies.length}
          />
          {caseStudyCategories.map((cat) => (
            <FilterPill
              key={cat.id}
              active={active === cat.id}
              onClick={() => setActive(cat.id)}
              label={cat.label}
              count={caseStudies.filter((s) => s.category === cat.id).length}
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
                <CaseStudyCard study={study} />
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
      className={`rounded-full border px-4 py-2 text-sm transition-colors ${
        active
          ? 'border-fg bg-fg text-bg'
          : 'border-border text-muted-fg hover:border-accent/50 hover:text-fg'
      }`}
    >
      {label} <span className="opacity-60">({count})</span>
    </button>
  );
}
