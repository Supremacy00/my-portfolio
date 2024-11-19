import { Inter } from "next/font/google";
import "./globals.css";
import { MyContextProvider } from "@/context/ComponentContext";
import NavMobile from "@/components/navbar/NavMobile";
import { ThemeProvider } from "@/context/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export const metadata = {
  name: "format-detection",
  content: "telephone=no",
  title: "My Portfolio",
  description: "A frontend developer portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
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
