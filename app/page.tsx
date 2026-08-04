import { Nav } from '@/components/nav';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { EnjoySolving } from '@/components/enjoy-solving';
import { CaseStudies } from '@/components/case-studies';
import { Experience } from '@/components/experience';
import { Projects } from '@/components/projects';
import { Skills } from '@/components/skills';
import { Architecture } from '@/components/architecture';
import { Achievements } from '@/components/achievements';
import { GithubSection } from '@/components/github-section';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <EnjoySolving />
        <CaseStudies />
        <Experience />
        <Projects />
        <Skills />
        <Architecture />
        <Achievements />
        <GithubSection />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
