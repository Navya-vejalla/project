import React from "react";
import { motion } from "framer-motion";
import { Code, Globe, Database, Settings, Cloud } from "lucide-react";

const skills = [
  {
    category: "Programming Languages",
    icon: Code,
    items: ["C", "C++", "C#", "Java", "Python", ".NET"],
  },
  {
    category: "Web Development",
    icon: Globe,
    items: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Angular",
      "NodeJS",
      "Spring Boot",
    ],
  },
  {
    category: "Database Management",
    icon: Database,
    items: ["MySQL", "Cassandra DB", "MongoDB", "PL/SQL"],
  },
  {
    category: "DevOps & Testing",
    icon: Settings,
    items: ["Jenkins", "Postman", "Newman", "Swagger", "Docker"],
  },
  {
    category: "Cloud & Tools",
    icon: Cloud,
    items: ["AWS", "Azure", "GitHub", "Jira", "Anaconda", "IntelliJ"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          Technical Skills
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                delay: index * 0.2,
                duration: 0.6,
                ease: "easeInOut",
              }}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <skill.icon className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-100 text-center">
                {skill.category}
              </h3>
              <ul className="space-y-2">
                {skill.items.map((item, idx) => (
                  <motion.li
                    key={idx}
                    whileHover={{ scale: 1.1 }}
                    className="px-4 py-2 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-lg shadow-sm"
                  >
                    {item}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
