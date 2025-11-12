"use client";

import { motion } from "framer-motion";
import { Github, Twitter, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center md:text-left"
        >
          <h3 className="text-2xl font-bold text-blue-700">MonZii</h3>
          <p className="text-gray-500 text-sm mt-1">
            © {new Date().getFullYear()} MonZii. All rights reserved.
          </p>
        </motion.div>

        {/* Navigation */}
        <motion.ul
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          className="flex items-center gap-6 text-gray-600 text-sm"
        >
          <li>
            <a href="#features" className="hover:text-blue-600 transition-colors">
              Fitur
            </a>
          </li>
          <li>
            <a href="#pricing" className="hover:text-blue-600 transition-colors">
              Harga
            </a>
          </li>
          <li>
            <a href="#about" className="hover:text-blue-600 transition-colors">
              Tentang
            </a>
          </li>
        </motion.ul>

        {/* Socials */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex items-center gap-4"
        >
          <a
            href="https://github.com"
            target="_blank"
            className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 transition-all"
          >
            <Github className="w-5 h-5 text-gray-700 hover:text-blue-600" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 transition-all"
          >
            <Twitter className="w-5 h-5 text-gray-700 hover:text-blue-600" />
          </a>
          <a
            href="mailto:support@monzii.app"
            className="p-2 rounded-lg bg-gray-100 hover:bg-blue-50 transition-all"
          >
            <Mail className="w-5 h-5 text-gray-700 hover:text-blue-600" />
          </a>
        </motion.div>
      </div>
    </footer>
  );
}
