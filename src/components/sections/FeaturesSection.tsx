"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  PiggyBank,
  PieChart,
  Bell,
  Target,
  TrendingUp,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: PiggyBank,
    title: "Manajemen Uang Efisien",
    desc: "Catat pengeluaran dan pemasukan dengan mudah, terorganisir secara otomatis.",
  },
  {
    icon: PieChart,
    title: "Analisis Visual Cerdas",
    desc: "Lihat laporan keuanganmu dalam bentuk grafik interaktif yang menarik.",
  },
  {
    icon: Bell,
    title: "Peringatan Anggaran",
    desc: "Dapatkan notifikasi ketika pengeluaranmu hampir melebihi batas anggaran.",
  },
  {
    icon: Target,
    title: "Tujuan Finansial",
    desc: "Buat dan pantau progress tujuan finansialmu dengan fitur goal tracker.",
  },
  {
    icon: TrendingUp,
    title: "Insight Otomatis",
    desc: "Sistem memberikan rekomendasi berdasarkan kebiasaan finansialmu.",
  },
  {
    icon: Shield,
    title: "Data Aman & Terenkripsi",
    desc: "Keamanan data finansialmu dijamin dengan enkripsi standar industri.",
  },
];

export default function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Fitur Unggulan MonZii
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Didesain untuk membantu kamu mengontrol keuangan dengan efisien —
            visual, cepat, dan cerdas.
          </p>
        </motion.div>

        {/* Feature Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.15,
              },
            },
          }}
        >
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: 40 },
                  visible: { opacity: 1, y: 0 },
                }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <Card className="border-gray-200 hover:shadow-lg transition-all duration-300 rounded-2xl hover:-translate-y-1">
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    <div className="w-14 h-14 rounded-full bg-blue-100 flex items-center justify-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">
                      {f.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {f.desc}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
