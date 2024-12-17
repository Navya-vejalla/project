import React from "react";

const projects = [
  {
    title: "Personal Budget Application",
    description:
      "ReactJS, Firebase Authentication, D3.js for visualizing expenses.",
  },
  {
    title: "Photo Sharing Application",
    description: "ReactJS and Node.js app with secure user authentication.",
  },
  {
    title: "Emotion-Based Music Recommendation System",
    description:
      "Suggests music based on facial emotion detection using computer vision.",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Projects</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
              <p>{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
