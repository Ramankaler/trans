// src/pages/About.jsx
import { motion } from "framer-motion";

const companyInfo = {
  profile: "TranspoX has been providing reliable trucking solutions for over 20 years.",
  management: [
    { name: "Pramod", role: "CEO", img: "https://randomuser.me/api/portraits/men/45.jpg" },
    { name: "Raman kaler", role: "Operations Head", img: "https://randomuser.me/api/portraits/women/65.jpg" },
  ],
  trucks: [
    { id: 1, model: "Volvo FH16", capacity: "44 Tons" },
    { id: 2, model: "Scania R500", capacity: "42 Tons" },
  ],
};

export default function About() {
  return (
    <section className="px-8 py-16 max-w-6xl mx-auto">
      {/* Company Profile */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-3xl font-bold mb-4">Company Profile</h2>
        <p className="text-gray-600 mb-8">{companyInfo.profile}</p>
      </motion.div>

      {/* Management */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Our Management</h3>
        <div className="grid md:grid-cols-2 gap-8">
          {companyInfo.management.map((person, idx) => (
            <motion.div
              key={idx}
              className="p-6 border rounded-2xl shadow-sm text-center"
              whileHover={{ scale: 1.05 }}
            >
              <img
                src={person.img}
                alt={person.name}
                className="w-24 h-24 mx-auto rounded-full mb-4"
              />
              <h4 className="font-bold text-lg">{person.name}</h4>
              <p className="text-gray-500">{person.role}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Trucks */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <h3 className="text-2xl font-semibold mb-6">Our Trucks</h3>
        <ul className="space-y-4">
          {companyInfo.trucks.map((truck) => (
            <li
              key={truck.id}
              className="p-4 border rounded-lg shadow-sm hover:shadow-md transition"
            >
              <strong>{truck.model}</strong> — Capacity: {truck.capacity}
            </li>
          ))}
        </ul>
      </motion.div>
    </section>
  );
}
