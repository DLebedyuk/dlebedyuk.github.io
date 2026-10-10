import { RootShell, buildMetadata } from '@/lib/root-layout';

export const metadata = buildMetadata('en');

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <RootShell locale="en">{children}</RootShell>;
}
