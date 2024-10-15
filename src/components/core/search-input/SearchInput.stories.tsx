import { SearchInput } from "@/components/core/search-input/SearchInput";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: SearchInput,
  title: "Core/SearchInput",
  tags: ["autodocs"],
} satisfies Meta<typeof SearchInput>;

export default meta;
type SearchInputStory = StoryObj<typeof meta>;

export const Default: SearchInputStory = {
  args: {
    buttonAccessibilityLabel: "Search menu",
    id: "search",
    label: "Search the menu",
    placeholder: "Search the menu...",
  },
};
