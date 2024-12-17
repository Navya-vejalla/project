import React from "react";

const skills = [
  "Java, C#, Python, .NET",
  "React, Angular, Spring Boot",
  "HTML, CSS, JavaScript, NodeJS",
  "MySQL, MongoDB, Cassandra DB",
  "AWS, Azure, Jenkins, Docker",
];

export function Skills() {
  return (
    <section id="skills" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Skills</h2>
        <ul className="grid gap-4 grid-cols-2 md:grid-cols-3">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="p-4 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            >
              {skill}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
