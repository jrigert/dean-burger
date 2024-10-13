"use client";

import { Button } from "@/components/core/button/Button";
import { Heading } from "@/components/core/heading/Heading";
import { Price } from "@/components/core/price/Price";
import { QuantityInput } from "@/components/core/quantity-input/QuantityInput";
import { ProductOrderItem } from "@/hooks/useCart";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

export interface CartItemProps {
  onDelete: (orderItemId: number) => void;
  productOrderItem: ProductOrderItem;
}

export const CartItem: FunctionComponent<CartItemProps> = (props) => {
  const { productOrderItem, onDelete } = props;
  const {
    image,
    name,
    price,
    quantity: originalQuantity,
    orderItemId,
  } = productOrderItem;

  const [quantity, setQuantity] = useState(originalQuantity);
  const totalPrice = price * quantity;

  return (
    <div className="flex justify-between border-y border-slate-200 py-4 align-middle">
      <div className="flex items-center gap-4">
        <Image
          src={image}
          alt=""
          width={100}
          height={100}
          className="h-[100px] w-[100px] rounded-xl object-cover"
        />

        <div>
          <Heading tag="h2" tagStyle="h3">
            {name}
          </Heading>

          <QuantityInput
            accessibilityItemName={name}
            onChange={setQuantity}
            value={quantity}
            size="sm"
          />
        </div>
      </div>

      <div className="flex flex-col items-end justify-center">
        <strong className="font-teko text-2xl text-slate-600">
          <Price price={totalPrice} />
        </strong>

        <Button
          variant="icon"
          color="danger"
          icon={faTrash}
          aria-label={`Remove ${name} from your order`}
          onClick={() => onDelete(orderItemId)}
        />
      </div>
    </div>
  );
};
