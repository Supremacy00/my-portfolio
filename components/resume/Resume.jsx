import React from "react";
import Skills from "./Skills";
import Experience from "./Experience";
import Education from "./Education";

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
              <Experience />
              <Education />
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
