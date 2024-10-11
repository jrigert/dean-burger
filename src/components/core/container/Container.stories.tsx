import { Container } from "@/components/core/container/Container";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Container,
  title: "Core/Container",
  tags: ["autodocs"],
} satisfies Meta<typeof Container>;

export default meta;
type ContainerStory = StoryObj<typeof meta>;

export const Default: ContainerStory = {
  args: {},
  render: (args) => (
    <Container {...args} className="bg-red-200">
      <div className="bg-green-200 p-14">
        These are the inner contents of the container!
      </div>
    </Container>
  ),
};
