import { Alert } from "@/components/core/alert/Alert";
import { Button } from "@/components/core/button/Button";
import { useAlert } from "@/hooks/useAlert";
import { AlertProvider } from "@/providers/AlertProvider";
import { Meta, StoryObj } from "@storybook/react";

const meta = {
  component: Alert,
  title: "Core/Alert",
  tags: ["autodocs"],
  decorators: [
    (Story) => (
      <AlertProvider>
        <Story />
      </AlertProvider>
    ),
  ],
  render: (args) => {
    const { setAlert } = useAlert();

    return (
      <div>
        <Alert className={"relative top-0"} {...args} />

        <div className="mt-6 flex gap-6">
          <Button
            onClick={() =>
              setAlert({ message: "This is a success alert", type: "success" })
            }
          >
            Trigger Success Alert
          </Button>
          <Button
            onClick={() =>
              setAlert({ message: "This is an error alert", type: "danger" })
            }
          >
            Trigger Error Alert
          </Button>
        </div>
      </div>
    );
  },
} satisfies Meta<typeof Alert>;

export default meta;
type AlertStory = StoryObj<typeof meta>;

export const Default: AlertStory = {
  args: {},
};
