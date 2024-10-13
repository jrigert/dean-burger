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
  args: {
    onDelete: fn(),
    onUpdateQuantity: fn(),
    productOrderItem: {
      ...MOCK_PRODUCT,
      quantity: 1,
      orderItemId: 1,
    },
  },
} satisfies Meta<typeof CartItem>;

export default meta;
type CartItemStory = StoryObj<typeof meta>;

export const Default: CartItemStory = {
  args: {},
};

export const Busy: CartItemStory = {
  args: {
    isBusy: true,
  },
};
