import { Button } from "@/components/core/button/Button";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Button,
  title: "Core/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["solid", "link"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type ButtonStory = StoryObj<typeof meta>;

export const SolidPrimary: ButtonStory = {
  args: {
    children: "Click Me!",
  },
};

export const Link: ButtonStory = {
  args: {
    children: "Click Me!",
    variant: "link",
  },
};

export const CustomClasses: ButtonStory = {
  args: {
    children: "Click Me!",
    className: "text-2xl p-6",
  },
};
