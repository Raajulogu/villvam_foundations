"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1, y: [0, -4, 0] }}
      transition={{
        delay: 1,
        type: "spring",
        stiffness: 200,
        damping: 15,
        y: { repeat: Infinity, duration: 3 }
      }}
      className="fixed bottom-6 right-6 z-[60]"
    >
      <Link
        href="https://wa.me/918838921064?text=Hi, I would like to support your social service."
        target="_blank"
        rel="noopener noreferrer"
        className="group relative flex items-center"
      >
        {/* Soft Pulse Glow */}
        <span className="absolute h-14 w-14 rounded-full bg-[#25D366]/30 animate-ping"></span>

        {/* Main Button */}
        <div className="relative flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white pl-3 pr-4 py-3 rounded-full shadow-lg transition-all duration-300 group-hover:pr-6">

          <MessageCircle className="w-5 h-5 fill-white" />

          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-[150px] transition-all duration-400 font-medium">
            Chat on WhatsApp
          </span>

        </div>
      </Link>
    </motion.div>
  )
}