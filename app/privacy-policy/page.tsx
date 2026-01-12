import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Shield } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Privacy Policy | Vilvam Foundation",
  description:
    "Learn how Vilvam Foundation protects your privacy and handles personal information collected through our website and donation activities.",
}

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Shield className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">Privacy Policy</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Last Updated: December 28, 2025
          </p>

          <div className="bg-card rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Introduction</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vilvam Foundation ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy
                explains how we collect, use, and protect your personal information when you visit our website or
                interact with our charitable services in Tamil Nadu and Puducherry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Information We Collect</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We may collect the following types of information:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Contact information (name, email address, phone number)</li>
                <li>Donation details and transaction information</li>
                <li>Volunteer registration information</li>
                <li>Website usage data through cookies and analytics</li>
                <li>Communication preferences and feedback</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">How We Use Your Information</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use your personal information for the following purposes:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Processing donations and issuing receipts</li>
                <li>Coordinating volunteer activities and community programs</li>
                <li>Sending updates about our work and impact reports</li>
                <li>Responding to inquiries and providing support</li>
                <li>Improving our website and services</li>
                <li>Complying with legal and regulatory requirements</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Data Protection</h2>
              <p className="text-muted-foreground leading-relaxed">
                We implement appropriate security measures to protect your personal information from unauthorized
                access, alteration, disclosure, or destruction. However, no method of transmission over the internet is
                100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Services</h2>
              <p className="text-muted-foreground leading-relaxed">
                Our website may contain links to third-party services such as WhatsApp for communication and payment
                gateways for donations. These third parties have their own privacy policies, and we are not responsible
                for their practices. We encourage you to review their policies before sharing personal information.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Your Rights</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">You have the right to:</p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Access and review your personal information</li>
                <li>Request corrections to inaccurate data</li>
                <li>Opt-out of marketing communications</li>
                <li>Request deletion of your personal information (subject to legal requirements)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Cookies and Tracking</h2>
              <p className="text-muted-foreground leading-relaxed">
                We use cookies and similar technologies to enhance your browsing experience, analyze website traffic,
                and understand user behavior. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to This Policy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We may update this Privacy Policy from time to time to reflect changes in our practices or legal
                requirements. We will post the updated policy on this page with a revised "Last Updated" date.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Us</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns about this Privacy Policy or how we handle your personal
                information, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vilvam Foundation</strong>
                  <br />
                  Villianur, Puducherry - 605110
                  <br />
                  Email: info@vilvamfoundation.org
                  <br />
                  Contact us via WhatsApp for faster response
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
