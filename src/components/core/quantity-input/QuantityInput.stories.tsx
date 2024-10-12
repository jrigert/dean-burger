import { QuantityInput } from "@/components/core/quantity-input/QuantityInput";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";
import { useState } from "react";

const meta = {
  component: QuantityInput,
  title: "Core/QuantityInput",
  tags: ["autodocs"],
  args: { accessibilityItemName: "Big Burger", onChange: fn() },
  render: (args) => {
    const { value: initialValue, onChange, ...props } = args;
    const [value, setValue] = useState(initialValue);

    const handleChange = (newValue: number) => {
      setValue(newValue);
      onChange(newValue);
    };

    return <QuantityInput onChange={handleChange} value={value} {...props} />;
  },
} satisfies Meta<typeof QuantityInput>;

export default meta;
type QuantityInputStory = StoryObj<typeof meta>;

export const Default: QuantityInputStory = {
  args: {
    value: 1,
    onChange: fn(),
    max: 10,
  },
};

export const Small: QuantityInputStory = {
  args: {
    value: 1,
    onChange: fn(),
    max: 10,
    size: "sm",
  },
};

export const CustomMinMax: QuantityInputStory = {
  args: {
    value: 5,
    onChange: fn(),
    min: 3,
    max: 8,
  },
};
