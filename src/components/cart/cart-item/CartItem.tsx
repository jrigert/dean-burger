"use client";

import { Button } from "@/components/core/button/Button";
import { Heading } from "@/components/core/heading/Heading";
import { Price } from "@/components/core/price/Price";
import { QuantityInput } from "@/components/core/quantity-input/QuantityInput";
import { Spinner } from "@/components/core/spinner/Spinner";
import { ProductOrderItem } from "@/hooks/useCart";
import { classNames } from "@/utils/style";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

export interface CartItemProps {
  isBusy?: boolean;
  onDelete: (orderItemId: number) => void;
  onUpdateQuantity: (orderItemId: number, quantity: number) => void;
  productOrderItem: ProductOrderItem;
}

export const CartItem: FunctionComponent<CartItemProps> = (props) => {
  const { isBusy, productOrderItem, onDelete, onUpdateQuantity } = props;
  const {
    image,
    name,
    price,
    quantity: originalQuantity,
    orderItemId,
  } = productOrderItem;

  const [quantity, setQuantity] = useState(originalQuantity);
  const totalPrice = price * quantity;

  const handleDelete = () => {
    if (isBusy) {
      return;
    }

    onDelete(orderItemId);
  };

  const handleQuantityChange = (newQuantity: number) => {
    if (isBusy) {
      return;
    }

    setQuantity(newQuantity);
    onUpdateQuantity(orderItemId, newQuantity);
  };

  return (
    <div className="relative">
      <div
        className={classNames(
          "flex justify-between gap-6 border-y border-slate-300 py-4 align-middle",
          isBusy && "opacity-50",
        )}
      >
        <div className="flex items-center gap-4">
          <Image
            src={image}
            alt=""
            width={100}
            height={100}
            className="h-[80px] w-[80px] rounded-xl object-cover sm:h-[100px] sm:w-[100px]"
          />

          <div>
            <Heading
              tag="h2"
              tagStyle="h3"
              className="max-sm:text-xl max-sm:leading-5"
            >
              {name}
            </Heading>

            <QuantityInput
              accessibilityItemName={name}
              onChange={handleQuantityChange}
              value={quantity}
              size="sm"
            />
          </div>
        </div>

        <div className="flex flex-col items-end justify-center gap-2">
          <strong className="font-teko text-2xl text-slate-600">
            <Price price={totalPrice} />
          </strong>

          <Button
            variant="icon"
            color="danger"
            icon={faTrash}
            aria-label={`Remove ${name} from your order`}
            onClick={handleDelete}
          />
        </div>
      </div>
      {isBusy ? (
        <div className="absolute -left-4 top-0 flex h-full w-[107%] items-center justify-center bg-slate-500/20 sm:w-[105%]">
          <Spinner className="text-4xl text-primary" />
        </div>
      ) : null}
    </div>
  );
};
