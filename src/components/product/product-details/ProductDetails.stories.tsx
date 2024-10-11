import { ProductDetails } from "@/components/product/product-details/ProductDetails";
import { MOCK_PRODUCT } from "@/data/mocks/product";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: ProductDetails,
  title: "Product/ProductDetails",
  tags: ["autodocs"],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type ProductDetailsStory = StoryObj<typeof meta>;

export const Default: ProductDetailsStory = {
  args: {
    product: MOCK_PRODUCT,
  },
};
