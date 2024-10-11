import { BackButton } from "@/components/core/back-button/BackButton";
import { Button } from "@/components/core/button/Button";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { Price } from "@/components/core/price/Price";
import { Product } from "@/types/product";
import Image from "next/image";
import type { FunctionComponent } from "react";

export interface ProductDetailsProps {
  product: Product;
}

export const ProductDetails: FunctionComponent<ProductDetailsProps> = (
  props,
) => {
  const { product } = props;
  const { calorie, description, image, price, name } = product;

  return (
    <div className="w-full sm:max-w-[600px]">
      <Container className="mb-4">
        <BackButton text="Back" />
      </Container>

      <Container fullBleedMobile>
        <div className="relative h-[350px] w-full overflow-hidden">
          <Image
            src={image}
            alt=""
            fill
            className="object-cover sm:rounded-xl"
            sizes={"600px"}
          />
        </div>
      </Container>

      <Container>
        <div className="pt-4">
          <Heading tag="h1">{name}</Heading>

          <strong className="font-teko text-3xl text-primary">
            <Price price={price} />
          </strong>

          <p className="mt-5">{description}</p>

          <p className="mt-4 text-sm font-semibold">{calorie} Calories</p>
        </div>

        <div className="mt-6 flex justify-center">
          <Button>Add To Cart</Button>
        </div>
      </Container>
    </div>
  );
};
