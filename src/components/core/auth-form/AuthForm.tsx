import { Button } from "@/components/core/button/Button";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { Input } from "@/components/core/input/Input";
import { SubmitButton } from "@/controllers/core/submit-button/SubmitButton";
import {
  ComponentProps,
  FormEvent,
  FunctionComponent,
  PropsWithChildren,
  ReactNode,
  useState,
} from "react";

interface BaseAuthFormProps {
  submitButtonText: string;
  title: string;
  footerChildren?: ReactNode;
}

interface AuthFormWithOnSubmitProps extends BaseAuthFormProps {
  isLoading?: boolean;
  useServerAction: false;
  onSubmit: (
    event: FormEvent,
    values: { email: string; password: string },
  ) => Promise<void>;
}

interface AuthFormWithServerActionProps extends BaseAuthFormProps {
  useServerAction: true;
  action: ComponentProps<"form">["action"];
}

export type AuthFormProps =
  | AuthFormWithOnSubmitProps
  | AuthFormWithServerActionProps;

export const AuthForm: FunctionComponent<PropsWithChildren<AuthFormProps>> = (
  props,
) => {
  const { children, footerChildren, submitButtonText, title, useServerAction } =
    props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const onSubmit = useServerAction ? undefined : props.onSubmit;
  const isLoading = useServerAction ? undefined : props.isLoading;
  const action = useServerAction ? props.action : undefined;

  return (
    <Container fullHeight className="flex items-center justify-center">
      <div className="rounded-xl bg-white p-12 sm:min-w-[500px]">
        <Heading tag="h1">{title}</Heading>

        <form
          onSubmit={
            onSubmit
              ? (event: FormEvent) => onSubmit(event, { email, password })
              : undefined
          }
          action={action}
          className="mt-6 flex flex-col gap-4"
        >
          <Input
            required
            id="email"
            name="email"
            type="email"
            label="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <Input
            required
            id="password"
            name="password"
            type="password"
            label="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          {children}

          <div className="mt-8">
            {useServerAction ? (
              <SubmitButton className="w-full">{submitButtonText}</SubmitButton>
            ) : (
              <Button className="w-full" type="submit" isLoading={isLoading}>
                {submitButtonText}
              </Button>
            )}
          </div>

          {footerChildren}
        </form>
      </div>
    </Container>
  );
};
