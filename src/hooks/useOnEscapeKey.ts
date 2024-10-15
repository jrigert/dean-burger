import { useEffect } from "react";

interface UseOnEscapeKeyOptions {
  disable?: boolean;
}

export const useOnEscapeKey = (
  callback: () => void,
  options: UseOnEscapeKeyOptions = {},
) => {
  const { disable = false } = options;

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!disable && event.key === "Escape") {
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude callback as it my not be memoized
  }, [disable]);
};
