import { MutableRefObject, useEffect } from "react";

export const useOnClickOutside = (
  ref: MutableRefObject<HTMLElement | null>,
  callback: () => void,
) => {
  useEffect(() => {
    const handleMouseDown = (event: MouseEvent) => {
      if (
        ref.current &&
        event.target instanceof Node &&
        !ref.current.contains(event.target)
      ) {
        callback();
      }
    };

    window.addEventListener("mousedown", handleMouseDown);

    return () => {
      window.removeEventListener("mousedown", handleMouseDown);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- exclude callback as it my not be memoized
  }, [ref]);
};
