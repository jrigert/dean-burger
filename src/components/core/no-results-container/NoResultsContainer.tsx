import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { Link } from "@/components/core/link/Link";
import type { FunctionComponent, PropsWithChildren } from "react";

export interface NoResultsContainerProps {
  title: string;
}

export const NoResultsContainer: FunctionComponent<
  PropsWithChildren<NoResultsContainerProps>
> = (props) => {
  const { title, children } = props;

  return (
    <Container className="flex flex-col items-center pt-36">
      <Heading tag="h1">{title}</Heading>

      {children}

      <Link href={"/"} className="mt-20 font-teko text-xl font-semibold">
        Go to the menu to order something!
      </Link>
    </Container>
  );
};
