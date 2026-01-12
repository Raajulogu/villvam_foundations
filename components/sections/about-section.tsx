"use client"

import { cn } from "@/lib/utils"
import { motion } from "framer-motion"
import Image from "next/image"
import { CheckCircle2, ShieldCheck, Target, Users } from "lucide-react"

const cards = [
  {
    icon: ShieldCheck,
    title: "Our Mission",
    description:
      "To provide essential support to underprivileged families in Tamil Nadu and Puducherry through grassroots social service.",
    color: "bg-secondary/10 text-secondary",
  },
  {
    icon: Target,
    title: "Our Vision",
    description:
      "A community where every individual has access to food, education, and healthcare, regardless of their background.",
    color: "bg-primary/10 text-primary",
  },
  {
    icon: Users,
    title: "Our Credibility",
    description:
      "Years of transparent, community-led service in Villianur and surrounding areas with measurable impact.",
    color: "bg-accent/10 text-accent",
  },
]

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center text-foreground">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/south-indian-volunteer-helping-children.jpg"
                alt="South Indian volunteer helping rural children in Tamil Nadu"
                width={600}
                height={600}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 rounded-full blur-3xl z-0" />
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-secondary/20 rounded-full blur-3xl z-0" />

            <div className="absolute bottom-6 -right-6 md:right-6 bg-white dark:bg-card p-6 rounded-xl shadow-xl z-20 max-w-xs border border-border">
              <p className="text-primary font-bold text-lg mb-1">Serving Since 2014</p>
              <p className="text-sm text-muted-foreground">
                Rooted in Villianur, committed to Tamil Nadu and Puducherry communities.
              </p>
            </div>
          </motion.div>

          <div className="flex flex-col gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-primary font-semibold uppercase tracking-wider mb-3">About Vilvam Foundation</h2>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
                Compassion in <span className="italic">Action</span>
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Vilvam Foundation was born from a simple commitment: to serve our local communities with dignity and
                transparency. From Villianur to surrounding areas, we bridge the gap between resources and those who
                need them most.
              </p>

              <ul className="space-y-4 mb-8">
                {[
                  "Volunteer-led local initiatives",
                  "Direct support to beneficiaries",
                  "Transparent community reporting",
                  "Grassroots, people-first approach",
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary shrink-0" />
                    <span className="font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-6">
              {cards.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-card p-6 rounded-2xl border border-border shadow-sm hover:shadow-md transition-all group"
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110",
                      card.color,
                    )}
                  >
                    <card.icon className="w-6 h-6" />
                  </div>
                  <h4 className="font-bold mb-2">{card.title}</h4>
                  <p className="text-xs text-muted-foreground leading-relaxed">{card.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
