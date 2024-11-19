import React from "react";
import { SiMockserviceworker } from "react-icons/si";
import { workingSkillsData } from "../../constant/data";
import Image from "next/image";

const Experience = () => {
  return (
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
                <Image
                  src={item.logo}
                  alt={item.title}
                  width={20}
                  height={15}
                />
              </span>
            </div>
          </article>
        ))}
      </article>
    </div>
  );
};

export default Experience;
