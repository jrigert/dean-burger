import { Alert } from "@/components/core/alert/Alert";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Alert,
  title: "Core/Alert",
  tags: ["autodocs"],
} satisfies Meta<typeof Alert>;

export default meta;
type AlertStory = StoryObj<typeof meta>;

export const Default: AlertStory = {
  args: {
    message: "Added Black Burger to cart",
  },
};
