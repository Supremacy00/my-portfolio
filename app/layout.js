import { Inter } from "next/font/google";
import "./globals.css";
import Head from 'next/head';
import { MyContextProvider } from "@/context/ComponentContext";
import NavMobile from "@/components/navbar/NavMobile";
import { ThemeProvider } from "@/context/theme-provider";



const inter = Inter({ subsets: ["latin"] });

export const metadata = {
    meta: [
      { name: 'format-detection', content: 'telephone=no' },
    ],
  title: "My Portfolio",
  description: "A frontend developer portfolio",
};

<Head>
<meta name="chrome" content="nointentdetection" />
</Head>

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className} >
        <ThemeProvider>
          <MyContextProvider>
            <NavMobile />
            {children}
          </MyContextProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
