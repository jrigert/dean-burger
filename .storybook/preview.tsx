import { fontVariableClassNames } from "@/styles/fonts";
import type { Preview } from "@storybook/react";
import "../src/styles/globals.css";

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <main className={`${fontVariableClassNames} antialiased font-open-sans`}>
        <Story />
      </main>
    ),
  ],
};

export default preview;
