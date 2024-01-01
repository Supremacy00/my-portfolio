import React from "react";
import { SiMockserviceworker } from "react-icons/si";
import { FaSchool } from "react-icons/fa";
import { workingSkillsData, educationData } from "../data";
import { FaCode } from "react-icons/fa6";
import { ImBooks } from "react-icons/im";
import { HiCheck } from "react-icons/hi";

const Resume = () => {
  return (
    <section className=" font-IBM mx-auto max-w-[650px] mt-5 lg:mt-0 lg:max-w-full ">
      <div className="w-full bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-auto ">
        <div className="hidden lg:block lg:sticky top-0 right-0 w-full bg-white dark:bg-secondary py-2" />
        <div>
          <div>
            <span className="flex items-center gap-5 p-7">
              <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                <span className="text-custom5">R</span>esume
              </h1>
              <div className="w-40 h-[2px] bg-custom5" />
            </span>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
          </div>
          <div className="p-7 sm:grid grid-cols-2 gap-5">
            <div>
              <div className="flex items-center gap-3">
                <SiMockserviceworker className="text-[30px] text-amber-800" />
                <h1 className="text-[20px] font-semibold text-light dark:text-dark">
                  Experience
                </h1>
              </div>
              <article className="mt-5 grid grid-cols-1 gap-5">
                {workingSkillsData.map((item) => (
                  <article key={item.id} className="w-[full]">
                    <div className="w-full p-5 border-[1px] border-gray-200 dark:border-custom2 rounded-2xl ">
                      <h3 className="text-[14px] font-medium text-light2 dark:text-dark2 mb-2.5">
                        {item.year}
                      </h3>
                      <h1 className="text-[18px] font-semibold text-light dark:text-dark mb-1">
                        {item.title}{" "}
                        <span className="text-light2 dark:text-dark2">
                          {item.title2}
                        </span>
                      </h1>
                      <h3 className="text-base text-light2 dark:text-dark2">
                        {item.location}
                      </h3>
                    </div>
                  </article>
                ))}
              </article>
            </div>
            <div className="mt-7 sm:mt-0">
              <div className="flex items-center gap-3">
                <FaSchool className="text-[30px] text-custom4" />
                <h1 className="text-[20px] font-semibold text-light dark:text-dark">
                  Education
                </h1>
              </div>
              <article className="mt-5 grid grid-cols-1 gap-5">
                {educationData.map((item) => (
                  <article key={item.id} className="w-full">
                    <div className="w-full p-5 border-[1px] border-gray-200 dark:border-custom2 rounded-2xl ">
                      <h3 className="text-[14px] font-medium text-light2 dark:text-dark2 mb-2.5">
                        {item.year}
                      </h3>
                      <h1 className="text-[18px] font-semibold text-light dark:text-dark mb-1">
                        {item.title}{" "}
                        <span className="text-light2 dark:text-dark2">
                          {item.title2}
                        </span>
                      </h1>
                      <h3 className="text-base text-light2 dark:text-dark2 ">
                        {item.location}
                      </h3>
                    </div>
                  </article>
                ))}
              </article>
            </div>
          </div>
          <div>
            <div className="p-7">
              <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                Skills
              </h1>
            </div>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
            <div className="px-7 py-3">
              <div className="lg:flex justify-between items-center gap-8 xxl:gap-12">
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
                    <span className="flex justify-between items-center text-base  text-light font-medium dark:text-dark">
                      <h3>Web Dev</h3>
                      <p>97%</p>
                    </span>
                    <div className="relative w-full mt-3">
                      <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                      <div className="absolute top-0 w-[97%] bg-indigo-800 py-[3px]"></div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <span className="flex justify-between items-center text-base  text-light font-medium dark:text-dark">
                      <h3>React & Next Javascript</h3>
                      <p>92%</p>
                    </span>
                    <div className="relative w-full mt-3">
                      <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                      <div className="absolute top-0 w-[92%] bg-custom6 py-[3px]"></div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <span className="flex justify-between items-center text-base  text-light font-medium dark:text-dark">
                      <h3>Tailwind CSS</h3>
                      <p>90%</p>
                    </span>
                    <div className="relative w-full mt-3">
                      <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                      <div className="absolute top-0 w-[90%] bg-custom4 py-[3px]"></div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <span className="flex justify-between items-center text-base  text-light font-medium dark:text-dark">
                      <h3>HTML & CSS</h3>
                      <p>100%</p>
                    </span>
                    <div className="relative w-full mt-3">
                      <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                      <div className="absolute top-0 w-[100%] bg-amber-800 py-[3px]"></div>
                    </div>
                  </div>
                  <div className="mt-7">
                    <span className="flex justify-between items-center text-base  text-light font-medium dark:text-dark">
                      <h3>Mobile App</h3>
                      <p>45%</p>
                    </span>
                    <div className="relative w-full mt-3">
                      <div className="relative w-full bg-custom11 dark:bg-custom12 py-[3px]"></div>
                      <div className="absolute top-0 w-[45%] bg-cyan-700 py-[3px]"></div>
                    </div>
                  </div>
                </div>
                <div className="mt-12 w-full pb-16 lg:mt-2 lg:pb-7">
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
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      Advertising Services
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <HiCheck className="text-[25px] text-custom4" />
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      Search Engine Marketing
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <HiCheck className="text-[25px] text-custom4" />
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      Hosting Installation
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <HiCheck className="text-[25px] text-custom4" />
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      SEO Optimization
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <HiCheck className="text-[25px] text-custom4" />
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      Responsive Design
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <HiCheck className="text-[25px] text-custom4" />
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      Coumunication
                    </p>
                  </div>
                  <div className="flex items-center gap-3 mt-3">
                    <HiCheck className="text-[25px] text-custom4" />
                    <p className="text-base text-light font-normal dark:text-dark bg-custom1 dark:bg-custom2 py-2 px-5 rounded-lg">
                      Time Management
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:sticky bottom-0 right-0 w-full bg-white dark:bg-secondary py-2" />
      </div>
    </section>
  );
};

export default Resume;
