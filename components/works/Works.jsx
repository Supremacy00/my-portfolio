import React from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import WorksLayout from "./WorksLayout";

const Works = () => {
  const { isComponentVisible, handleIsComponentVisibility } =
    useMyComponentContext();
  return (
    <section className="font-IBM mx-auto max-w-[650px] mt-5 lg:mt-0 lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-auto ">
        <div className="hidden lg:block lg:sticky top-0 right-0 w-full bg-white dark:bg-secondary py-2" />
        <div>
          <div>
            <span className="flex items-center gap-5 p-7">
              <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                <span className="text-custom5">W</span>orks
              </h1>
              <div className="w-40 h-[2px] bg-custom5" />
            </span>
            <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
          </div>
          <div>
            <p className="text-base text-light2 dark:text-dark2 leading-7 py-5 px-7">{`Dive into my coding projects, where I've translated ideas into fully functional applications.`}</p>
              <span className="flex justify-center items-center gap-5 flex-wrap text-base px-7 lg:justify-end">
                <h3
                  className={`${
                    isComponentVisible === "All"
                      ? "text-custom5"
                      : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                  } cursor-pointer transition-colors duration-300 ease-in-out`}
                  onClick={() => handleIsComponentVisibility("All")}
                >
                  All
                </h3>
                <h3
                  className={`${
                    isComponentVisible === "Innovations"
                      ? "text-custom5"
                      : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                  } cursor-pointer transition-colors duration-300 ease-in-out`}
                  onClick={() => handleIsComponentVisibility("Innovations")}
                >
                  Innovations
                </h3>
                <h3
                  className={`${
                    isComponentVisible === "Panoramas"
                      ? "text-custom5"
                      : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                  } cursor-pointer transition-colors duration-300 ease-in-out`}
                  onClick={() => handleIsComponentVisibility("Panoramas")}
                >
                  Panoramas
                </h3>
                <h3
                  className={`${
                    isComponentVisible === "Symphonies"
                      ? "text-custom5"
                      : "text-light dark:text-dark hover:text-custom5 dark:hover:text-custom5"
                  } cursor-pointer transition-colors duration-300 ease-in-out`}
                  onClick={() => handleIsComponentVisibility("Symphonies")}
                >
                  Symphonies
                </h3>
              </span>
            <div>
              <WorksLayout />
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:sticky bottom-0 right-0 w-full bg-white dark:bg-secondary py-2" />
      </div>
    </section>
  );
};

export default Works;
