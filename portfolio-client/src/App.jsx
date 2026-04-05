import { useEffect } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";

function AppContent() {
  const location = useLocation();

  useEffect(() => {
    document.body.classList.add("reveal-ready");
    const observedElements = new WeakSet();

    const revealElements = Array.from(document.querySelectorAll(".reveal-on-scroll"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -40px 0px"
      }
    );

    function registerRevealTargets() {
      const allRevealElements = Array.from(document.querySelectorAll(".reveal-on-scroll"));

      allRevealElements.forEach((element, index) => {
        if (observedElements.has(element)) {
          return;
        }

        element.classList.remove("revealed");
        element.style.setProperty("--reveal-delay", `${index * 70}ms`);
        observer.observe(element);
        observedElements.add(element);
      });
    }

    revealElements.forEach((element, index) => {
      element.classList.remove("revealed");
      element.style.setProperty("--reveal-delay", `${index * 70}ms`);
      observer.observe(element);
      observedElements.add(element);
    });

    const mutationObserver = new MutationObserver(() => {
      registerRevealTargets();
    });

    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true
    });

    registerRevealTargets();

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [location.pathname]);

  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;