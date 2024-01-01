"use client";
import React from "react";
import { useMyComponentContext } from "@/context/ComponentContext";
import AllWorks from "./AllWorks";
import Symphonies from "./Symphonies";
import Panoramas from "./Panoramas";
import Innovations from "./Innovations";

const WorksLayout = () => {
  const { isComponentVisible } = useMyComponentContext();
  return (
    <section>
      {isComponentVisible === "All" ? (
        <AllWorks />
      ) : isComponentVisible === "Innovations" ? (
        <Innovations />
      ) : isComponentVisible === "Panoramas" ? (
        <Panoramas />
      ) : isComponentVisible === "Symphonies" && (
        <Symphonies />
      )}
    </section>
  );
};

export default WorksLayout;
