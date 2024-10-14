import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { Input } from "@/components/core/input/Input";
import { Meta, StoryObj } from "@storybook/react";
import { fn } from "@storybook/test";

const meta = {
  component: AuthForm,
  title: "Core/AuthForm",
  tags: ["autodocs"],
} satisfies Meta<typeof AuthForm>;

export default meta;
type AuthFormStory = StoryObj<typeof meta>;

export const Default: AuthFormStory = {
  args: {
    useServerAction: false,
    onSubmit: fn(),
    title: "Sign In",
    submitButtonText: "Sign In",
  },
};

export const WithChildren: AuthFormStory = {
  args: {
    useServerAction: false,
    onSubmit: fn(),
    title: "Create Account",
    submitButtonText: "Create",
    children: <Input id="name" label="Name" />,
  },
};

export const Loading: AuthFormStory = {
  args: {
    useServerAction: false,
    isLoading: true,
    onSubmit: fn(),
    title: "Sign In",
    submitButtonText: "Sign In",
  },
};
