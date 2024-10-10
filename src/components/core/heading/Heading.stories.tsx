import { Heading, VALID_HEADINGS } from "@/components/core/heading/Heading";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Heading,
  title: "Core/Heading",
  tags: ["autodocs"],
  argTypes: {
    tag: {
      options: VALID_HEADINGS,
      control: { type: "radio" },
    },
    tagStyle: {
      options: VALID_HEADINGS,
      control: { type: "radio" },
    },
  },
} satisfies Meta<typeof Heading>;

export default meta;
type HeadingStory = StoryObj<typeof meta>;

export const Default: HeadingStory = {
  render: (args) => (
    <div>
      <Heading {...args} />
      <p>
        Heading has a <code>tag</code> and a <code>tagStyled</code> prop.{" "}
        <code>tag</code> determines the actual rendered HTML tag/element.{" "}
        <code>tagStyle</code> determines the visual appearance of the element.{" "}
        <code>tagStyle</code> defaults to <code>tag</code> if not specified.
      </p>
    </div>
  ),
  args: {
    tag: "h1",
    children: "This is a heading",
  },
};
