'use client'
import React from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import { motion, AnimatePresence } from "framer-motion";
import Works from "./works/Works";
import About from "./about/About";
import Resume from "./resume/Resume";
import Blogs from "./blogs/Blogs";
import Contact from "./contact/Contact";

const ContentLayout = () => {
  const { activeSection } = useMyComponentContext()
    useMyComponentContext();
    
  const variants = {
    initial: { opacity: 1, y: '100%' },
    animate: { opacity: 1, y: 0, transition: { duration: 0.8 } },
    exit: { opacity: 0, y: '-100%', transition: { duration: 0.8 } },
  };

  return (
    <div>
      <AnimatePresence initial={false} mode="popLayout">
        {activeSection === "About" && (
          <motion.div
            key="About"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <About />
          </motion.div>
        )}
        {activeSection === "Resume" && (
          <motion.div
            key="Resume"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Resume />
          </motion.div>
        )}
        {activeSection === "Works" && (
          <motion.div
            key="Works"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Works />
          </motion.div>
        )}
        {activeSection === "Blog" && (
          <motion.div
            key="Blog"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Blogs />
          </motion.div>
        )}
        {activeSection === "Contact" && (
          <motion.div
            key="Contact"
            variants={variants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            <Contact />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ContentLayout;
