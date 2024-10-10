import { centsToDollars } from "@/utils/currency";
import type { FunctionComponent } from "react";

export interface PriceProps {
  price: number;
}

export const Price: FunctionComponent<PriceProps> = (props) => {
  const { price } = props;

  return <>${centsToDollars(price)}</>;
};
