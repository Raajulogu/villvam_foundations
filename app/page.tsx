import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/sections/hero-section"
import { AboutSection } from "@/components/sections/about-section"
import { ServicesSection } from "@/components/sections/services-section"
import { LeadershipSection } from "@/components/sections/leadership-section"
import { ImpactSection } from "@/components/sections/impact-section"
import { TestimonialsSection } from "@/components/sections/testimonials-section"
import { BlogSection } from "@/components/sections/blog-section"
import { ContactSection } from "@/components/sections/contact-section"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"

export default function Home() {
  console.log("[v0] Rendering Home Page")
  return (
    <main className="min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <LeadershipSection />
      <ImpactSection />
      <TestimonialsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
