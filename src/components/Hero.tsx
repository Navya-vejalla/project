import React from "react";

export function Hero() {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center py-16 bg-gray-50 dark:bg-gray-900">
      {/* Add a professional photo with an increased circle size */}
      <div className="w-52 h-52 rounded-full overflow-hidden border-4 border-blue-600 mb-6">
        <img
          src="./src/public/Me.jpg" // Correct path for public folder files
          alt="Navya Vejalla"
          className="w-full h-full object-cover scale-110 object-top"
        />
      </div>

      {/* Add Name and Headline */}
      <h1 className="text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Hi, I'm{" "}
        <span className="text-blue-600 dark:text-blue-400">Navya Vejalla</span>
      </h1>
      <p className="text-lg mb-6 text-gray-700 dark:text-gray-300 max-w-2xl">
        Full Stack Developer specializing in building scalable web applications
        using modern technologies like React, Node.js, and Cloud platforms.
        Passionate about creating impactful solutions.
      </p>

      {/* Buttons Section */}
      <div className="flex space-x-4">
        {/* Get in Touch Button */}
        <a
          href="#contact"
          className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
        >
          Get in Touch
        </a>

        {/* Download Resume Button */}
        <a
          href="./src/public/Navya Vejalla.pdf" // Correct path for public folder files
          download
          className="px-6 py-3 bg-gray-200 text-blue-600 font-semibold rounded-lg shadow-md hover:bg-gray-300 transition"
        >
          Download Resume
        </a>
      </div>
    </div>
  );
}
