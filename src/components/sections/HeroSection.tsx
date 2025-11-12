"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, PiggyBank } from "lucide-react";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-blue-50 via-white to-white"
    >
      <div className="max-w-6xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between px-6 py-28 md:py-40">
        {/* Left Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 text-center md:text-left"
        >
          <motion.span
            className="text-sm font-medium text-blue-600 bg-blue-100 px-3 py-1 rounded-full inline-block mb-4"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            ✨ Aplikasi Finansial Pintar
          </motion.span>

          <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
            Kelola Keuanganmu, <br />
            <span className="text-blue-600">Lebih Cerdas & Mudah</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            MonZii membantu kamu mencatat, menganalisis, dan merencanakan keuangan pribadi
            atau bisnis kecil dengan efisien. Semua dalam satu dashboard intuitif dan mudah digunakan.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button className="bg-blue-600 text-white px-8 py-6 text-lg rounded-xl hover:bg-blue-700">
                Mulai Sekarang
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                variant="outline"
                className="border-2 px-8 py-6 text-lg rounded-xl hover:bg-blue-50"
              >
                Lihat Demo
              </Button>
            </motion.div>
          </div>
        </motion.div>

        {/* Right Icon Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
          whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 0.8,
            type: "spring",
            stiffness: 120,
          }}
          viewport={{ once: true }}
          className="w-full md:w-1/2 flex justify-center mb-12 md:mb-0"
        >
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 3,
              ease: "easeInOut",
            }}
            className="bg-gradient-to-tr from-blue-100 to-blue-200 p-12 rounded-full shadow-2xl"
          >
            <PiggyBank className="w-40 h-40 text-blue-600 drop-shadow-md" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
