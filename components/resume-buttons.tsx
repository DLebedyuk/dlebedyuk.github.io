import { Download } from 'lucide-react';
import type { SiteContent } from '@/content';
import { cn } from '@/lib/utils';

export function ResumeButtons({ c, className }: { c: SiteContent; className?: string }) {
  const items = [
    { href: c.profile.resume.ru, label: c.ui.resume.ru, file: 'Lebedyuk-Daria-resume-ru.pdf' },
    { href: c.profile.resume.en, label: c.ui.resume.en, file: 'Lebedyuk-Daria-resume-en.pdf' },
  ];
  return (
    <div className={cn('flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center', className)}>
      {items.map((it) => (
        <a
          key={it.href}
          href={it.href}
          download={it.file}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-muted"
        >
          <Download className="h-4 w-4" />
          {it.label}
          <span className="font-mono text-[11px] text-muted-fg">PDF</span>
        </a>
      ))}
    </div>
  );
}
