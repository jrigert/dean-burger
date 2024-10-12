import { ProductItem } from "@/components/product/product-item/ProductItem";
import { MOCK_PRODUCT } from "@/constants/mocks/product";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ProductItem,
  title: "Product/ProductItem",
  tags: ["autodocs"],
} satisfies Meta<typeof ProductItem>;

export default meta;
type ProductItemStory = StoryObj<typeof meta>;

export const Default: ProductItemStory = {
  args: {
    product: MOCK_PRODUCT,
  },
};
