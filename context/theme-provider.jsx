'use client'
import { createContext, useState, useEffect } from 'react';

const ThemeContext = createContext();

const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(userPrefersDark ? 'dark' : 'light');
    }
  }, []);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('dark', 'light');
      document.documentElement.classList.add(theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export { ThemeProvider, ThemeContext };
