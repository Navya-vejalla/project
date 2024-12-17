import React from 'react';
import { Menu } from 'lucide-react';
import { ThemeToggle } from '../ThemeToggle';
import { NavLinks } from './NavLinks';

interface NavigationProps {
  darkMode: boolean;
  setDarkMode: (value: boolean) => void;
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
}

export function Navigation({ darkMode, setDarkMode, menuOpen, setMenuOpen }: NavigationProps) {
  return (
    <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border-b border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <span className="text-xl font-bold">Portfolio</span>
          </div>
          
          <div className="hidden md:block">
            <NavLinks className="ml-10 flex items-center space-x-4" />
          </div>

          <div className="flex items-center space-x-4">
            <ThemeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
            <button
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}