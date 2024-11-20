"use client";
import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "@/context/theme-provider";
import { RotateLoader } from "react-spinners";

const PageLoader = () => {
  const { theme } = useContext(ThemeContext);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Wait for theme to be set before stopping the loading animation
    if (theme !== undefined) {
      setLoading(false); // Stop loading once the theme is available
    }

    // Optional timeout to stop loading if theme takes too long
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 500); // Timeout after 500ms to prevent loading state from staying true forever

    return () => clearTimeout(timeout); // Cleanup timeout
  }, [theme]);

  // Loader will show as long as loading is true
  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#2C2C2C]">
        <RotateLoader color="#1C9CEA" size={13} />
      </div>
    );
  }

  // Return null when loading is false (once theme is set)
  return null;
};

export default PageLoader;
