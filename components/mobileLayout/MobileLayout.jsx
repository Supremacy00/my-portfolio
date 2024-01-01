'use client'
import React from 'react'
import { Element } from "react-scroll";
import About from "@/components/about/About";
import Blogs from "@/components/blogs/Blogs";
import Contact from "@/components/contact/Contact";
import Resume from "@/components/resume/Resume";
import Works from "@/components/works/Works";

const MobileLayout = () => {
  return (
    <div className="lg:hidden">
    <Element id="about-section">
      <About />
    </Element>
    <Element id="resume-section">
      <Resume />
    </Element>
    <Element id="works-section">
      <Works />
    </Element>
    <Element id="blogs-section">
      <Blogs />
    </Element>
    <Element id="contact-section">
      <Contact />
    </Element>
  </div>
  )
}

export default MobileLayout