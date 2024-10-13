import { ProductDetails } from "@/components/product/product-details/ProductDetails";
import { MOCK_PRODUCT } from "@/constants/mocks/product";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  component: ProductDetails,
  title: "Product/ProductDetails",
  tags: ["autodocs"],
} satisfies Meta<typeof ProductDetails>;

export default meta;
type ProductDetailsStory = StoryObj<typeof meta>;

export const Default: ProductDetailsStory = {
  args: {
    isLoading: false,
    onAddToCart: fn(),
    product: MOCK_PRODUCT,
  },
};

export const Loading: ProductDetailsStory = {
  args: {
    isLoading: true,
    onAddToCart: fn(),
    product: MOCK_PRODUCT,
  },
};
