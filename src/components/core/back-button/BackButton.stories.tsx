import { BackButton } from "@/components/core/back-button/BackButton";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: BackButton,
  title: "Core/BackButton",
  tags: ["autodocs"],
} satisfies Meta<typeof BackButton>;

export default meta;
type BackButtonStory = StoryObj<typeof meta>;

export const Default: BackButtonStory = {
  args: {},
};

export const WithCustomText: BackButtonStory = {
  args: {
    text: "Reverse!",
  },
};
