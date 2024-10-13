import { SearchInput } from "@/components/core/search-input/SearchInput";
import { MobileSearchPanel } from "@/components/layout/mobile-search-panel/MobileSearchPanel";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: MobileSearchPanel,
  title: "Layout/MobileSearchPanel",
  tags: ["autodocs"],
} satisfies Meta<typeof MobileSearchPanel>;

export default meta;
type MobileSearchStory = StoryObj<typeof meta>;

export const Default: MobileSearchStory = {
  args: {},
  render: (args) => {
    return (
      <div className="flex w-[300px] justify-end bg-background p-2">
        <MobileSearchPanel {...args}>
          <SearchInput id="search-menu" label="Search the menu" />
        </MobileSearchPanel>
      </div>
    );
  },
};
