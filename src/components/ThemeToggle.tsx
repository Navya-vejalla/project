import React from 'react';
import { Moon, Sun } from 'lucide-react';

interface ThemeToggleProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
}

export function ThemeToggle({ darkMode, setDarkMode }: ThemeToggleProps) {
  return (
    <button
      onClick={() => setDarkMode(!darkMode)}
      className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
    >
      {darkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
    </button>
  );
}