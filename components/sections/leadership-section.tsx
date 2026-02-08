"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import dhassarathane from "../images/Dhassarathane.jpeg";
import dhanalakshmi from "../images/Dhanalakshmi.jpeg";
import Image from "next/image";

const leaders = [
  {
    name: "Dassarathane. K",
    roles: [
      "Vilvam Foundation - Founder & President",
      "President - Exnora International Foundation, Villianur (UT Puducherry) Branch",
    ],
    image: dhassarathane,
  },
  {
    name: "Dhanalakshmi",
    roles: [
      "Vilvam Foundation - Treasurer",
      "General Secretary - Exnora International Foundation, Villianur (UT Puducherry) Branch",
    ],
    image: dhanalakshmi,
  },
]

export function LeadershipSection() {
  return (
    <section id="leadership" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-primary font-semibold uppercase tracking-wider mb-3">Our Leadership</h2>
          <h3 className="text-4xl md:text-5xl font-bold mb-6 text-balance">
            Meet the <span className="text-primary italic">Office Bearers</span>
          </h3>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Dedicated leaders committed to serving our communities in Tamil Nadu and Puducherry with integrity and
            transparency.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {leaders.map((leader, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
            >
              <Card className="h-full border-border shadow-lg hover:shadow-xl transition-all group">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center gap-6">
                    <div className="w-32 h-32 rounded-full bg-primary/10 flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Image
                        src={leader.image}
                        alt={leader.name}
                        width={128}
                        height={128}
                        className="rounded-full"
                      />
                    </div>
                    <div className="space-y-3">
                      <h4 className="text-2xl font-bold text-foreground">{leader.name}</h4>
                      <div className="space-y-2">
                        {leader.roles.map((role, j) => (
                          <p key={j} className="text-sm text-muted-foreground leading-relaxed">
                            {role}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
