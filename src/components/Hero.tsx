import React from "react";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="absolute inset-0 flex flex-col items-center justify-center text-center py-16 bg-gray-50 dark:bg-gray-900 hero-background"
    >
      {/* Profile Photo */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, ease: "easeInOut" }}
        className="w-56 h-56 rounded-full overflow-hidden border-4 border-blue-600 shadow-lg mb-6"
      >
        <img
          src="./src/public/Me.jpg" // Ensure the correct path for your image
          alt="Navya Vejalla"
          className="w-full h-full object-cover scale-110 object-top"
        />
      </motion.div>

      {/* Name and Headline */}
      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100"
      >
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">Navya Vejalla</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-2xl"
      >
        Full Stack Developer specializing in building scalable web applications
        using modern technologies like React, Node.js, and Cloud platforms.
      </motion.p>

      {/* Buttons Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="flex space-x-4"
      >
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
        >
          Get in Touch
        </a>
        <a
          href="./src/public/Navya Vejalla.pdf"
          download
          className="px-6 py-3 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition-transform hover:scale-105"
        >
          Download Resume
        </a>
      </motion.div>
    </motion.div>
  );
}
