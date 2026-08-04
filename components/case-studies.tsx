import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { CaseStudyCard } from '@/components/case-study-card';
import { caseStudies } from '@/content/case-studies';

export function CaseStudies() {
  return (
    <section id="case-studies" className="py-20 md:py-28">
      <Container>
        <SectionHeading
          eyebrow="Engineering Case Studies"
          title="Инженерные истории, а не строчки из Jira"
          description="Каждый кейс — конкретная задача: контекст, ограничения, решения и компромиссы. Пока это каркас: содержание нужно наполнить."
        />
        <div className="space-y-4">
          {caseStudies.map((study) => (
            <Reveal key={study.slug}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
