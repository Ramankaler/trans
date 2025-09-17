// src/components/Services.jsx
import { motion } from "framer-motion";
import { FaTruck, FaShip, FaPlane } from "react-icons/fa";

// Import images
import truckImage1 from "../assets/images/goodloading-truck-loading.png";
import truckImage2 from "../assets/images/Bild-4-1-768x512.webp";
import truckImage3 from "../assets/images/images.png";

const services = [
  {
    icon: <FaTruck size={40} />,
    title: "Road Transport",
    desc: "Reliable nationwide trucking services for all cargo sizes.",
    image: truckImage1,
    alt: "Road transport truck"
  },
  {
    icon: <FaShip size={40} />,
    title: "Ocean Freight",
    desc: "Cost-effective sea shipping for bulk goods and containers.",
    image: truckImage2,
    alt: "Ocean freight shipping"
  },
  {
    icon: <FaPlane size={40} />,
    title: "Air Cargo",
    desc: "Fast and secure air freight solutions for urgent deliveries.",
    image: truckImage3,
    alt: "Air cargo transport"
  },
];

export default function Services() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-8">
        <motion.h2
          className="text-3xl font-bold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          Our Services
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((s, idx) => (
            <motion.div
              key={idx}
              className="bg-white p-8 rounded-2xl shadow-lg text-center hover:shadow-2xl transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.3 }}
              viewport={{ once: true }}
            >
              <div className="flex justify-center mb-4 text-blue-600">
                {s.icon}
              </div>
              <div className="mb-4">
                <img 
                  src={s.image} 
                  alt={s.alt}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
              <h3 className="text-xl font-semibold mb-2">{s.title}</h3>
              <p className="text-gray-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
