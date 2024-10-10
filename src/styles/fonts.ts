import { Open_Sans, Teko } from "next/font/google";

const teko = Teko({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-teko",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
});

export const fonts = {
  teko,
  openSans,
};

export const fontVariableClassNames = `${fonts.teko.variable} ${fonts.openSans.variable}`;
