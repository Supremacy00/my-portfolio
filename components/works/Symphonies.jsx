import React from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { worksData } from "../data";
import Link from "next/link";

const Symphonies = () => {
  return (
    <section>
      <AnimatePresence>
        <article className="grid grid-cols-1 gap-5 lg:grid-cols-2 px-7 pt-7 pb-12">
          {worksData.symphonies.map((work) => (
            <motion.article
              key={work.id}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              transition={{ duration: 0.5 }}
            >
              <div className="group w-full border-[1px] border-gray-200 dark:border-custom2 rounded-2xl p-5">
                <Link href={work.Link}>
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <Image
                      src={work.workPhoto}
                      alt={work.title}
                      width={1000}
                      height={1000}
                      className="w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-1 transition-all duration-500 ease-in-out cursor-pointer"
                    />
                    <div className="custom-cursor cursor-pointer">
                      <div className="absolute top-0 bg-gradient-to-r from-[#1C9CEA33] w-full h-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"></div>
                      <span className="text-[25px] text-dark absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out ">
                        {work.icon}
                      </span>
                    </div>
                  </div>
                </Link>
                <div className="text-center mt-5">
                  <span>
                    <Link href={work.Link}>
                      <h1 className="custom-cursor text-[18px] font-semibold text-light dark:text-dark inline-block group-hover:text-custom5 dark:group-hover:text-custom5 transition-colors duration-300 ease-in-out cursor-pointer">
                        {work.title}
                      </h1>
                    </Link>
                    <h3 className="text-[14px] text-light2 dark:text-dark2 mt-1">
                      {work.category}
                    </h3>
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </article>
      </AnimatePresence>
    </section>
  );
};

export default Symphonies;
