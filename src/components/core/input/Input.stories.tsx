import { Input } from "@/components/core/input/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Input,
  title: "Core/Input",
  tags: ["autodocs"],
} satisfies Meta<typeof Input>;

export default meta;
type InputStory = StoryObj<typeof meta>;

export const Default: InputStory = {
  args: {},
};
