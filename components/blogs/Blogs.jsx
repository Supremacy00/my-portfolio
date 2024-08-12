import React from "react";
import { blogData } from "../data";
import Image from "next/image";

const Blogs = () => {
  return (
    <section className="font-IBM mx-auto max-w-[650px] mt-5 lg:mt-0  lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-[650px]">
        <div className="bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-auto ">
          <div className="hidden lg:block lg:sticky top-0 right-0 w-full bg-white dark:bg-secondary py-2" />
          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                  <span className="text-custom5">B</span>log
                </h1>
                <div className="w-40 h-[2px] bg-custom5" />
              </span>
              <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
            </div>
            <article className="grid grid-cols-1 gap-5 lg:grid-cols-2 px-7 pt-7 pb-12">
              {blogData.map((blog) => (
                <article key={blog.id}>
                  <div className="group w-full border-[1px] border-gray-200 dark:border-custom2 rounded-2xl p-5">
                    <div className="w-full aspect-200/120 rounded-lg overflow-hidden lg:h-[180px]">
                      <Image
                        src={blog.blogPhoto}
                        alt={blog.title}
                        width={1000}
                        height={1000}
                        className="custom-cursor w-full h-full object-cover group-hover:scale-110 group-hover:-rotate-2 transition-all duration-500 ease-in-out cursor-pointer"
                      />
                    </div>
                    <div className="mt-5 lg:text-center">
                      <h1 className="custom-cursor text-[18px] font-semibold text-light dark:text-dark inline-block group-hover:text-custom5 dark:group-hover:text-custom5 transition-colors duration-300 ease-in-out cursor-pointer">
                        {blog.title}
                      </h1>
                      <p className="text-base mt-1.5 text-light2 dark:text-dark2 leading-7 mb-5 line-clamp-3">
                        {blog.description}
                      </p>
                      <span className="flex justify-between items-center flex-wrap text-[14px] text-light dark:text-dark">
                        <h3 className=" border-[1px] border-custom5 p-[3px]">
                          {blog.date}
                        </h3>
                        <h3 className="text-custom5">{blog.category}</h3>
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </article>
          </div>
          <div className="hidden lg:block lg:sticky bottom-0 right-0 w-full bg-white dark:bg-secondary py-2" />
        </div>
      </div>
    </section>
  );
};

export default Blogs;
