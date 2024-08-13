"use client";
import Image from "next/image";
import React from "react";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn, FaGithubAlt, FaCalendarDays } from "react-icons/fa6";
import { CgFacebook } from "react-icons/cg";
import {
  MdPhoneIphone,
  MdMarkEmailUnread,
  MdFileDownload,
} from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import TypingAnimation from "../typingAnimation/TypingAnimation";
import Link from "next/link";

const Profile = () => {
  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "/assets/resume/my_resume.pdf";
    link.download = "Musa_Abdulmuqaddas_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section className="mt-[158px] mb-5 font-work-sans mx-auto max-w-[650px] lg:max-w-full lg:m-0 lg:flex items-center justify-center lg:h-[100dvh]">
      <div className="flex justify-center items-center w-full">
        <div className="w-full bg-white dark:bg-secondary rounded-3xl py-12 px-4 lg:py-6">
          <div className="relative">
            <div className="relative w-[79%] h-[200px] z-20 mx-auto bg-custom1 dark:bg-custom2 overflow-hidden rounded-2xl xs:w-[250px] xs:h-[200px] lg:w-[150px] lg:h-[150px] lg:rounded-[40%]">
              <Image
                src="/assets/images/profile-image.png"
                alt="Profile Image"
                width={1000}
                height={1000}
                priority
              />
            </div>
            <div className="absolute top-3 right-7 z-10 w-[79%] flex justify-center inset-1 h-[200px] mx-auto bg-custom5 bg-opacity-25 dark:bg-opacity-15 rounded-2xl xs:w-[250px] xs:h-[200px] lg:top-2 lg:right-5 lg:w-[150px] lg:h-[150px] lg:rounded-[40%]"></div>
            <div className="absolute top-3 right-7 z-30 w-[79%] flex justify-center inset-1 h-[200px] mx-auto bg-transparent rounded-2xl xs:w-[250px] xs:h-[200px] lg:w-[150px] lg:h-[150px] lg:rounded-[40%]">
              <span className="absolute top-[65%] -right-[18px] flex h-3.5 w-3.5 lg:top-[60%] lg:-right-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-custom5 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-custom5"></span>
              </span>
            </div>
          </div>
          <div className="w-full text-center">
            <h1 className="text-light text-[20px] font-semibold mt-7 dark:text-dark">
              Musa Abdulmuqaddas
            </h1>
            <div className="mx-auto text-medium dark:text-dark bg-custom1 dark:bg-custom2 text-[14px] w-44 h-10 mt-3 rounded-md shadow-md">
              <div className="pt-2.5">
                <TypingAnimation />
              </div>
            </div>
            <div className="flex justify-center items-center gap-3 flex-wrap mt-5">
              <Link
                href="https://www.facebook.com/mukadas1?mibextid=2JQ9oc"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-cursor text-[20px] text-custom4 hover:bg-secondary hover:text-white dark:hover:text-secondary dark:hover:bg-custom5 p-2.5 bg-custom1 dark:bg-custom2 rounded-lg shadow-md transition-colors duration-300 ease-in-out cursor-pointer"
              >
                <CgFacebook />
              </Link>
              <Link
                href="https://www.instagram.com/iam_abdmuqaddas?igsh=OGQ5ZDc2ODk2ZA=="
                target="_blank"
                rel="noopener noreferrer"
                className="custom-cursor text-[20px] text-custom6 hover:bg-secondary hover:text-white dark:hover:text-secondary dark:hover:bg-custom5 p-2.5 bg-custom1 dark:bg-custom2 rounded-lg shadow-md transition-colors duration-300 ease-in-out cursor-pointer"
              >
                <IoLogoInstagram />
              </Link>
              <Link
                href="https://www.linkedin.com/in/musa-abdulmuqaddas"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-cursor text-[16px] text-custom5 hover:bg-secondary hover:text-white dark:hover:text-secondary dark:hover:bg-custom5 p-3 bg-custom1 dark:bg-custom2 rounded-lg shadow-md transition-colors duration-300 ease-in-out cursor-pointer"
              >
                <FaLinkedinIn />
              </Link>
              <Link
                href="https://github.com/Supremacy00"
                target="_blank"
                rel="noopener noreferrer"
                className="custom-cursor text-[20px] text-amber-800 hover:bg-secondary hover:text-white dark:hover:text-secondary dark:hover:bg-custom5 p-2.5 bg-custom1 dark:bg-custom2 rounded-lg shadow-md transition-colors duration-300 ease-in-out cursor-pointer"
              >
                <FaGithubAlt />
              </Link>
            </div>
          </div>
          <div className="max-w-[100%] px-3 bg-custom1 dark:bg-custom2 mt-8 py-8 overflow-x-auto rounded-xl truncate">
            <div className="flex items-center gap-2.5">
              <span className="text-[28px] text-custom6 bg-white p-2 rounded-lg shadow-md dark:bg-secondary">
                <MdPhoneIphone />
              </span>
              <div>
                <h4 className=" text-light2 text-[13px] dark:text-dark2 mb-1 no-underline">
                  Phone
                </h4>
                <h2 className="text-light dark:text-white text-base no-underline">
                  +2348166836197
                </h2>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-custom10 my-3" />
            <div className="flex items-center gap-2.5">
              <span className="text-[28px] text-custom9 bg-white p-2 rounded-lg shadow-md dark:bg-secondary">
                <MdMarkEmailUnread />
              </span>
              <div>
                <h4 className=" text-light2 text-[13px] dark:text-dark2 mb-1">
                  Email
                </h4>
                <h2 className="text-light dark:text-white text-base">
                  musaabdulmuqaddas356@gmail.com
                </h2>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-custom10 my-3" />
            <div className="flex items-center gap-2.5">
              <span className="text-[28px] text-amber-800 bg-white p-2 rounded-lg shadow-md dark:bg-secondary">
                <IoLocationSharp />
              </span>
              <div>
                <h4 className=" text-light2 text-[13px] dark:text-dark2 mb-1">
                  Location
                </h4>
                <h2 className="text-light dark:text-white text-base">
                  Abuja, Nigeria
                </h2>
              </div>
            </div>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-custom10 my-3" />
            <div className="flex items-center gap-2.5">
              <span className="text-[28px] text-cyan-700 bg-white p-2 rounded-lg shadow-md dark:bg-secondary">
                <FaCalendarDays />
              </span>
              <div>
                <h4 className=" text-light2 text-[13px] dark:text-dark2 mb-1">
                  Birthday
                </h4>
                <h2 className="text-light dark:text-white text-base">
                  6th August
                </h2>
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center w-full text-white mt-6">
            <button
              onClick={handleDownload}
              className="custom-cursor flex items-center gap-1 bg-custom5 border-[2px] border-custom5 px-5 py-4 rounded-lg hover:bg-secondary transition-colors duration-300 ease-in-out"
            >
              <MdFileDownload className="text-[25px]" />
              <p className="text-[18px] font-semibold">Download CV</p>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Profile;
