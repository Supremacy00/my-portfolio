import React from "react";
import { aboutData } from "../../constant/data";

const About = () => {
  return (
    <section className="font-IBM mx-auto max-w-[650px] lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-[650px]">
        <div className="w-full bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-scroll scrollbar-custom">
          <div className="top-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                  <span className="text-custom5">A</span>bout Me
                </h1>
                <div className="w-40 h-[2px] bg-custom5" />
              </span>
              <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
              <p className="text-base leading-7 text-light2 dark:text-dark2 p-7">
                <span className="font-semibold text-[17px]">
                  {`Hello! I'm Musa Abdulmuqaddas.`}{" "}
                </span>
                {`I'm a passionate Front-End developer who specializes in creating dynamic and user-friendly web applications using React JavaScript. With a keen eye for design and a strong command of various technologies, I craft stunning user interfaces and ensure seamless user experiences.`}
              </p>
            </div>
            <div className="p-7">
              <div className="">
                <h1 className="text-[20px] font-semibold text-light dark:text-dark">
                  My Expertise
                </h1>
              </div>
              <article className="grid grid-cols-1 gap-5 mt-7 lg:grid-cols-2">
                {aboutData.map((item) => (
                  <article
                    key={item.id}
                    className="p-5 border-[1px] border-gray-200 dark:border-custom2 rounded-2xl sm:flex gap-4"
                  >
                    <div
                      className={`${
                        item.modification === "BL"
                          ? "text-custom6"
                          : item.modification === "WD"
                          ? "text-custom5"
                          : item.modification === "UD"
                          ? " text-amber-800"
                          : item.modification === "PS"
                          ? "text-cyan-700"
                          : ""
                      } text-[30px]`}
                    >
                      {item.icon}
                    </div>
                    <div className="mt-5 sm:-mt-[2px] lg:-mt-1">
                      <h1 className="text-[18px] font-semibold text-light dark:text-dark">
                        {item.title}
                      </h1>
                      <p className="mt-1 text-base leading-7 text-light2 dark:text-dark2">
                        {item.description}
                      </p>
                    </div>
                  </article>
                ))}
              </article>
            </div>
          </div>
          <div className="bottom-0 right-0 z-10 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
        </div>
      </div>
    </section>
  );
};

export default About;
