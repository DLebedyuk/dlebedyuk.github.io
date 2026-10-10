import type { Metadata } from 'next';
import { Inter, JetBrains_Mono } from 'next/font/google';
import { ThemeProvider } from '@/components/theme-provider';
import { getContent, type Locale } from '@/content';
import { SITE_URL } from '@/lib/config';
import '../app/globals.css';

const inter = Inter({ subsets: ['latin', 'cyrillic'], variable: '--font-sans', display: 'swap' });
const mono = JetBrains_Mono({ subsets: ['latin'], variable: '--font-mono', display: 'swap' });

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
      <body className={`${inter.variable} ${mono.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
