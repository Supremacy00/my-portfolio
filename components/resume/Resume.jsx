import React from "react";
import { SiMockserviceworker } from "react-icons/si";
import { FaSchool } from "react-icons/fa";
import { workingSkillsData, educationData } from "../data";
import Skills from "./Skills";
import Image from "next/image";

const Resume = () => {
  return (
    <section className=" font-IBM mx-auto max-w-[650px] mt-5 lg:mt-0 lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-[650px]">
        <div className="w-full bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-auto ">
          <div className="top-0 right-0 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
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
            <div className="grid-cols-2 gap-5 p-7 sm:grid">
              <div>
                <div className="flex items-center gap-3">
                  <SiMockserviceworker className="text-[30px] text-amber-800" />
                  <h1 className="text-[20px] font-semibold text-light dark:text-dark">
                    Experience
                  </h1>
                </div>
                <article className="grid grid-cols-1 gap-5 mt-5">
                  {workingSkillsData.map((item) => (
                    <article key={item.id} className="w-[full]">
                      <div className="w-full p-5 border-[1px] overflow-hidden border-gray-200 dark:border-custom2 rounded-2xl ">
                        <h3 className="text-[14px] font-medium text-light2 dark:text-dark2 mb-2.5">
                          {item.year}
                        </h3>
                        <h1 className="text-[18px] font-semibold text-light dark:text-dark mb-1">
                          {item.title}
                        </h1>
                        <span className="flex items-center gap-3">
                        <h3 className="text-base text-light2 dark:text-dark2">
                          {item.company}
                        </h3>
                        <Image src={item.logo} alt={item.title} width={20} height={15}/>
                        </span>
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
                <article className="grid grid-cols-1 gap-5 mt-5">
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
            <Skills />
          </div>
          <div className="bottom-0 right-0 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default Resume;
