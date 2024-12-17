import React from "react";

export function Contact() {
  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-8">Contact</h2>
        <div className="max-w-2xl mx-auto">
          <p className="text-lg mb-4">Feel free to reach out!</p>
          <ul className="space-y-4">
            <li>
              Email:{" "}
              <a href="mailto:navyavejalla@gmail.com" className="text-blue-600">
                navyavejalla@gmail.com
              </a>
            </li>
            <li>
              LinkedIn:{" "}
              <a
                href="https://www.linkedin.com/in/navyavejalla"
                className="text-blue-600"
              >
                linkedin.com/in/navyavejalla
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
