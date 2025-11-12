"use client";

import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function FAQSection() {
  const faqs = [
    {
      q: "Apakah MonZii bisa digunakan gratis?",
      a: "Ya, MonZii memiliki versi gratis dengan fitur dasar. Untuk fitur premium seperti analisis keuangan lanjutan dan integrasi multi-akun, kamu bisa upgrade kapan saja.",
    },
    {
      q: "Apakah data saya aman?",
      a: "Kami menggunakan enkripsi dan penyimpanan berbasis Supabase dengan autentikasi aman. Data finansial kamu sepenuhnya privat dan tidak dibagikan kepada pihak lain.",
    },
    {
      q: "Bisakah MonZii digunakan untuk bisnis kecil?",
      a: "Tentu! MonZii dirancang fleksibel — cocok untuk kebutuhan pribadi, UMKM, hingga freelancer yang ingin memantau cash flow.",
    },
    {
      q: "Apakah saya bisa mengakses dari HP?",
      a: "Ya. MonZii berbasis web dan sepenuhnya responsif. Kamu bisa mengaksesnya dari laptop, tablet, maupun ponsel dengan tampilan yang optimal.",
    },
  ];

  return (
    <section id="faq" className="py-28 bg-white relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto px-6 text-center"
      >
        <h2 className="text-4xl font-bold text-gray-900 mb-6">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p className="text-gray-600 mb-12">
          Masih ragu? Berikut beberapa hal yang sering ditanyakan pengguna baru MonZii.
        </p>

        <Accordion type="single" collapsible className="text-left">
          {faqs.map((faq, i) => (
            <AccordionItem
              key={i}
              value={`faq-${i}`}
              className="border border-gray-200 rounded-xl mb-3"
            >
              <AccordionTrigger className="text-lg font-medium px-4 py-3 hover:text-blue-600">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="px-4 pb-4 text-gray-600 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </section>
  );
}
