"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Users, Utensils, GraduationCap, TrendingUp } from "lucide-react"

const stats = [
  {
    icon: Utensils,
    value: "500,000+",
    label: "Meals Provided",
    description: "Fresh and nutritious meals delivered to those in need across 20+ cities.",
  },
  {
    icon: Users,
    value: "10,000+",
    label: "Families Supported",
    description: "Providing sustainable assistance and essential supplies to underprivileged households.",
  },
  {
    icon: GraduationCap,
    value: "2,500+",
    label: "Students Empowered",
    description: "Supplying school kits, scholarships, and educational resources to young learners.",
  },
  {
    icon: TrendingUp,
    value: "15 Years",
    label: "Dedicated Service",
    description: "Over a decade of committed effort in community building and social welfare.",
  },
]

export function ImpactSection() {
  return (
    <section id="impact" className="py-20 bg-background overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-medium">
              Impact & Proof
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-foreground leading-tight text-balance">
              Our Impact in <span className="text-primary">Numbers</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Every donation translates into a tangible difference. We maintain 100% transparency in our operations to
              ensure your contributions reach those who need it most.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Transparent Tracking:</span> Real-time monitoring of
                  all donation distributions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-1">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                </div>
                <p className="text-muted-foreground">
                  <span className="font-semibold text-foreground">Direct Reach:</span> Eliminating middlemen to maximize
                  impact on the ground.
                </p>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid sm:grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon
              return (
                <Card key={index} className="border-border shadow-sm hover:shadow-md transition-shadow">
                  <CardContent className="p-6 space-y-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-foreground">{stat.value}</div>
                      <div className="text-sm font-semibold text-primary uppercase tracking-wider">{stat.label}</div>
                    </div>
                    <p className="text-xs text-muted-foreground leading-relaxed">{stat.description}</p>
                  </CardContent>
                </Card>
              )
            })}
          </div>
        </div>

        {/* Gallery Preview / Action Section */}
        {/* <div className="mt-20">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-2">Our Work in Action</h3>
            <p className="text-muted-foreground">Captured moments of change and hope in the communities we serve.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square rounded-xl overflow-hidden bg-muted group">
                <img
                  src={`/indian-charity-work-${i}.jpg`}
                  alt={`South Indian charity work in Tamil Nadu ${i}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  )
}
