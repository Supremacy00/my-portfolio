import React from "react";
import BackgroundImage from "@/components/BackgroundImage";
import MainPageLayout from "@/components/mainPageLayout/MainPageLayout";
import MobileLayout from "@/components/mobileLayout/MobileLayout";
import CustomCursor from "@/components/CustomCursor";

const MainPage = () => {
  return (
    <main>
      <MainPageLayout />
      <MobileLayout />
      <BackgroundImage />
      <CustomCursor />
    </main>
  );
};

export default MainPage;
