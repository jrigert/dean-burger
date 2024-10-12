import { ProductList } from "@/components/product/product-list/ProductList";
import { MOCK_PRODUCTS } from "@/constants/mocks/product";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ProductList,
  title: "Product/ProductList",
  tags: ["autodocs"],
} satisfies Meta<typeof ProductList>;

export default meta;
type ProductListStory = StoryObj<typeof meta>;

export const Default: ProductListStory = {
  args: {
    products: MOCK_PRODUCTS,
  },
};
