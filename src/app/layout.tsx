import { getUserOrder } from "@/api/orders";
import { PageTemplate } from "@/components/layout/page-template/PageTemplate";
import { AlertProvider } from "@/providers/AlertProvider";
import { baseStyles } from "@/styles";
import { classNames } from "@/utils/style";
import type { Metadata } from "next";
import "../styles/globals.css";
import { getServerSession } from "@/api/auth";
import { ThemeProvider } from "next-themes";
import type { ReactNode } from "react";

// recommended NextJS config: https://docs.fontawesome.com/web/use-with/react/use-with#nextjs
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

export const metadata: Metadata = {
  title: "Dean Burger",
  description: "The best burgers in town!",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  const order = await getUserOrder();
  const session = await getServerSession();
  const user = session?.user;

  return (
    <html lang="en" suppressHydrationWarning>
      <body className={classNames(baseStyles, "bg-background")}>
        <ThemeProvider attribute="class">
          <AlertProvider>
            <PageTemplate order={order} user={user}>
              {children}
            </PageTemplate>
          </AlertProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
