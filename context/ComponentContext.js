"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const MyComponentContext = createContext();

export const MyContextProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState("About");
  const [isComponentVisible, setComponentVisible] = useState("All");
  const [scrolledSection, setScrolledSection] = useState("");

  const handleSetActive = (section) => {
    setActiveSection(section);
    setScrolledSection(section);
  };

  const handleIsComponentVisibility = (status) => {
    setComponentVisible(status);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    const navbarHeight = 155;

    if (element) {
      const elementPosition =
        element.getBoundingClientRect().top + window.scrollY;
      const targetScrollPosition = elementPosition - navbarHeight;

      window.scrollTo({
        top: targetScrollPosition,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let isScrolling = false;

    const handleScroll = () => {
      if (!isScrolling) {
        isScrolling = true;

        requestAnimationFrame(() => {
          const sections = ["About", "Resume", "Works", "Blogs", "Contact"];
          const scrollPosition = window.scrollY;

          for (const section of sections) {
            const element = document.getElementById(
              `${section.toLowerCase()}-section`
            );
            if (element) {
              const rect = element.getBoundingClientRect();
              if (
                rect.top <= window.innerHeight / 4 &&
                rect.bottom >= window.innerHeight / 4
              ) {
                setScrolledSection(section);
                
                throttle(() => {
                  window.history.pushState(
                    null,
                    null,
                    `#${section.toLowerCase()}`
                  );
                }, 500);
                break;
              }
            }
          }

          isScrolling = false;
        });
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const MyContextValue = {
    isComponentVisible,
    handleIsComponentVisibility,
    scrollToSection,
    activeSection,
    handleSetActive,
    scrolledSection,
  };

  return (
    <MyComponentContext.Provider value={MyContextValue}>
      {children}
    </MyComponentContext.Provider>
  );
};

export const useMyComponentContext = () => {
  const context = useContext(MyComponentContext);

  if (!context) {
    throw new Error("useMyContext must be used within a MyContextProvider");
  }

  return context;
};

const throttle = (func, delay) => {
  let lastTime = 0;

  return function (...args) {
    const now = new Date().getTime();

    if (now - lastTime >= delay) {
      func(...args);
      lastTime = now;
    }
  };
};
