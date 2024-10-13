import { CartItem } from "@/components/cart/cart-item/CartItem";
import { MOCK_PRODUCT } from "@/constants/mocks/product";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  component: CartItem,
  title: "Cart/CartItem",
  tags: ["autodocs"],
  decorators: (Story) => (
    <div className="max-w-2xl">
      <Story />
    </div>
  ),
} satisfies Meta<typeof CartItem>;

export default meta;
type CartItemStory = StoryObj<typeof meta>;

export const Default: CartItemStory = {
  args: {
    onDelete: fn(),
    productOrderItem: {
      ...MOCK_PRODUCT,
      quantity: 1,
      orderItemId: 1,
    },
  },
};
