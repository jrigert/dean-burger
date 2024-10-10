import { Price } from "@/components/core/price/Price";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Price,
  title: "Core/Price",
  tags: ["autodocs"],
} satisfies Meta<typeof Price>;

export default meta;
type PriceStory = StoryObj<typeof meta>;

export const Default: PriceStory = {
  args: {
    price: 1299,
  },
};
