import { Header } from "@/components/layout/header/Header";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Header,
  title: "Layout/Header",
  tags: ["autodocs"],
  args: {
    // remove the fixed positioning
    className: "relative",
  },
} satisfies Meta<typeof Header>;

export default meta;
type HeaderStory = StoryObj<typeof meta>;

export const Default: HeaderStory = {
  args: {
    orderCount: 0,
    user: undefined,
  },
};

export const WithOrderCount: HeaderStory = {
  args: {
    orderCount: 4,
    user: undefined,
  },
};

export const LoggedIn: HeaderStory = {
  args: {
    orderCount: 4,
    user: {
      id: 1,
      firstName: "Jon",
    },
  },
};
