"use client";

import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function NewsletterSection() {
  return (
    <section
      id="newsletter"
      className="relative py-28 bg-gradient-to-b from-blue-50 via-white to-white overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center px-6"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Dapatkan Tips Keuangan Langsung ke Emailmu
        </h2>
        <p className="text-gray-600 mb-10 max-w-lg mx-auto">
          Bergabunglah dengan ribuan pengguna MonZii lainnya dan dapatkan panduan
          finansial mingguan serta info fitur terbaru langsung di inbox kamu.
        </p>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col sm:flex-row justify-center gap-4 max-w-xl mx-auto"
        >
          <Input
            type="email"
            placeholder="Masukkan email kamu"
            className="h-12 px-4 rounded-xl border-2 focus:border-blue-500"
            required
          />
          <Button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white h-12 px-8 rounded-xl text-lg"
          >
            Berlangganan
          </Button>
        </form>

        <p className="text-sm text-gray-500 mt-6">
          Kami tidak akan pernah mengirim spam. Kamu bisa berhenti kapan saja.
        </p>
      </motion.div>
    </section>
  );
}
