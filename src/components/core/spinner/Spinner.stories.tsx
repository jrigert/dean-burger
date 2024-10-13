import { Spinner } from "@/components/core/spinner/Spinner";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Spinner,
  title: "Core/Spinner",
  tags: ["autodocs"],
} satisfies Meta<typeof Spinner>;

export default meta;
type SpinnerStory = StoryObj<typeof meta>;

export const Default: SpinnerStory = {
  args: {},
};
