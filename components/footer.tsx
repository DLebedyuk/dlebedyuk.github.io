import { Container } from '@/components/container';
import { profile } from '@/content/profile';

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="flex flex-col items-center justify-between gap-2 text-xs text-muted-fg sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}
        </p>
        <p>Собрано на Next.js + Tailwind + Framer Motion</p>
      </Container>
    </footer>
  );
}
