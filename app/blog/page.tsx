import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const allPosts = [
  {
    title: "Winter Relief Campaign 2025: Reaching 5,000 Families",
    excerpt: "How our community came together to provide warm blankets and food kits in Villianur...",
    date: "Dec 15, 2025",
    author: "Admin",
    category: "Campaigns",
    slug: "winter-relief-campaign-2025",
  },
  // ... more posts
]

export default function BlogListingPage() {
  return (
    <main className="min-h-screen pt-24 bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8">
          Latest <span className="text-primary">Updates & News</span>
        </h1>
        <div className="grid md:grid-cols-3 gap-8">
          {allPosts.map((post) => (
            <Card key={post.slug} className="flex flex-col">
              <CardContent className="p-6 flex-grow">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="w-3 h-3" /> {post.date}
                  <User className="w-3 h-3 ml-2" /> {post.author}
                </div>
                <h2 className="text-xl font-bold mb-3">{post.title}</h2>
                <p className="text-muted-foreground text-sm mb-4">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button asChild variant="ghost" className="p-0 text-primary">
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}
