'use client';

import type { Locale } from '@/content/ui';

// Переключатель RU / EN. Ведёт на / или /en/ и сохраняет текущий якорь (#about и т.п.).
export function LangSwitch({ locale, label }: { locale: Locale; label: string }) {
  const go = (target: Locale) => (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const base = target === 'en' ? '/en/' : '/';
    window.location.href = base + window.location.hash;
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="flex h-9 items-center rounded-full border border-border p-0.5 font-mono text-xs"
    >
      {(['ru', 'en'] as const).map((l) => (
        <a
          key={l}
          href={l === 'en' ? '/en/' : '/'}
          hrefLang={l}
          lang={l}
          aria-current={locale === l ? 'true' : undefined}
          onClick={locale === l ? (e) => e.preventDefault() : go(l)}
          className={`flex h-full items-center rounded-full px-2.5 uppercase transition-colors ${
            locale === l ? 'bg-fg text-bg' : 'text-muted-fg hover:text-fg'
          }`}
        >
          {l}
        </a>
      ))}
    </div>
  );
}
