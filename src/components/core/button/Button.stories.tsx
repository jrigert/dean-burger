import { Button } from "@/components/core/button/Button";
import { Meta, StoryObj } from "@storybook/react";
import { faPlus, faCartShopping } from "@fortawesome/free-solid-svg-icons";

const meta = {
  component: Button,
  title: "Core/Button",
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "radio" },
      options: ["solid", "link", "icon", "icon-solid"],
    },
    color: {
      control: { type: "radio" },
      options: ["primary", "danger"],
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

export const SolidDanger: ButtonStory = {
  args: {
    children: "Careful!",
    color: "danger",
  },
};

export const Loading: ButtonStory = {
  args: {
    children: "Click Me!",
    isLoading: true,
  },
};

export const Link: ButtonStory = {
  args: {
    children: "Click Me!",
    variant: "link",
  },
};

export const Icon: ButtonStory = {
  args: {
    variant: "icon",
    icon: faCartShopping,
  },
};

export const IconSolid: ButtonStory = {
  args: {
    variant: "icon-solid",
    icon: faPlus,
  },
};

export const CustomClasses: ButtonStory = {
  args: {
    children: "Click Me!",
    className: "text-2xl p-6",
  },
};
