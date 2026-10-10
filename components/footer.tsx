import { Container } from '@/components/container';
import type { SiteContent } from '@/content';

export function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-xs text-muted-fg sm:flex-row">
        <p>
          © {new Date().getFullYear()} {c.profile.name}
        </p>
        <p>{c.ui.footer.built}</p>
      </Container>
    </footer>
  );
}
