import React, { useEffect, useState, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { AnimatedBackground } from "./components/AnimatedBackground";
import { Navigation } from "./components/layout/Navigation";
import { MobileMenu } from "./components/layout/MobileMenu";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Experience } from "./components/Experience";
import { Projects } from "./components/Projects";
import { Skills } from "./components/Skills";
import { Contact } from "./components/Contact";
import { Footer } from "./components/layout/Footer";
import { Certifications } from "./components/Certifications";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Initialize theme from localStorage or system preference
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (
      savedTheme === "dark" ||
      (!savedTheme && window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setDarkMode(true);
    }
  }, []);

  // Apply the dark class to the <html> element when darkMode changes
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark"); // Save preference to localStorage
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light"); // Save preference to localStorage
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen ${darkMode ? "dark" : ""}`}>
      <div className="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        <Navigation
          darkMode={darkMode}
          setDarkMode={setDarkMode}
          menuOpen={menuOpen}
          setMenuOpen={setMenuOpen}
        />
        <MobileMenu isOpen={menuOpen} />

        <main>
          <div className="h-screen relative">
            <Canvas className="absolute inset-0">
              <Suspense fallback={null}>
                <AnimatedBackground />
                <OrbitControls enableZoom={false} />
                <Stars
                  radius={100}
                  depth={50}
                  count={5000}
                  factor={4}
                  saturation={0}
                  fade
                />
              </Suspense>
            </Canvas>
            <Hero />
          </div>

          <div className="relative z-10 bg-white dark:bg-gray-900">
            <About />
            <Experience />
            <Projects />
            <Skills />
            <Certifications />
            <Contact />
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}

export default App;
