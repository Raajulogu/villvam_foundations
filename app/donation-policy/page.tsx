import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { Heart } from "lucide-react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Donation Policy | Vilvam Foundation",
  description:
    "Learn how your donations support Vilvam Foundation's charitable work in Tamil Nadu and Puducherry. Transparent fund usage and refund policy.",
}

export default function DonationPolicyPage() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 bg-gradient-to-br from-background via-secondary/5 to-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="flex items-center justify-center mb-8">
            <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center">
              <Heart className="w-8 h-8 text-primary fill-primary" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-center mb-6 text-balance">Donation Policy</h1>
          <p className="text-center text-muted-foreground mb-12 text-lg">Last Updated: December 28, 2025</p>

          <div className="bg-card rounded-2xl shadow-sm p-8 md:p-12 space-y-8">
            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Our Commitment to You</h2>
              <p className="text-muted-foreground leading-relaxed">
                At Vilvam Foundation, we are deeply grateful for your generosity and trust. Every donation we receive is
                treated with the utmost care and respect. This Donation Policy outlines how we handle contributions and
                ensure your donations make a meaningful impact in the communities we serve across Tamil Nadu and
                Puducherry.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Purpose of Donations</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All donations received by Vilvam Foundation are used exclusively for charitable purposes, including but
                not limited to:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Food distribution and relief programs for vulnerable families</li>
                <li>Educational support including scholarships and learning materials</li>
                <li>Medical assistance and healthcare initiatives</li>
                <li>Financial aid for emergency situations</li>
                <li>Community development and environmental conservation projects</li>
                <li>Operational costs necessary to deliver these services efficiently</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Transparency and Accountability</h2>
              <p className="text-muted-foreground leading-relaxed">
                We believe in complete transparency regarding how your donations are utilized. We publish quarterly
                impact reports and financial summaries on our website and through our newsletter. These reports provide
                detailed breakdowns of fund allocation, beneficiary statistics, and the tangible outcomes of your
                generosity.
              </p>
              <div className="mt-4 p-6 bg-accent/10 border-l-4 border-accent rounded-r-lg">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">100% Direct Impact:</strong> We strive to ensure that the maximum
                  portion of every donation goes directly to beneficiaries. Our administrative costs are kept to a
                  minimum through volunteer support and efficient operations.
                </p>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Donation Methods</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                You can contribute to Vilvam Foundation through the following methods:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>WhatsApp donations for quick and convenient contributions</li>
                <li>Bank transfers and online payment gateways</li>
                <li>In-kind donations (food, clothing, educational materials, medical supplies)</li>
                <li>Corporate social responsibility (CSR) partnerships</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                All monetary donations are securely processed, and you will receive a confirmation and receipt for your
                records.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Tax Benefits</h2>
              <p className="text-muted-foreground leading-relaxed">
                Vilvam Foundation is committed to obtaining the necessary registrations to provide tax exemption
                benefits under Section 80G of the Income Tax Act in India. Please contact us directly to inquire about
                the current status of tax-deductible receipts for your donations.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Refund Policy</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                All donations are generally non-refundable and final. However, we understand that errors can occur. We
                will consider refund requests in the following circumstances:
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground ml-4">
                <li>Duplicate or accidental transactions made in error</li>
                <li>Technical errors during payment processing</li>
                <li>Unauthorized transactions reported within 7 days</li>
              </ul>
              <p className="text-muted-foreground leading-relaxed mt-4">
                To request a refund, please contact us immediately via WhatsApp or email with your transaction details.
                Refund requests will be reviewed on a case-by-case basis and processed within 14 business days if
                approved.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Designated vs. General Donations</h2>
              <p className="text-muted-foreground leading-relaxed">
                You may choose to make a <strong>designated donation</strong> for a specific program (e.g., food
                distribution, education support) or a <strong>general donation</strong> that allows us to allocate funds
                where they are needed most urgently. If a designated program is fully funded or discontinued, we reserve
                the right to redirect those funds to similar charitable activities unless you request otherwise.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Donor Privacy</h2>
              <p className="text-muted-foreground leading-relaxed">
                We respect the privacy of all our donors. Your personal information will not be sold, traded, or shared
                with third parties for marketing purposes. We may publicly acknowledge donations with your consent, but
                anonymous donations are always welcome and respected.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Recognition and Gratitude</h2>
              <p className="text-muted-foreground leading-relaxed">
                Every donation, regardless of size, makes a profound difference in the lives of the people we serve. We
                send personalized acknowledgments and impact updates to our donors, helping you see the tangible results
                of your compassion and support.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold mb-4 text-foreground">Questions and Support</h2>
              <p className="text-muted-foreground leading-relaxed">
                If you have any questions about our Donation Policy, how your contribution will be used, or need
                assistance with a donation, please don't hesitate to reach out:
              </p>
              <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                <p className="text-muted-foreground">
                  <strong className="text-foreground">Vilvam Foundation</strong>
                  <br />
                  Villianur, Puducherry - 605110
                  <br />
                  Email: info@vilvamfoundation.org
                  <br />
                  WhatsApp: Quick support and donation assistance
                </p>
              </div>
              <p className="text-muted-foreground leading-relaxed mt-6 text-center italic">
                Thank you for believing in our mission and supporting communities in need. Together, we are creating
                lasting change.
              </p>
            </section>
          </div>
        </div>
      </div>
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
