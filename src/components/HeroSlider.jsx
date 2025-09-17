// src/components/HeroSlider.jsx
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const slides = [
  {
    title: "Nationwide Trucking",
    subtitle: "Reliable & fast logistics across India",
    imageUrl: "/assets/images/truck1.jpg",
  },
  {
    title: "Safe Cargo Transport",
    subtitle: "We handle goods with utmost care",
    imageUrl: "/assets/images/truck2.jpg",
  },
  {
    title: "On-Time Delivery",
    subtitle: "Your schedule is our priority",
    imageUrl: "/assets/images/truck3.jpg",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearTimeout(timer);
  }, [current]);

  return (
    <div className="relative h-[70vh] overflow-hidden">
      <AnimatePresence>
        {slides.map((slide, index) =>
          index === current ? (
            <motion.div
              key={index}
              className="absolute inset-0"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 1 }}
              style={{
                backgroundImage: `url(${slide.imageUrl})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div className="absolute inset-0 bg-black bg-opacity-40"></div>
              <div className="relative z-10 text-white p-8 md:p-16 max-w-2xl">
                <h1 className="text-4xl md:text-6xl font-bold mb-4">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-2xl">{slide.subtitle}</p>
              </div>
            </motion.div>
          ) : null
        )}
      </AnimatePresence>
    </div>
  );
}
