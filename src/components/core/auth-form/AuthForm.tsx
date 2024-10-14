import { Button } from "@/components/core/button/Button";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { Input } from "@/components/core/input/Input";
import {
  FormEvent,
  FunctionComponent,
  PropsWithChildren,
  useCallback,
  useState,
} from "react";

export interface AuthFormProps {
  onSubmit: (values: { email: string; password: string }) => Promise<void>;
  submitButtonText: string;
  title: string;
}

export const AuthForm: FunctionComponent<PropsWithChildren<AuthFormProps>> = (
  props,
) => {
  const { children, onSubmit, submitButtonText, title } = props;
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleSubmit = useCallback(
    async (e: FormEvent) => {
      try {
        e.preventDefault();
        setIsLoading(true);

        await onSubmit({ email, password });
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
      } catch (e) {
      } finally {
        setIsLoading(false);
      }
    },
    [email, password, onSubmit],
  );

  return (
    <Container fullHeight className="flex items-center justify-center">
      <div className="rounded-xl bg-white p-12 sm:min-w-[500px]">
        <Heading tag="h1">{title}</Heading>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
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

          <Button type="submit" className="mt-8" isLoading={isLoading}>
            {submitButtonText}
          </Button>
        </form>
      </div>
    </Container>
  );
};
