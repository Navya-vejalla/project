import React from 'react';

export function Hero() {
  return (
    <div className="absolute inset-0 flex items-center justify-center text-center">
      <div className="max-w-3xl px-4">
        <h1 className="text-5xl font-bold mb-6">
          Hi, I'm <span className="text-blue-600 dark:text-blue-400">Your Name</span>
        </h1>
        <p className="text-xl mb-8">
          Full Stack Developer | Problem Solver | Tech Enthusiast
        </p>
        <a
          href="#contact"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Get in Touch
        </a>
      </div>
    </div>
  );
}