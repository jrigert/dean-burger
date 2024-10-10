import { Heading } from "@/components/core/heading/Heading";
import { Price } from "@/components/core/price/Price";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

export interface ProductListItemProps {
  description: string;
  image: string;
  price: number;
  name: string;
  slug: string;
}

export const ProductListItem: FunctionComponent<ProductListItemProps> = (
  props,
) => {
  const { description, image, price, name, slug } = props;

  return (
    <Link href={slug}>
      {/*NOTE: setting empty alt tag here as we don't get this from the API and
      the description provides a good amount of detail*/}
      <Image src={image} alt="" />

      <Heading tag="h2" tagStyle="h5">
        {name}
      </Heading>

      <p>
        <Price price={price} />
      </p>

      <p>{description}</p>
    </Link>
  );
};
