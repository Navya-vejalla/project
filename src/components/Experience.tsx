import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "University of North Carolina at Charlotte",
    location: "Charlotte, NC",
    duration: "August 2024 — Present",
    description: [
      "Assisting undergraduate students in mastering web development concepts, including **HTML**, **CSS**, **JavaScript**, and **DOM manipulation**.",
      "Providing support in advanced topics, such as **asynchronous JavaScript** and the **Fetch API**, to help students with real-world application design challenges.",
    ],
  },
  {
    role: "Software Development Administrator",
    company: "Pearson India Private Limited",
    location: "Chennai, India",
    duration: "January 2023 — December 2023",
    description: [
      "Contributed to the development of Learning Management Systems, including **Connections Education** and **Agile-based Buzz Platforms** in the **PVS Engineering** team.",
      "Enhanced interaction between teachers and students by implementing **Live classrooms**, **Assessments**, and **Course content creation**.",
      "Created user-friendly interfaces for students and teachers using **C#**, **.NET**, **SQL**, and **Azure**.",
    ],
  },
  {
    role: "Full Stack Developer",
    company: "Wipro Technologies",
    location: "Bangalore, India",
    duration: "September 2021 — January 2023",
    description: [
      "Designed and developed data-driven web applications using **Java**, **Spring Boot**, **Microservices**, **HTML5**, **CSS**, **JavaScript**, and **ReactJS**.",
      "Built reusable components that increased performance by 30%.",
      "Improved existing web applications by implementing a full-stack development approach, reducing average query time by up to 70%.",
      "Restructured code and optimized queries to increase web application speed and stability.",
    ],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-gray-900 dark:text-gray-100 text-center">
          Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transform hover:scale-105 transition-transform"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2">
                {exp.role}
              </h3>
              <h4 className="text-lg text-gray-600 dark:text-gray-400 mb-2">
                <span className="text-blue-600 dark:text-blue-400 font-bold">
                  {exp.company}
                </span>
                {exp.location && (
                  <span className="block text-sm text-gray-500 dark:text-gray-400">
                    {exp.location}
                  </span>
                )}
              </h4>
              <p className="text-sm font-medium text-gray-500 dark:text-gray-300 mb-4">
                <span className="px-2 py-1 bg-gray-200 dark:bg-gray-700 rounded-lg">
                  {exp.duration}
                </span>
              </p>
              <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
                {exp.description.map((item, i) => (
                  <li key={i} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
