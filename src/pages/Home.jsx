// src/pages/Home.jsx
import { motion } from "framer-motion";

export default function Home() {
  return (
    <section className="px-8 py-16 text-center">
      <motion.h2
        className="text-4xl font-bold mb-6"
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        Reliable Trucking & Transport Solutions
      </motion.h2>

      <motion.p
        className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        We deliver goods across the nation with precision, speed, and safety.
      </motion.p>

      <motion.img
        src="https://images.unsplash.com/photo-1502877338535-766e1452684a"
        alt="Trucking"
        className="mx-auto rounded-2xl shadow-lg max-h-[400px] object-cover"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1 }}
      />
    </section>
  );
}
