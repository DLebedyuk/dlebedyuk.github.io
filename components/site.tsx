import { getContent, type Locale } from '@/content';
import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { EnjoySolving } from '@/components/enjoy-solving';
import { CaseStudies } from '@/components/case-studies';
import { Experience } from '@/components/experience';
import { Education } from '@/components/education';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Achievements } from '@/components/achievements';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export function Site({ locale }: { locale: Locale }) {
  const c = getContent(locale);
  return (
    <>
      <Nav c={c} />
      <main>
        <Hero c={c} />
        <About c={c} />
        <EnjoySolving c={c} />
        <CaseStudies c={c} />
        <Experience c={c} />
        <Education c={c} />
        <Projects c={c} />
        <Skills c={c} />
        <Achievements c={c} />
        <Contact c={c} />
      </main>
      <Footer c={c} />
    </>
  );
}
