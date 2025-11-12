"use client";

import { motion, useAnimation } from "framer-motion";
import { Check } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

const plans = [
  {
    name: "Free",
    price: "Rp0",
    desc: "Cocok untuk kamu yang baru mulai mengatur keuangan.",
    features: [
      "Catat pengeluaran & pemasukan",
      "Laporan bulanan dasar",
      "1 tujuan finansial aktif",
    ],
    cta: "Mulai Sekarang",
  },
  {
    name: "Pro",
    price: "Rp49.000",
    desc: "Ideal untuk pengguna aktif yang ingin insight lebih dalam.",
    features: [
      "Semua fitur Free",
      "Analisis grafik lanjutan",
      "Peringatan anggaran otomatis",
      "Sinkronisasi multi-perangkat",
    ],
    cta: "Upgrade ke Pro",
    highlight: true,
  },
  {
    name: "Premium",
    price: "Rp99.000",
    desc: "Untuk profesional dan bisnis kecil yang butuh kontrol penuh.",
    features: [
      "Semua fitur Pro",
      "Insight & rekomendasi AI",
      "Kustomisasi kategori & laporan",
      "Dukungan prioritas 24/7",
    ],
    cta: "Langganan Premium",
  },
];

export default function PricingSection() {
  const [selected, setSelected] = useState<string>("Pro");
  const controls = useAnimation();

  return (
    <section id="pricing" className="py-28 bg-white">
      <div className="max-w-6xl mx-auto px-6 text-center">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Pilih Paket yang Sesuai Kebutuhanmu
          </h2>
          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            Mulai gratis, dan tingkatkan kapan pun kamu siap. Semua paket dilengkapi
            keamanan tingkat tinggi dan data terenkripsi.
          </p>
        </motion.div>

        {/* Pricing Cards */}
        <motion.div
          className="grid md:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: { staggerChildren: 0.15 },
            },
          }}
        >
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ duration: 0.7 }}
            >
              <Card
                onClick={() => setSelected(plan.name)}
                className={`relative cursor-pointer rounded-2xl transition-all duration-300 border-2 ${
                  selected === plan.name
                    ? "border-blue-500 shadow-lg scale-[1.03]"
                    : "border-gray-200 hover:shadow-md hover:-translate-y-1"
                }`}
              >
                {plan.highlight && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full shadow-sm">
                    Paling Populer
                  </div>
                )}
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {plan.name}
                  </h3>
                  <p className="text-gray-600 mb-6">{plan.desc}</p>
                  <p className="text-4xl font-bold text-blue-600 mb-6">
                    {plan.price}
                    <span className="text-base text-gray-500 font-normal">
                      /bulan
                    </span>
                  </p>
                  <ul className="space-y-3 text-gray-700 mb-8 text-left">
                    {plan.features.map((feature, j) => (
                      <li key={j} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-blue-500 mt-1 shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button
                    className={`w-full py-6 rounded-xl font-semibold transition-all ${
                      selected === plan.name
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "bg-gray-100 text-gray-800 hover:bg-gray-200"
                    }`}
                  >
                    {plan.cta}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
