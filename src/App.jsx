import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import Herosection from './Components/Herosection'
import About from './Components/About'
import Skill from './Components/Skill'
import Project from './Components/Project'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
function App() {
  const [count, setCount] = useState(0)

  useEffect(() => {
    const observerOptions = {
      threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
      section.classList.add('hidden');
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Herosection />
      <About />
      <Skill />
      <Project />
      <Contact />
      <Footer />
    </>
  )
}

export default App
