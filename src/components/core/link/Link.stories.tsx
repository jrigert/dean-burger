import { Link } from "@/components/core/link/Link";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Link,
  title: "Core/Link",
  tags: ["autodocs"],
} satisfies Meta<typeof Link>;

export default meta;
type LinkStory = StoryObj<typeof meta>;

export const Default: LinkStory = {
  args: {
    href: "/",
    children: "This is a link",
  },
};
