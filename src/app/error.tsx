"use client";

import { Button } from "@/components/core/button/Button";
import { Container } from "@/components/core/container/Container";
import { Heading } from "@/components/core/heading/Heading";
import { useRouter } from "next/navigation";
import { startTransition } from "react";

export default function Error({ reset }: { reset: () => void }) {
  const router = useRouter();

  const handleReset = () => {
    startTransition(() => {
      reset();
      router.refresh();
    });
  };

  return (
    <Container className="flex flex-col items-center pt-36">
      <Heading tag="h1" className="text-danger">
        Well, that&#39;s unfortunate...
      </Heading>

      <p>Something went wrong there. </p>

      <Button
        variant="link"
        className="mt-20 font-teko text-xl font-semibold text-danger"
        onClick={handleReset}
      >
        Click here to try again!
      </Button>
    </Container>
  );
}
