import React from "react";

const experiences = [
  {
    role: "Graduate Teaching Assistant",
    company: "UNC Charlotte",
    duration: "Aug 2024 - Present",
    description:
      "Assisting students with web development concepts such as HTML, CSS, JavaScript, and asynchronous programming.",
  },
  {
    role: "Software Development Administrator",
    company: "Pearson India",
    duration: "Jan 2023 - Dec 2023",
    description:
      "Contributed to Learning Management Systems (LMS) using C#, .NET, SQL, and Azure to enhance teacher-student interactions.",
  },
  {
    role: "Full Stack Developer",
    company: "Wipro Technologies",
    duration: "Sep 2021 - Jan 2023",
    description:
      "Built scalable applications with Java, Spring Boot, and React, optimizing performance by up to 30%.",
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold">
                {exp.role} -{" "}
                <span className="text-blue-600">{exp.company}</span>
              </h3>
              <p className="text-gray-600 dark:text-gray-300">{exp.duration}</p>
              <p className="mt-4">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
