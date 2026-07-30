import AboutSection from "./components/sections/AboutSection"
import ContactSection from "./components/sections/ContactSection"
import ExperienceSection from "./components/sections/ExperienceSection"
import Footer from "./components/sections/Footer"
import HeroSection from "./components/sections/HeroSection"
import SkillsSection from "./components/sections/SkillsSection"
import WorkSection from "./components/sections/WorkSection"
import WorksOSSection from "./components/sections/WorksOSSection"
import useReveal from "./hooks/useReveal"

export default function App() {
  useReveal()

  return (
    <div className="newspaper-page">
      <HeroSection
        onNext={() =>
          document
            .getElementById("about")
            ?.scrollIntoView({ behavior: "smooth" })
        }
      />
      <AboutSection />
      <SkillsSection />
      <WorkSection />
      <WorksOSSection />
      <ExperienceSection />
      <ContactSection />
      <Footer />
    </div>
  )
}
