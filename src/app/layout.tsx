import { PageTemplate } from "@/components/layout/page-template/PageTemplate";
import { baseStyles } from "@/styles";
import { classNames } from "@/utils/style";
import type { Metadata } from "next";
import "../styles/globals.css";
import type { ReactNode } from "react";

// recommended NextJS config: https://docs.fontawesome.com/web/use-with/react/use-with#nextjs
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Dean Burger",
  description: "The best burgers in town!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={classNames(baseStyles, "bg-background")}>
        <PageTemplate>{children}</PageTemplate>
      </body>
    </html>
  );
}
