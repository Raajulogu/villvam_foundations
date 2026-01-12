"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Utensils, GraduationCap, Stethoscope, HandHeart, MessageCircle } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const services = [
  {
    title: "Food Distribution",
    description: "Daily cooked meals and monthly ration kits for low-income families and homeless individuals.",
    icon: Utensils,
    image: "/indian-food-distribution-charity.jpg",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Education Support",
    description: "Providing books, uniforms, and tuition fees for children whose families cannot afford schooling.",
    icon: GraduationCap,
    image: "/indian-rural-children-school-education.jpg",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Medical Help",
    description: "Funding emergency surgeries, basic medicines, and organizing free health checkup camps.",
    icon: Stethoscope,
    image: "/indian-medical-camp-rural-area.jpg",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    title: "Financial Aid",
    description: "Direct financial assistance for families facing extreme hardship or natural disasters.",
    icon: HandHeart,
    image: "/indian-charity-financial-support.jpg",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-subtle-gradient">
      <div className="container mx-auto px-4 text-foreground">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-secondary font-bold uppercase tracking-widest mb-3 text-sm"
          >
            How We Serve
          </motion.h2>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Local Social Service <span className="text-primary italic">Initiatives</span>
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            We focus on community-driven support to address the most pressing needs in Villianur, Puducherry, and across
            Tamil Nadu.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group bg-card rounded-[2rem] overflow-hidden shadow-md hover:shadow-xl transition-all border border-primary/5 flex flex-col h-full"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={`${service.title} - South Indian charity service`}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 z-10">
                  <div className={`${service.bgColor} ${service.color} p-3 rounded-2xl shadow-lg`}>
                    <service.icon className="w-6 h-6" />
                  </div>
                </div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <h4 className="text-2xl font-bold mb-4 text-foreground/90">{service.title}</h4>
                <p className="text-muted-foreground mb-8 leading-relaxed line-clamp-3">{service.description}</p>

                <div className="mt-auto">
                  <Button
                    asChild
                    variant="outline"
                    className="w-full rounded-full py-6 font-bold group/btn hover:bg-secondary hover:text-white transition-all bg-transparent border-secondary/30 text-secondary"
                  >
                    <Link
                      href={`https://wa.me/yournumber?text=Hi, I would like to support your ${service.title} activities.`}
                    >
                      Support Now
                      <MessageCircle className="w-4 h-4 ml-2 group-hover/btn:scale-125 transition-transform" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mt-20 bg-secondary rounded-[3rem] p-12 text-white text-center relative overflow-hidden shadow-2xl"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/20 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

          <div className="relative z-10 max-w-3xl mx-auto">
            <h3 className="text-3xl md:text-5xl font-bold mb-6">Need Immediate Assistance?</h3>
            <p className="text-xl opacity-90 mb-10 leading-relaxed font-medium">
              If you or someone you know in Villianur or Puducherry requires urgent food or medical support, reach out
              to us via WhatsApp.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-12 py-8 text-xl shadow-2xl hover:scale-105 transition-transform bg-white text-secondary font-bold hover:bg-slate-50 border-0"
            >
              <Link href="https://wa.me/yournumber?text=Hi Vilvam Foundation, I am in need of urgent assistance in Puducherry/Tamil Nadu.">
                Contact via WhatsApp
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
