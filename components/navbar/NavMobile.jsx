"use client";
import React from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import { useContext } from "react";
import { ThemeContext } from "@/context/theme-provider";
import { FaBriefcase, FaBloggerB } from "react-icons/fa6";
import { LuSun } from "react-icons/lu";
import { IoMoonOutline } from "react-icons/io5";
import { FaUser, FaThList, FaPaperPlane } from "react-icons/fa";
import Link from "next/link";

const NavMobile = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const { activeSection, handleSetActive, scrollToSection, scrolledSection } =
    useMyComponentContext();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md dark:bg-secondary lg:hidden">
      <div>
        <div className="flex justify-between items-center gap-2 px-7 py-3.5 mx-auto max-w-[650px] lg:px-5">
          <h1 className="text-sm font-semibold text-light dark:text-white">
            Musa Abdulmuqaddas
          </h1>
          <div className="flex items-center gap-5">
            {theme === "dark" ? (
              <div
                className="transition-colors duration-300 ease-in-out cursor-pointer dark:text-white dark:hover:text-custom5"
                onClick={toggleTheme}
              >
                <LuSun className="text-[23px]" />
              </div>
            ) : (
              <div
                className="transition-colors duration-300 ease-in-out cursor-pointer text-light hover:text-custom5"
                onClick={toggleTheme}
              >
                <IoMoonOutline className="text-[25px]" />
              </div>
            )}
            <div className="p-3 cursor-pointer group">
              <div className="w-5 h-[2px] bg-light dark:bg-white group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
              <div className="w-7 h-[2px] bg-light dark:bg-white mt-[5px] group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
              <div className="w-3 h-[2px] bg-light dark:bg-white mt-[5px] group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
            </div>
          </div>
        </div>
        <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
        <div className="relative px-4 py-6 grid grid-cols-5 place-items-center overflow-x-auto gap-12 mx-auto max-w-[600px] lg:px-0">
          <Link
            href="/"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              handleSetActive("About");
              scrollToSection("about-section");
              window.history.pushState(null, null, "/");
            }}
          >
            <FaUser
              className={`${
              scrolledSection === "About"
                  ? "text-[22px] text-custom5"
                  : "text-[22px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#resume"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("resume-section");
              handleSetActive("Resume");
              window.history.pushState(null, null, "#resume");
            }}
          >
            <FaThList
              className={`${
              scrolledSection === "Resume"
                  ? "text-[20px] text-custom5"
                  : "text-[20px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#works"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("works-section");
              handleSetActive("Works");
              window.history.pushState(null, null, "#works");
            }}
          >
            <FaBriefcase
              className={`${
              scrolledSection === "Works"
                  ? "text-[20px] text-custom5"
                  : "text-[20px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#blog"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("blogs-section");
              handleSetActive("Blog");
              window.history.pushState(null, null, "#blog");
            }}
          >
            <FaBloggerB
              className={`${
               scrolledSection === "Blogs"
                  ? "text-[22px] text-custom5"
                  : "text-[22px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
          <Link
            href="#contact"
            className="flex items-center cursor-pointer group dark:bg-secondary rounded-xl"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("contact-section");
              handleSetActive("Contact");
              window.history.pushState(null, null, "#contact");
            }}
          >
            <FaPaperPlane
              className={`${
               scrolledSection === "Contact"
                  ? "text-[20px] text-custom5"
                  : "text-[20px] text-light dark:text-dark"
              } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavMobile;
