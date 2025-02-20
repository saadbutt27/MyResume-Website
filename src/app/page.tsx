import HeroSection from "@/components/sections/Hero";
import AboutSection from "@/components/sections/About";
import EducationSection from "@/components/sections/Education";
import SkillsSection from "@/components/sections/Skills";
import ProjectsSection from "@/components/sections/Projects";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <EducationSection />
      {/* <SkillsSection /> */}
      <ProjectsSection />
      <ContactSection/>
    </>
  );
}
