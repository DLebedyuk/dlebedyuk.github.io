import { Container } from '@/components/container';
import type { SiteContent } from '@/content';

export function Footer({ c }: { c: SiteContent }) {
  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="text-center text-xs text-muted-fg sm:text-left">
        <p>
          © {new Date().getFullYear()} {c.profile.name}
        </p>
      </Container>
    </footer>
  );
}
