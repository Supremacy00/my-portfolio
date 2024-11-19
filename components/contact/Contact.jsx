"use client";
import React from "react";
import ContactForm from "./ContactForm";
import { Toaster } from "sonner";

const Contact = () => {
  return (
    <section className="font-IBM mx-auto max-w-[650px] my-5 lg:mt-0 lg:max-w-full">
      <div className="max-w-full bg-white dark:bg-secondary rounded-[30px] overflow-y-hidden lg:h-[650px]">
        <div className="bg-white dark:bg-secondary rounded-[30px] lg:h-[650px] lg:overflow-y-auto">
          <div className="top-0 right-0 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
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
            <p className="text-base leading-7 text-light2 dark:text-dark2 p-7">{`🌟 Hello there! 🌟 Thank you for stopping by. I'm thrilled to connect with you. Whether you have a question, a project idea, or just want to say hello, feel free to drop me a message. I'm here and excited to hear from you! 🚀✉️🌟`}</p>
            <ContactForm />
          </div>
          <div className="bottom-0 right-0 hidden w-full py-2 bg-white lg:block lg:sticky dark:bg-secondary" />
        </div>
        <Toaster position="top-center" />
      </div>
    </section>
  );
};

export default Contact;
