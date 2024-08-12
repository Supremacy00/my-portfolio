"use client";
import React, { useState, useRef } from "react";
import { FaUserCircle } from "react-icons/fa";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import { TbSquareArrowRightFilled } from "react-icons/tb";
import useCloseOnOutsideClick from "../useCloseOnOutsideClick";

const Contact = () => {
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [isNameActive, setIsNameActive] = useState(false);
  const [isTextareaActive, setIsTextareaActive] = useState(false);

  const emailRef = useRef();
  const nameRef = useRef();
  const textareaRef = useRef();

  useCloseOnOutsideClick(
    isEmailActive || isNameActive || isTextareaActive,
    () => {
      setIsEmailActive(false);
      setIsNameActive(false);
      setIsTextareaActive(false);
    },
    emailRef,
    nameRef,
    textareaRef
  );

  const handleInputClick = (inputType) => {
    setIsEmailActive(inputType === "email");
    setIsNameActive(inputType === "name");
    setIsTextareaActive(inputType === "textarea");
  };

  return (
    <section className="font-IBM mx-auto max-w-[650px] mt-5 pb-5 lg:mt-0 lg:max-w-full ">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-[650px]">
        <div className="bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-auto ">
          <div className="hidden lg:block lg:sticky top-0 right-0 w-full bg-white dark:bg-secondary py-2" />
          <div>
            <div>
              <span className="flex items-center gap-5 p-7">
                <h1 className="text-[20px] text-light dark:text-dark font-semibold">
                  <span className="text-custom5">C</span>ontact
                </h1>
                <div className="w-40 h-[2px] bg-custom5" />
              </span>
              <div className="w-full h-[1px] bg-gray-200 dark:bg-custom2" />
            </div>
            <p className="text-base text-light2 dark:text-dark2 leading-7 py-5 px-7">{`🌟 Hello there! 🌟 Thank you for stopping by. I'm thrilled to connect with you. Whether you have a question, a project idea, or just want to say hello, feel free to drop me a message. I'm here and excited to hear from you! 🚀✉️🌟`}</p>
            <form className="p-7">
              <div className="p-7 bg-custom1 dark:bg-custom2 rounded-2xl">
                <div className="flex items-center" ref={nameRef}>
                  <label
                    className={`${
                      isNameActive
                        ? "bg-custom5 text-secondary dark:text-dark"
                        : "bg-dark dark:bg-secondary text-light2 dark:text-dark2"
                    } text-[18px] p-[17px] rounded-l-lg transition-all duration-500 ease-in-out`}
                  >
                    <FaUserCircle />
                  </label>
                  <span
                    className="w-full block"
                    onClick={() => handleInputClick("name")}
                  >
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Name"
                      className="w-full py-[15px] text-[15px] placeholder:text-[13px] text-light dark:text-dark placeholder-light2 dark:placeholder-dark2 px-4 rounded-r-lg rounded-l-none bg-custom14 dark:bg-custom13 outline-none"
                    />
                  </span>
                </div>
                <div className="flex items-center mt-8" ref={emailRef}>
                  <label
                    className={`${
                      isEmailActive
                        ? "bg-custom5 text-secondary dark:text-dark"
                        : "bg-dark dark:bg-secondary text-light2 dark:text-dark2"
                    } text-[20px] p-[16px] rounded-l-lg transition-all duration-500 ease-in-out`}
                  >
                    <MdOutlineAlternateEmail />
                  </label>
                  <span
                    className="w-full block"
                    onClick={() => handleInputClick("email")}
                  >
                    <input
                      type="text"
                      name=""
                      id=""
                      placeholder="Email"
                      className="w-full py-[15px] text-[15px] placeholder:text-[13px] text-light dark:text-dark placeholder-light2 dark:placeholder-dark2 px-4 rounded-r-lg rounded-l-none bg-custom14 dark:bg-custom13 outline-none"
                    />
                  </span>
                </div>
                <div className="flex mt-8" ref={textareaRef}>
                  <label
                    className={`${
                      isTextareaActive
                        ? "bg-custom5 text-secondary dark:text-dark"
                        : "bg-dark dark:bg-secondary text-light2 dark:text-dark2"
                    } text-[20px] p-[16.3px] rounded-l-lg transition-all duration-500 ease-in-out`}
                  >
                    <HiOutlineMail />
                  </label>
                  <textarea
                    name=""
                    id=""
                    placeholder="Message"
                    className="w-full p-4 h-36 text-[15px] placeholder:text-[13px] text-light dark:text-dark placeholder-light2 dark:placeholder-dark2 rounded-r-lg rounded-l-none bg-custom14 dark:bg-custom13 outline-none resize-none"
                    onClick={() => handleInputClick("textarea")}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="custom-cursor group text-base inline-block text-light dark:text-dark my-[22px]"
              >
                <span className="flex items-center gap-2 m-2 group-hover:text-custom5 ">
                  <h3 className="text-[13px] font-semibold uppercase">
                    Send Message
                  </h3>
                  <TbSquareArrowRightFilled className="group-hover:ml-1 group-hover:text-[20px] transition-all duration-300 ease-in-out" />
                </span>
              </button>
            </form>
          </div>
          <div className="hidden lg:block lg:sticky bottom-0 right-0 w-full bg-white dark:bg-secondary py-2" />
        </div>
      </div>
    </section>
  );
};

export default Contact;
