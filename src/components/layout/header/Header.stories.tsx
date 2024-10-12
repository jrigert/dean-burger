import { Header } from "@/components/layout/header/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
  title: "Layout/Header",
  tags: ["autodocs"],
} satisfies Meta<typeof Header>;

export default meta;
type HeaderStory = StoryObj<typeof meta>;

export const Default: HeaderStory = {
  args: {
    // remove the fixed positioning
    className: "relative",
    orderCount: 0,
  },
};

export const WithOrderCount: HeaderStory = {
  args: {
    // remove the fixed positioning
    className: "relative",
    orderCount: 4,
  },
};
