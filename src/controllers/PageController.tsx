import { getUserOrder } from "@/api/orders";
import { PageTemplate } from "@/components/layout/page-template/PageTemplate";
import type { FunctionComponent, PropsWithChildren } from "react";

export const PageController: FunctionComponent<PropsWithChildren> = async (
  props,
) => {
  const { children } = props;

  const order = await getUserOrder();

  return <PageTemplate order={order}>{children}</PageTemplate>;
};
