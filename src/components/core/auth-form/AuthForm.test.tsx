import { AuthForm } from "@/components/core/auth-form/AuthForm";
import { ComponentProps, FormEvent } from "react";
import { expect, test, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const defaultProps = {
  useServerAction: false,
  title: "Sign In",
  onSubmit: vi.fn(),
  submitButtonText: "Submit Form",
} as const satisfies Partial<ComponentProps<typeof AuthForm>>;

const heading = () => screen.getByRole("heading");
const submitButton = () => screen.getByRole("button");
const emailInput = () => screen.getByLabelText("Email Address");
const passwordInput = () => screen.getByLabelText("Password");

test("renders with correct title and button", () => {
  render(<AuthForm {...defaultProps} />);

  expect(heading().textContent).toBe("Sign In");
  expect(submitButton().textContent).toBe("Submit Form");
  expect(emailInput()).toBeInTheDocument();
  expect(passwordInput()).toBeInTheDocument();
});

test("renders with custom children and custom footer", () => {
  render(
    <AuthForm
      {...defaultProps}
      footerChildren={<div>This is a custom footer child</div>}
    >
      <div>This is a custom child</div>
    </AuthForm>,
  );

  expect(heading().textContent).toBe("Sign In");
  expect(submitButton().textContent).toBe("Submit Form");
  expect(emailInput()).toBeInTheDocument();
  expect(passwordInput()).toBeInTheDocument();
  expect(screen.getByText("This is a custom child")).toBeInTheDocument();
  expect(screen.getByText("This is a custom footer child")).toBeInTheDocument();
});

test("renders a loader", () => {
  render(<AuthForm {...defaultProps} isLoading />);

  expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

test("calls onSubmit when submitted while valid", async () => {
  const user = userEvent.setup();
  const handleSubmit = vi.fn(async (e: FormEvent) => {
    e.preventDefault();
  });

  render(<AuthForm {...defaultProps} onSubmit={handleSubmit} />);

  await user.type(emailInput(), "jontest@test.com");
  await user.type(passwordInput(), "ABCD1234");
  await user.click(submitButton());

  expect(handleSubmit).toHaveBeenCalledOnce();
});

test("prevents calling onSubmit when attempting submit if invalid", async () => {
  const user = userEvent.setup();
  const handleSubmit = vi.fn(async (e: FormEvent) => {
    e.preventDefault();
  });

  render(<AuthForm {...defaultProps} onSubmit={handleSubmit} />);

  await user.type(emailInput(), "jontest@test.com");
  await user.click(submitButton());

  expect(handleSubmit).not.toHaveBeenCalledOnce();
});
