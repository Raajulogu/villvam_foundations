"use client"

import { motion } from "framer-motion"
import { MessageCircle } from "lucide-react"
import Link from "next/link"

export function WhatsAppButton() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: "spring", stiffness: 260, damping: 20 }}
      className="fixed bottom-6 right-6 z-[60]"
    >
      <Link
        href="https://wa.me/yournumber?text=Hi, I would like to donate and support your social service."
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-3 bg-secondary hover:bg-accent text-white p-4 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.2)] transition-all group active:scale-95 border-2 border-white/20"
      >
        <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-500 font-bold px-0 group-hover:px-2">
          Chat with us
        </span>
        <MessageCircle className="w-8 h-8 fill-current" />
        <span className="absolute -top-1 -right-1 flex h-4 w-4">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500"></span>
        </span>
      </Link>
    </motion.div>
  )
}
