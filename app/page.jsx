import React from "react";
import MainPageLayout from "@/components/mainPageLayout/MainPageLayout";
import MobileLayout from "@/components/mobileLayout/MobileLayout";
import CustomCursor from "@/components/custom/CustomCursor";
import MatrixCanvasEffect from "@/utils/matrixCanvasEffect";
import PageLoader from "@/components/loader/PageLoader";

const MainPage = () => {
  return (
    <>
      <PageLoader />
      <main>
        <CustomCursor />
        <MainPageLayout />
        <MobileLayout />
        <MatrixCanvasEffect />
      </main>
    </>
  );
};

export default MainPage;
