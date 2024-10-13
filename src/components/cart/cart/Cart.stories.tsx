import { Cart } from "@/components/cart/cart/Cart";
import {
  MOCK_ORDER_WITH_ITEMS,
  MOCK_PRODUCTS,
} from "@/constants/mocks/product";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Cart,
  title: "Cart/Cart",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <div className="max-w-3xl">
        <Story />
      </div>
    ),
  ],
} satisfies Meta<typeof Cart>;

export default meta;
type CartStory = StoryObj<typeof meta>;

export const Default: CartStory = {
  args: {
    order: MOCK_ORDER_WITH_ITEMS,
    products: MOCK_PRODUCTS,
  },
};
