import React from "react";
import { FaCode } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { HiCheck } from "react-icons/hi";

const Skills = () => {
  return (
    <div>
      <div className="p-7">
        <h1 className="text-[20px] text-light dark:text-dark font-semibold">
          Skills
        </h1>
      </div>
      <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
      <div className="p-7">
        <div className="items-center justify-between gap-8 lg:flex xxl:gap-12">
          <div className="w-full lg:-mt-14">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-[30px] text-custom6 border-[4px] p-1.5 border-cyan-700 rounded-full">
                <FaCode />
              </span>
              <h1 className="text-[18px] text-light dark:text-dark font-semibold">
                Code
              </h1>
            </div>
            <div>
              <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
                <h3>Web Dev</h3>
                <p>97%</p>
              </span>
              <div className="relative w-full mt-3">
                <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                <div className="absolute top-0 w-[97%] bg-indigo-800 py-[3px]"></div>
              </div>
            </div>
            <div className="mt-7">
              <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
                <h3>Mobile App</h3>
                <p>85%</p>
              </span>
              <div className="relative w-full mt-3">
                <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                <div className="absolute top-0 w-[85%] bg-cyan-700 py-[3px]"></div>
              </div>
            </div>
            <div className="mt-7">
              <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
                <h3>React & Next Javascript</h3>
                <p>92%</p>
              </span>
              <div className="relative w-full mt-3">
                <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                <div className="absolute top-0 w-[92%] bg-custom6 py-[3px]"></div>
              </div>
            </div>

            <div className="mt-7">
              <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
                <h3>HTML & CSS</h3>
                <p>100%</p>
              </span>
              <div className="relative w-full mt-3">
                <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                <div className="absolute top-0 w-[100%] bg-amber-800 py-[3px]"></div>
              </div>
            </div>
            <div className="mt-7">
              <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
                <h3>Tailwind CSS</h3>
                <p>95%</p>
              </span>
              <div className="relative w-full mt-3">
                <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                <div className="absolute top-0 w-[95%] bg-custom4 py-[3px]"></div>
              </div>
            </div>
            <div className="mt-7">
              <span className="flex items-center justify-between text-base font-medium text-light dark:text-dark">
                <h3>JavaScript</h3>
                <p>75%</p>
              </span>
              <div className="relative w-full mt-3">
                <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                <div className="absolute top-0 w-[75%] bg-lime-800 py-[3px]"></div>
              </div>
            </div>
          </div>
          <div className="w-full pb-16 mt-12 lg:mt-2 lg:pb-7">
            <div className="flex items-center gap-3 mb-7">
              <span className="text-[30px] text-amber-800 border-[4px] p-1.5 border-custom4 rounded-full">
                <ImBooks />
              </span>
              <h1 className="text-[18px] text-light dark:text-dark font-semibold">
                Knowledge
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Advertising Services
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Search Engine Marketing
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Hosting Installation
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                SEO Optimization
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Performance Optimization
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Responsive Design
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Communication
              </p>
            </div>
            <div className="flex items-center gap-3 mt-3">
              <HiCheck className="text-[25px] text-custom4" />
              <p className="px-5 py-2 text-base font-normal rounded-lg text-light dark:text-dark bg-custom1 dark:bg-custom2">
                Time Management
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
