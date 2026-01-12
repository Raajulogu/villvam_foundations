"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-subtle-gradient">
      {/* Background with pattern overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/south-indian-volunteers-distributing-food.jpg"
          alt="South Indian community food distribution and social service in Tamil Nadu"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-transparent" />
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{ backgroundImage: 'url("/images/pattern.png")', backgroundSize: "100px" }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 border border-secondary/20 text-secondary text-sm font-bold mb-6"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Verified Local Social Service • TN & Puducherry
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-5xl md:text-7xl font-bold tracking-tight text-balance leading-[1.1] mb-6 text-foreground"
          >
            Together We Build <span className="text-secondary italic">Stronger Communities</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl md:text-2xl text-muted-foreground mb-10 text-balance leading-relaxed"
          >
            Rooted in compassion, we provide essential food, education, and medical support to underprivileged families
            in Villianur and surrounding areas.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center gap-5"
          >
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-8 text-xl shadow-2xl hover:shadow-primary/30 transition-all group w-full sm:w-auto bg-primary-gradient font-bold border-0"
            >
              <Link href="https://wa.me/yournumber?text=Hi, I would like to donate and support your social service.">
                <MessageCircle className="w-6 h-6 mr-3 group-hover:scale-110 transition-transform" />
                Support Our Cause
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full px-10 py-8 text-xl bg-white/50 backdrop-blur-sm border-2 border-primary/20 hover:border-primary/50 text-foreground transition-all group w-full sm:w-auto font-bold"
            >
              <Link href="#impact">
                Our Impact
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-12 flex items-center gap-4 text-sm font-medium"
          >
            <div className="flex -space-x-2">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="w-10 h-10 rounded-full border-2 border-background overflow-hidden relative">
                  <Image
                    src={`/indian-volunteer-${i}.jpg`}
                    alt={`South Indian community volunteer ${i}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
            <p className="text-muted-foreground">
              <span className="text-foreground font-bold">100% Transparent.</span> Community-driven support.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
