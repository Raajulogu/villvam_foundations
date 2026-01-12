import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { FileText } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Terms of Service | Vilvam Foundation",
  description:
    "Terms and conditions for using the Vilvam Foundation website and participating in our charitable programs.",
}

export default function TermsOfServicePage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <FileText className="w-8 h-8 text-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">Terms of Service</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Last Updated: December 28, 2025</p>

          <div className="bg-card rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Agreement to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                By accessing and using the Vilvam Foundation website ("the Website"), you agree to be bound by these
                Terms of Service. If you do not agree with any part of these terms, please do not use our website or
                services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Website Usage</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You agree to use the Website only for lawful purposes and in accordance with these Terms. You must not:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Use the Website in any way that violates applicable laws or regulations</li>
                <li>Attempt to gain unauthorized access to any portion of the Website</li>
                <li>Interfere with or disrupt the Website or servers connected to it</li>
                <li>Transmit any harmful code, viruses, or malicious software</li>
                <li>Misrepresent your identity or affiliation with any person or organization</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Content Accuracy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We strive to provide accurate and up-to-date information about our charitable activities, programs, and
                impact. However, we do not guarantee the completeness or accuracy of all content on the Website.
                Information about our services, beneficiaries, and impact stories is provided in good faith and may be
                updated periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Intellectual Property</h2>
              <p className="text-muted-foreground leading-relaxed">
                All content on the Website, including text, images, logos, graphics, and design elements, is the
                property of Vilvam Foundation or its content suppliers and is protected by copyright and intellectual
                property laws. You may not reproduce, distribute, or create derivative works without our express written
                permission.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Donations and Transactions</h2>
              <p className="text-muted-foreground leading-relaxed">
                Donations made through the Website are voluntary and non-refundable unless otherwise stated in our
                Donation Policy. By making a donation, you agree that the funds will be used to support Vilvam
                Foundation's charitable activities at our discretion, in line with our mission to serve communities in
                Tamil Nadu and Puducherry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Third-Party Links</h2>
              <p className="text-muted-foreground leading-relaxed">
                The Website may contain links to third-party websites, including social media platforms and payment
                processors. We are not responsible for the content, privacy practices, or terms of service of these
                external sites. Accessing third-party links is at your own risk.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Limitation of Liability</h2>
              <p className="text-muted-foreground leading-relaxed">
                To the fullest extent permitted by law, Vilvam Foundation shall not be liable for any direct, indirect,
                incidental, or consequential damages arising from your use of the Website or reliance on any information
                provided. This includes, but is not limited to, loss of data, service interruptions, or errors in
                content.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Indemnification</h2>
              <p className="text-muted-foreground leading-relaxed">
                You agree to indemnify and hold harmless Vilvam Foundation, its directors, officers, volunteers, and
                partners from any claims, damages, losses, or expenses arising from your use of the Website or violation
                of these Terms of Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Changes to Terms</h2>
              <p className="text-muted-foreground leading-relaxed">
                We reserve the right to modify or update these Terms of Service at any time without prior notice. Your
                continued use of the Website after changes are posted constitutes your acceptance of the revised terms.
                We encourage you to review this page periodically.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Governing Law</h2>
              <p className="text-muted-foreground leading-relaxed">
                These Terms of Service shall be governed by and construed in accordance with the laws of India. Any
                disputes arising from these terms or your use of the Website shall be subject to the exclusive
                jurisdiction of the courts in Puducherry, India.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Contact Information</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions or concerns regarding these Terms of Service, please contact us:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vilvam Foundation</strong>
                  <br />
                  Villianur, Puducherry - 605110
                  <br />
                  Email: info@vilvamfoundation.org
                  <br />
                  Contact us via WhatsApp for immediate assistance
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
