import React from "react";
import { motion } from "framer-motion";

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8 text-center text-gray-900 dark:text-gray-100"
        >
          About Me
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg"
        >
          <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
            Highly motivated and detail-oriented software professional with over
            <span className="font-bold"> 3 years </span> of experience
            delivering innovative solutions. My expertise lies in modern
            technologies like{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Java
            </span>
            ,{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Spring Boot
            </span>
            ,{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Microservices
            </span>
            ,{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              C#
            </span>
            ,{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              .NET
            </span>
            ,{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              React
            </span>
            , and{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Cloud platforms
            </span>
            .
          </p>
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed mt-6"
          >
            I am passionate about leveraging my technical expertise and a drive
            for innovation to build scalable solutions that enhance business
            growth and success. Currently pursuing a Master’s degree in{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              Information Technology
            </span>{" "}
            at the{" "}
            <span className="font-bold text-blue-600 dark:text-blue-400">
              University of North Carolina at Charlotte
            </span>
            , I aim to expand my knowledge and contribute to impactful projects
            in the tech industry.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="mt-8 flex justify-center"
          >
            <a
              href="#contact"
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-transform"
            >
              Contact Me
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
