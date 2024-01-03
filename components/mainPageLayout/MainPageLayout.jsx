import React from "react";
import LeftSideBar from "../navbar/LeftSideBar";
import ContentLayout from "../ContentLayout";
import RightSideBar from "../navbar/RightSideBar";

const MainPageLayout = () => {
  return (
    <main className="lg:flex gap-3 lg:fixed right-0 left-0 top-0 bottom-0 z-40 justify-between item-center lg:mx-auto lg:max-w-[1300px] lg:px-5 ">
      <section className="lg:block lg:flex-shrink justify-center items-center lg:h-[100dvh] lg:w-[38%]">
        <LeftSideBar />
      </section>
      <section className="hidden lg:flex lg:flex-shrink lg:overflow-y-auto  justify-center items-center lg:h-[100dvh] lg:w-[55%]">
        <ContentLayout />
      </section>
      <section className="hidden lg:flex lg:flex-shrink-0 justify-center items-center lg:h-[100dvh] lg:w-[7%]">
        <RightSideBar />
      </section>
    </main>
  );
};

export default MainPageLayout;
