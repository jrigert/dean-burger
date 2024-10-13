"use client";

import { BackButton } from "@/components/core/back-button/BackButton";
import { Button } from "@/components/core/button/Button";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { Price } from "@/components/core/price/Price";
import { QuantityInput } from "@/components/core/quantity-input/QuantityInput";
import { Product } from "@/types/product";
import Image from "next/image";
import { FunctionComponent, useState } from "react";

export interface ProductDetailsProps {
  isLoading: boolean;
  onAddToCart: (product: Product, quantity: number) => void;
  product: Product;
}

export const ProductDetails: FunctionComponent<ProductDetailsProps> = (
  props,
) => {
  const { isLoading, onAddToCart, product } = props;
  const { calorie, description, image, price, name } = product;

  const [quantity, setQuantity] = useState(1);

  return (
    <Container
      className="flex flex-col items-center justify-center pb-6 sm:pb-0 md:flex-row"
      fullBleedMobile
    >
      <div className="flex w-full flex-col-reverse sm:mt-6 md:-mt-6 md:w-auto md:flex-col">
        <div className="mt-2 px-6 sm:mt-4 md:mt-4 md:px-0">
          <BackButton text="Back" />
        </div>

        <div className="relative h-[225px] w-full overflow-hidden sm:h-[300px] md:w-[300px] lg:h-[500px] lg:w-[500px]">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover sm:rounded-xl"
            sizes={"(max-width: 1023px) 300px, 500px"}
            priority
          />
        </div>
      </div>

      <div className="px-6 pt-1 sm:pt-4 md:max-w-[500px] md:px-12">
        <Heading tag="h1">{name}</Heading>

        <strong className="font-teko text-3xl text-slate-600">
          <Price price={price} />
        </strong>

        <p className="mt-3 text-left sm:mt-5">{description}</p>

        <p className="mt-4 text-sm font-semibold">{calorie} Calories</p>

        <div className="mt-8 flex items-center gap-10 sm:mt-12">
          <Button
            onClick={() => onAddToCart(product, quantity)}
            isLoading={isLoading}
          >
            Add To Cart
          </Button>

          <QuantityInput
            accessibilityItemName={name}
            onChange={setQuantity}
            value={quantity}
          />
        </div>
      </div>
    </Container>
  );
};
