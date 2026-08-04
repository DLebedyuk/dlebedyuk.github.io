import { Container } from '@/components/container';
import { SectionHeading } from '@/components/section-heading';
import { Reveal } from '@/components/reveal';
import { DraftBadge } from '@/components/draft-badge';
import { profile } from '@/content/profile';

export function About() {
  return (
    <section id="about" className="py-20 md:py-28">
      <Container>
        <SectionHeading eyebrow="About" title="Коротко о том, как я работаю" />
        <Reveal className="grid gap-8 md:grid-cols-[1.2fr_0.8fr]" delay={0.05}>
          <div className="space-y-4 text-lg leading-relaxed text-muted-fg">
            <p>{profile.summary}</p>
            <p className="text-sm text-muted-fg/80">
              TODO: добавить 2-3 абзаца о подходе к работе — как выбираешь приоритеты, как
              общаешься с заказчиком, что для тебя значит &laquo;хорошо сделанный релиз&raquo; и
              т.п. Без пунктов &laquo;руководила / общалась / вела документацию&raquo; — я знаю,
              ты просила без этого.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-6">
            <dl className="space-y-4 text-sm">
              <div>
                <dt className="text-muted-fg">Локация</dt>
                <dd className="mt-1 font-medium">{profile.location}</dd>
              </div>
              <div>
                <dt className="text-muted-fg">Опыт</dt>
                <dd className="mt-1 font-medium">TODO: сколько лет / в каких доменах</dd>
              </div>
              <div>
                <dt className="text-muted-fg">Домен</dt>
                <dd className="mt-1 font-medium">TODO: логистика / порты / госинтеграции?</dd>
              </div>
            </dl>
            <div className="mt-5">
              <DraftBadge />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
