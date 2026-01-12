"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { ArrowRight, Calendar, User } from "lucide-react"
import Link from "next/link"

const posts = [
  {
    title: "Winter Relief Campaign 2025: Reaching 5,000 Families",
    excerpt: "How our community came together to provide warm blankets and food kits during the harshest months...",
    date: "Dec 15, 2025",
    author: "Admin",
    category: "Campaigns",
    image: "/indian-winter-relief-blanket-distribution.jpg",
    slug: "winter-relief-campaign-2025",
  },
  {
    title: "The Importance of Quality Education in Rural Areas",
    excerpt:
      "Discussing our latest scholarship program and the impact it's having on local student graduation rates...",
    date: "Dec 05, 2025",
    author: "Education Lead",
    category: "Education",
    image: "/indian-rural-education-students.jpg",
    slug: "quality-education-rural-areas",
  },
  {
    title: "Transparency Report: Q3 2025 Donation Impact",
    excerpt: "A detailed breakdown of every dollar spent and the lives touched between July and September this year...",
    date: "Nov 28, 2025",
    author: "Finance Team",
    category: "Reports",
    image: "/indian-charity-transparency-report.jpg",
    slug: "transparency-report-q3-2025",
  },
]

export function BlogSection() {
  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <div className="max-w-2xl">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Latest <span className="text-primary">Updates & News</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Stay informed about our latest campaigns, success stories, and transparency reports.
            </p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex bg-transparent">
            <Link href="/blog">
              View All Updates <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, i) => (
            <Card key={i} className="group border-border overflow-hidden flex flex-col">
              <div className="aspect-video overflow-hidden">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <CardContent className="p-6 flex-grow space-y-3">
                <div className="flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="w-3 h-3" /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <User className="w-3 h-3" /> {post.author}
                  </span>
                </div>
                <div className="inline-block px-2 py-0.5 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
                  {post.category}
                </div>
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-3 leading-relaxed">{post.excerpt}</p>
              </CardContent>
              <CardFooter className="p-6 pt-0">
                <Button
                  asChild
                  variant="ghost"
                  className="p-0 h-auto font-semibold text-primary hover:bg-transparent group/btn"
                >
                  <Link href={`/blog/${post.slug}`}>
                    Read More <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center md:hidden">
          <Button asChild variant="outline" className="w-full bg-transparent">
            <Link href="/blog">View All Updates</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
