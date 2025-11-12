"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function CtaSection() {
  return (
    <section className="py-28 bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold mb-6 leading-tight">
            Saatnya Kendalikan Keuanganmu dengan MonZii
          </h2>
          <p className="text-blue-100 mb-10 text-lg max-w-2xl mx-auto">
            Dapatkan insight, laporan otomatis, dan kendali penuh atas setiap rupiah yang kamu miliki — gratis untuk memulai.
          </p>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
          >
            <Button
              size="lg"
              className="bg-white text-blue-700 font-semibold px-8 py-6 rounded-xl hover:bg-blue-50 transition-all"
            >
              Mulai Sekarang
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
