import React from "react";
import { motion } from "framer-motion";

export function Certifications() {
  return (
    <section id="certifications" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          Certifications
        </h2>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white dark:bg-gray-900 rounded-lg shadow-lg p-6"
        >
          <div className="flex flex-col md:flex-row items-center justify-between">
            {/* Simple AWS Certification Logo */}
            <img
              src="https://d1.awsstatic.com/training-and-certification/Certification_badges/AWS-Certified_Solutions-Architect-Associate_512x512.7b571cb08c45d38a8c6e246c9f0499ad9d270965.png"
              alt="AWS Certification"
              className="w-24 h-auto mb-4 md:mb-0"
            />
            {/* Certification Details */}
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100">
                AWS Certified Solutions Architect – Associate
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                Issue Date: December 4, 2024
              </p>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Expiration Date: December 4, 2027
              </p>
              <p className="mt-2 text-gray-700 dark:text-gray-300">
                Validation Number:{" "}
                <span className="font-mono text-blue-600 dark:text-blue-400">
                  3603eef00e3d40a6a2d687285fe8a991
                </span>
              </p>
            </div>
            {/* Validation Link */}
            <a
              href="https://aws.amazon.com/verification"
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 mt-4 md:mt-0 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
            >
              Verify Certification
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
