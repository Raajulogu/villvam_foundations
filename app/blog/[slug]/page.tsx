import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ArrowLeft, MessageCircle } from "lucide-react"

export default async function BlogDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params

  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <Button asChild variant="ghost" className="mb-8">
          <Link href="/blog">
            <ArrowLeft className="mr-2 w-4 h-4" /> Back to Updates
          </Link>
        </Button>
        <article className="prose prose-lg dark:prose-invert max-w-none">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Detailed Update: {slug.replace(/-/g, " ")}</h1>
          <div className="bg-muted aspect-video rounded-3xl mb-8 flex items-center justify-center">
            <p className="text-muted-foreground italic">Indian community service visual placeholder</p>
          </div>
          <p className="text-xl leading-relaxed mb-6">
            Detailed information about the campaign in Villianur, Puducherry. This update covers our grassroots efforts
            to support local families.
          </p>
          {/* Detailed blog content goes here */}
        </article>
        <div className="mt-12 p-8 bg-primary rounded-3xl text-primary-foreground">
          <h3 className="text-2xl font-bold mb-4">Support This Campaign</h3>
          <p className="mb-6">
            Your contribution helps us reach more families in need across Tamil Nadu and Puducherry.
          </p>
          <Button asChild variant="secondary" size="lg" className="rounded-full">
            <Link href="https://wa.me/yournumber?text=Hi Vilvam Foundation, I want to support this campaign.">
              <MessageCircle className="mr-2 w-5 h-5" /> Donate via WhatsApp
            </Link>
          </Button>
        </div>
      </div>
      <Footer />
    </main>
  )
}
