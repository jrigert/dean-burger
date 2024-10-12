import { Badge } from "@/components/core/badge/Badge";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Badge,
  title: "Core/Badge",
  tags: ["autodocs"],
} satisfies Meta<typeof Badge>;

export default meta;
type BadgeStory = StoryObj<typeof meta>;

export const Default: BadgeStory = {
  args: {
    children: "4",
  },
};
