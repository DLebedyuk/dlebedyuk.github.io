import type { Metadata } from 'next';
import { Onest, Unbounded, IBM_Plex_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { getContent, type Locale } from '@/content';
import { SITE_URL } from '@/lib/config';
import '../app/globals.css';

// Onest — основной текст, Unbounded — крупные заголовки, IBM Plex Mono — мелкие подписи.
// У всех трёх есть кириллица (у прежнего моноширинного её не было, русские подписи падали в системный шрифт).
const sans = Onest({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' });
const display = Unbounded({ subsets: ['latin', 'cyrillic'], variable: '--font-display', display: 'swap' });
const mono = IBM_Plex_Mono({ subsets: ['latin', 'cyrillic'], weight: ['400', '500'], variable: '--font-mono', display: 'swap' });

export function buildMetadata(locale: Locale): Metadata {
  const c = getContent(locale);
  return {
    metadataBase: new URL(SITE_URL),
    title: `${c.profile.name} — ${c.ui.siteTitleSuffix}`,
    description: c.profile.tagline,
    alternates: {
      canonical: locale === 'en' ? '/en/' : '/',
      languages: { ru: '/', en: '/en/' },
    },
  };
}

export function RootShell({ locale, children }: { locale: Locale; children: React.ReactNode }) {
  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${sans.variable} ${display.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
