"use client";

import { motion } from "framer-motion";
import { Sparkles, BarChart3, ShieldCheck } from "lucide-react";

export default function HighlightSection() {
  return (
    <section className="py-28 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="space-y-6"
        >
          <h2 className="text-4xl font-bold text-gray-900 leading-tight">
            Lebih dari sekadar pelacak keuangan.
          </h2>
          <p className="text-gray-600 text-lg leading-relaxed">
            MonZii dirancang bukan hanya untuk mencatat transaksi, tapi membantu
            kamu memahami pola keuangan dan mengambil keputusan cerdas setiap bulan.
          </p>

          <div className="space-y-4 mt-8">
            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg">
                <Sparkles className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Smart Expense Analysis
                </h3>
                <p className="text-gray-600 text-sm">
                  MonZii belajar dari kebiasaanmu dan memberi insight otomatis.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg">
                <BarChart3 className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Visualisasi Interaktif
                </h3>
                <p className="text-gray-600 text-sm">
                  Lihat grafik real-time untuk memahami aliran uangmu dengan jelas.
                </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 flex items-center justify-center rounded-lg">
                <ShieldCheck className="text-blue-600 w-6 h-6" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-800">
                  Keamanan Data Tingkat Tinggi
                </h3>
                <p className="text-gray-600 text-sm">
                  Semua data keuanganmu disimpan dan dienkripsi dengan standar
                  industri terbaik.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Illustration */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="flex justify-center"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
            className="relative bg-white shadow-xl rounded-3xl border border-gray-100 p-10 max-w-sm w-full"
          >
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 rounded-full blur-lg opacity-70" />
            <div className="absolute -bottom-8 -right-8 w-20 h-20 bg-blue-200 rounded-full blur-lg opacity-60" />

            <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">
              Insight Mingguan
            </h3>
            <p className="text-gray-600 text-center text-sm mb-6">
              Prediksi dan laporan otomatis setiap minggu untuk mengontrol
              pengeluaran.
            </p>
            <div className="w-full h-40 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
