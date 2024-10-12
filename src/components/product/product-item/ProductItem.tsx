import { Heading } from "@/components/core/heading/Heading";
import { Price } from "@/components/core/price/Price";
import { Routes } from "@/constants/routes";
import { Product } from "@/types/product";
import Image from "next/image";
import Link from "next/link";
import type { FunctionComponent } from "react";

export interface ProductItemProps {
  product: Product;
}

export const ProductItem: FunctionComponent<ProductItemProps> = (props) => {
  const { product } = props;
  const { description, image, price, name, slug } = product;

  return (
    <Link
      href={`/${Routes.ProductDetails}/${slug}`}
      className="block w-full max-w-[400px] overflow-hidden rounded-xl shadow transition hover:scale-102 hover:shadow-lg sm:w-[250px]"
    >
      <div className="relative h-[250px] w-full sm:h-[200px]">
        {/*NOTE: setting empty alt tag here as we don't get this from the API and
      the description provides a good amount of detail*/}
        <Image
          src={image}
          alt=""
          fill
          className="object-cover"
          sizes={"(max-width: 639px) 300px, 250px"}
        />
      </div>

      <div className="p-4">
        <Heading tag="h2" tagStyle="h5" className="-mb-1">
          {name}
        </Heading>

        <strong className="font-teko text-slate-600">
          <Price price={price} />
        </strong>

        <p className="mt-4 text-sm">{description}</p>
      </div>
    </Link>
  );
};
