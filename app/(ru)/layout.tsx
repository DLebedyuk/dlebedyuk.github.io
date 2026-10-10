import { RootShell, buildMetadata } from '@/lib/root-layout';

export const metadata = buildMetadata('ru');

export default function RuLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="ru">{children}</RootShell>;
}
