import React from "react";
import { motion } from "framer-motion";

interface NavLinksProps {
  className?: string;
  onLinkClick?: () => void; // Optional callback for handling link clicks
}

export function NavLinks({ className = "", onLinkClick }: NavLinksProps) {
  const links = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <motion.ul
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className={`space-y-2 md:space-y-0 md:space-x-4 flex flex-col md:flex-row ${className}`}
    >
      {links.map((link, index) => (
        <li key={index}>
          <a
            href={link.href}
            onClick={onLinkClick} // Call the `onLinkClick` handler
            className="text-gray-900 dark:text-gray-100 hover:text-blue-600 dark:hover:text-blue-400 transition"
          >
            {link.name}
          </a>
        </li>
      ))}
    </motion.ul>
  );
}
