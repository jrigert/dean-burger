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

export const index = {
  teko,
  openSans,
};

export const fontVariableClassNames = `${index.teko.variable} ${index.openSans.variable}`;

// styles to be shared by Storybook and NextJS root elements
export const baseStyles = `${fontVariableClassNames} antialiased font-open-sans text-foreground`;
