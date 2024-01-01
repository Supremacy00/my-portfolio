'use client'
import React from 'react'
import { useContext } from 'react';
import { ThemeContext } from "@/context/theme-provider";

const BackgroundImage = () => {
    const { theme } = useContext(ThemeContext);

  return (
    <div className={`${theme === 'light' ? 'bg-light-background' : 'bg-dark-background'} fixed top-0 -z-10 bg-cover bg-no-repeat h-[100dvh] w-[100%]`}>     
    </div>
  )
}

export default BackgroundImage