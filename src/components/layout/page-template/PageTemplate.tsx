import { Breakpoint } from "@/components/core/breakpoint/Breakpoint";
import { Header } from "@/components/layout/header/Header";
import { OrderWithItems } from "@/types/order";
import type { FunctionComponent, PropsWithChildren } from "react";

export interface PageTemplateProps {
  order: OrderWithItems | null;
}

export const PageTemplate: FunctionComponent<
  PropsWithChildren<PageTemplateProps>
> = async (props) => {
  const { children, order } = props;

  const orderCount = order?.order_items?.length ?? 0;

  return (
    <>
      <Header orderCount={orderCount} />
      <Breakpoint />
      <main>{children}</main>
    </>
  );
};
