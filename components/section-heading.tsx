import { Reveal } from '@/components/reveal';

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <Reveal className="mb-10 md:mb-14">
      <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
      <h2 className="text-balance font-display text-2xl font-medium tracking-tight md:text-3xl">{title}</h2>
      {description && (
        <p className="mt-4 max-w-2xl text-balance text-muted-fg">{description}</p>
      )}
    </Reveal>
  );
}
