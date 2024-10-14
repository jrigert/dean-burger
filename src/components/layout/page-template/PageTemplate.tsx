import { Alert } from "@/components/core/alert/Alert";
import { Breakpoint } from "@/components/core/breakpoint/Breakpoint";
import { Header } from "@/components/layout/header/Header";
import { SessionUser } from "@/types/next-auth";
import { OrderWithItems } from "@/types/order";
import type { FunctionComponent, PropsWithChildren } from "react";

export interface PageTemplateProps {
  order: OrderWithItems | null;
  user: SessionUser | undefined;
}

export const PageTemplate: FunctionComponent<
  PropsWithChildren<PageTemplateProps>
> = async (props) => {
  const { children, order, user } = props;

  const orderCount = order?.order_items?.length ?? 0;

  return (
    <>
      <Header orderCount={orderCount} user={user} />
      <Alert />
      <Breakpoint />
      <main>{children}</main>
    </>
  );
};
