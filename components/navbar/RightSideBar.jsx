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

const RightSideBar = () => {
  const { activeSection, handleSetActive } = useMyComponentContext();
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className="font-IBM mx-auto w-full transition-all duration-300 ease-in-out">
      <div className=" px-7 py-8 rounded-[30px] flex items-center flex-col space-y-8 bg-white dark:bg-secondary">
        <div className="custom-cursor group cursor-pointer">
          <div className="w-5 h-[2px] bg-light dark:bg-white group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
          <div className="w-7 h-[2px] bg-light dark:bg-white mt-[5px] group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
          <div className="w-3 h-[2px] bg-light dark:bg-white mt-[5px] group-hover:w-7 group-hover:bg-custom5 transition-all duration-300 ease-in-out" />
        </div>
        {theme === "dark" ? (
          <div
            className="dark:text-white dark:hover:text-custom5 cursor-pointer transition-colors duration-300 ease-in-out"
            onClick={toggleTheme}
          >
            <LuSun className="text-[23px]" />
          </div>
        ) : (
          theme === "light" && (
            <div
              className="text-light hover:text-custom5 cursor-pointer transition-colors duration-300 ease-in-out"
              onClick={toggleTheme}
            >
              <IoMoonOutline className="text-[25px]" />
            </div>
          )
        )}
      </div>
      <div className="relative px-2 py-3  mt-5 flex flex-col items-center space-y-2 ">
        <Link
        href="/"
          className="custom-cursor group flex items-center p-[19px] bg-white dark:bg-secondary rounded-xl cursor-pointer"
          onClick={() => handleSetActive("About")}
        >
          <FaUser
            className={`${
              activeSection === "About"
                ? "text-[22px] text-custom5"
                : "text-[22px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
          />
          <p className="absolute -left-9 text-[12px] text-white uppercase bg-custom5 px-2.5 py-[1.5px] rounded-full opacity-0 group-hover:visible  group-hover:-left-11 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            About
          </p>
        </Link>
        <Link
        href="#resume"
          className="custom-cursor group flex items-center p-5 bg-white dark:bg-secondary rounded-xl  cursor-pointer"
          onClick={() => handleSetActive("Resume")}
        >
          <FaThList
            className={`${
              activeSection === "Resume"
                ? "text-[20px] text-custom5"
                : "text-[20px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
          />
          <p className="absolute -left-9 text-[12px] text-white uppercase bg-custom5 px-2.5 py-[1.5px] rounded-full opacity-0 group-hover:visible  group-hover:-left-[52px] group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Resume
          </p>
        </Link>
        <Link
        href="#works"
          className="custom-cursor group flex items-center p-5 bg-white dark:bg-secondary rounded-xl  cursor-pointer"
          onClick={() => handleSetActive("Works")}
        >
          <FaBriefcase
            className={`${
              activeSection === "Works"
                ? "text-[20px] text-custom5"
                : "text-[20px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
          />
          <p className="absolute -left-9 text-[12px] text-white uppercase bg-custom5 px-2.5 py-[1.5px] rounded-full opacity-0 group-hover:visible  group-hover:-left-[46px] group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Works
          </p>
        </Link>
        <Link
        href="#blog"
          className="custom-cursor group flex items-center p-[19px] bg-white dark:bg-secondary rounded-xl  cursor-pointer"
          onClick={() => handleSetActive("Blog")}
        >
          <FaBloggerB
            className={`${
              activeSection === "Blog"
                ? "text-[22px] text-custom5"
                : "text-[22px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
          />
          <p className="absolute -left-7 text-[12px] text-white uppercase bg-custom5 px-2.5 py-[1.5px] rounded-full opacity-0 group-hover:visible  group-hover:-left-9 group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Blog
          </p>
        </Link>
        <Link
        href="#contact"
          className="custom-cursor group flex items-center p-5 bg-white dark:bg-secondary rounded-xl  cursor-pointer"
          onClick={() => handleSetActive("Contact")}
        >
          <FaPaperPlane
            className={`${
              activeSection === "Contact"
                ? "text-[20px] text-custom5"
                : "text-[20px] text-light dark:text-white"
            } group-hover:text-custom5 transition-colors duration-300 ease-in-out`}
          />
          <p className="absolute -left-12 text-[12px] text-white uppercase bg-custom5 px-2.5 py-[1.5px] rounded-full opacity-0 group-hover:visible  group-hover:-left-[60px] group-hover:opacity-100 transition-all duration-300 ease-in-out ">
            Contact
          </p>
        </Link>
      </div>
    </section>
  );
};

export default RightSideBar;
