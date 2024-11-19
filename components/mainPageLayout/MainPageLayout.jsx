import React from "react";
import LeftSideBar from "../navbar/LeftSideBar";
import ContentLayout from "../ContentLayout";
import RightSideBar from "../navbar/RightSideBar";

const MainPageLayout = () => {
  return (
    <main className="relative lg:flex lg:justify-between lg:item-center lg:gap-3 lg:mx-auto lg:max-w-[1300px] lg:px-5 ">
      <section className="lg:block lg:flex-shrink lg:justify-center lg:items-center lg:w-[38%]">
        <LeftSideBar />
      </section>
      <section className="hidden lg:flex lg:flex-shrink lg:overflow-y-auto justify-center items-center lg:min-h-screen lg:w-[55%]">
        <ContentLayout />
      </section>
      <section className="hidden lg:flex lg:flex-shrink-0 justify-center items-center lg:min-h-screen lg:w-[7%]">
        <RightSideBar />
      </section>
    </main>
  );
};

export default MainPageLayout;
