// src/pages/Home.jsx
import HeroSlider from "../components/HeroSlider";
import Services from "../components/Services";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* Services Section */}
      <Services />

      {/* Advantages */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Why Choose TranspoX
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "On-Time Delivery",
                desc: "We prioritize punctuality so your goods arrive when you expect them.",
              },
              {
                title: "Nationwide Coverage",
                desc: "From metro cities to rural towns, our fleet reaches everywhere.",
              },
              {
                title: "Trusted Partner",
                desc: "Our clients rely on us for secure, transparent logistics solutions.",
              },
            ].map((item, idx) => (
              <motion.div
                key={idx}
                className="p-6 border rounded-2xl shadow-sm hover:shadow-md transition"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2 text-blue-600">
                  {item.title}
                </h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-8 text-center">
          <motion.h2
            className="text-3xl font-bold mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Our Numbers Speak
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { value: "20+", label: "Years in Service" },
              { value: "500+", label: "Trucks in Fleet" },
              { value: "1000+", label: "Satisfied Clients" },
            ].map((stat, idx) => (
              <motion.div
                key={idx}
                className="p-6 bg-white rounded-2xl shadow-md"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.2 }}
                viewport={{ once: true }}
              >
                <h3 className="text-4xl font-bold text-blue-600 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Request Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-8">
          <motion.h2
            className="text-3xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Request a Free Quote
          </motion.h2>
          <form className="bg-gray-50 p-8 rounded-2xl shadow-lg space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Pickup Location"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="text"
                placeholder="Delivery Location"
                className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <textarea
              rows="4"
              placeholder="Cargo details..."
              className="w-full border rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500"
            ></textarea>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
            >
              Get Quote
            </button>
          </form>
        </div>
      </section>
    </div>
  );
}
