import React from 'react';

export function About() {
  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">About Me</h2>
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg">
            I'm a passionate developer with expertise in building modern web applications.
            With a strong foundation in both frontend and backend technologies,
            I create elegant solutions to complex problems.
          </p>
        </div>
      </div>
    </section>
  );
}