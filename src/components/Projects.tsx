import React from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const projects = [
  {
    title: "Personal Budget Application",
    description: `
      Developed a personal budget application to track expenses and manage finances effectively. 
      Designed a user-friendly interface using ReactJS and Material-UI components. Utilized D3.js 
      to create interactive charts for visualizing income, expenses, and budgets. Implemented 
      secure user authentication using Firebase Authentication. Enabled users to make informed 
      financial decisions with personalized budget insights.
    `,
    technologies: ["ReactJS", "Material-UI", "D3.js", "Firebase"],
    githubLink: "https://github.com/yourusername/personal-budget-app", // Replace with actual link
    timeline: "January 2024 – March 2024",
  },
  {
    title: "Photo Sharing Application",
    description: `
      Developed a photo-sharing web application using ReactJS, Material-UI, and Node.js. Implemented 
      a Master-Detail pattern for client-side routing and designed a user interface with Material-UI 
      components. Fetched model data from a web server using XMLHttpRequest and parsed JSON responses. 
      Enhanced security with password salting and hashing using Node's crypto package. Implemented 
      features such as user stories, favorite lists, photo likes, and an activity feed.
    `,
    technologies: ["ReactJS", "Material-UI", "Node.js", "JSON"],
    githubLink: "https://github.com/yourusername/photo-sharing-app", // Replace with actual link
    timeline: "March 2024 – May 2024",
  },
  {
    title: "Face Emotion-Based Music Recommendation System",
    description: `
      Developed a music recommendation system that detects human emotions from facial features. 
      Utilized computer vision techniques to extract facial features and detect emotions. 
      Implemented a music player that selects music based on the detected emotion. Improved 
      music recommendation experience with personalized emotional connections.
    `,
    technologies: ["Python", "OpenCV", "Flask"],
    githubLink: "https://github.com/yourusername/emotion-music-recommender", // Replace with actual link
    timeline: "January 2021 – March 2021",
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900 dark:text-gray-100">
          Academic / Personal Projects
        </h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              className="p-6 bg-white dark:bg-gray-900 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-2 text-center">
                {project.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 whitespace-pre-wrap text-justify">
                {project.description.trim()}
              </p>
              {/* Technologies Section */}
              <div className="flex flex-wrap gap-2 mb-4 justify-center">
                {project.technologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300 text-sm rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {/* Timeline */}
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4 text-center">
                <strong>Timeline:</strong> {project.timeline}
              </p>
              {/* GitHub Link */}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition-transform hover:scale-105"
              >
                <Github className="h-5 w-5 mr-2" />
                View on GitHub
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
