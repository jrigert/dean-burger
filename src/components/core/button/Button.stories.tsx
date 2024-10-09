import { Button } from "@/components/core/button/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  title: "Core/Button",
  tags: ["autodocs"],
} satisfies Meta<typeof Button>;

export default meta;
type ButtonStory = StoryObj<typeof meta>;

export const Primary: ButtonStory = {
  args: {
    children: "Click Me!",
  },
};

export const CustomClasses: ButtonStory = {
  args: {
    children: "Click Me!",
    className: "text-2xl p-6",
  },
};
