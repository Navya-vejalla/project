import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  const socialLinks = [
    { href: "https://github.com/navyavejalla", icon: Github },
    { href: "https://linkedin.com/in/navyavejalla", icon: Linkedin },
    { href: "mailto:navyavejalla@gmail.com", icon: Mail },
  ];

  return (
    <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-center space-x-6">
          {socialLinks.map(({ href, icon: Icon }) => (
            <a
              key={href}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-gray-500"
            >
              <Icon className="h-6 w-6" />
            </a>
          ))}
        </div>
        <div className="mt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} Navya Vejalla. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
