
import { motion } from "framer-motion";

const companyInfo = {
  profile:
    "TranspoX has been providing reliable trucking solutions for over 20 years. We specialize in long-haul freight, logistics optimization, and on-time deliveries across India.",
  stats: [
    { label: "Years in Service", value: "20+" },
    { label: "Trucks in Fleet", value: "500+" },
    { label: "Happy Clients", value: "1000+" },
  ],
  management: [
    {
      name: "Pramod",
      role: "CEO",
      img: "/Volumes/DATA/react trucking/trucking-website/src/assets/images/images.png",
    },
    {
      name: "Raman Kaler",
      role: "Operations Head",
      img: "/Volumes/DATA/react trucking/trucking-website/src/assets/images/images.png",
    },
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

      {/* Stats */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mb-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        {companyInfo.stats.map((stat, idx) => (
          <div key={idx} className="p-6 border rounded-2xl shadow-sm">
            <h3 className="text-3xl font-bold text-blue-600">{stat.value}</h3>
            <p className="text-gray-600">{stat.label}</p>
          </div>
        ))}
      </motion.div>

      {/* Management */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
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
                className="w-24 h-24 mx-auto rounded-full mb-4 object-cover"
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
        transition={{ delay: 0.7 }}
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
