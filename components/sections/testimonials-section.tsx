"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
  {
    quote:
      "Hope Foundation's transparency is what sets them apart. I know exactly where my donation goes, and seeing the impact on these families is deeply rewarding.",
    author: "Robert Wilson",
    role: "Regular Monthly Donor",
    avatar: "RW",
  },
  {
    quote:
      "Volunteering with this team has been a life-changing experience. The dedication they show to every single person seeking help is truly inspiring.",
    author: "Sarah Jenkins",
    role: "Lead Volunteer",
    avatar: "SJ",
  },
  {
    quote:
      "When my family was going through our toughest time, they didn't just provide food—they provided hope and a path toward stability.",
    author: "Maria Gonzalez",
    role: "Program Beneficiary",
    avatar: "MG",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20 bg-secondary/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Voices of Hope
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our <span className="text-primary">Supporters Say</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            The stories of change from our donors, volunteers, and the people we serve.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <Card key={i} className="border-border bg-card hover:shadow-lg transition-all duration-300">
              <CardContent className="p-8 flex flex-col h-full">
                <Quote className="w-10 h-10 text-primary/20 mb-6 shrink-0" />
                <p className="text-muted-foreground italic mb-8 flex-grow leading-relaxed">"{t.quote}"</p>
                <div className="flex items-center gap-4 border-t border-border pt-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                    {t.avatar}
                  </div>
                  <div>
                    <div className="font-bold text-foreground">{t.author}</div>
                    <div className="text-xs text-muted-foreground uppercase tracking-widest">{t.role}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
