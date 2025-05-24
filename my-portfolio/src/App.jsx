import Navbar from "./Navbar";
import Hero from "./Hero";
import About from "./About";
import Projects from "./Projects";
import Experience from "./Experience";
import Education from "./Education";
import Contact from "./Contact";
import Footer from "./Footer";
import { useState, useEffect } from "react";

function App() {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <div className="font-sans scroll-smooth bg-white text-black dark:bg-black dark:text-white transition-colors duration-300">
      <Navbar toggleTheme={toggleTheme} theme={theme} />
      <main className="px-4 md:px-10 lg:px-20 max-w-4xl mx-auto text-center space-y-24">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;