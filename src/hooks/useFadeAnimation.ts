import { useCallback, useEffect, useRef, useState } from "react";

export type AnimationState = "hidden" | "fade-in" | "show" | "fade-out";

export interface UseFadeAnimationProps {
  /** must be truthy to start the animation. if it changes, animation timer will reset */
  dependency: unknown;
  /** end of the fade in period, beginning of the fully visible period. defaults to 500ms */
  showStartTime?: number;
  /** beginning of the fade out period. defaults to 3500ms */
  fadeOutStartTime?: number;
  /** end of the fade out period, calls the onExit callback. defaults to 4000ms */
  exitTime?: number;
  /** callback at the end of fadeOut period for element to react or remove itself */
  onExit?: () => void;
}

export interface UseFadeAnimationResult {
  animationState: AnimationState;
}

export const useFadeAnimation = (
  props: UseFadeAnimationProps,
): UseFadeAnimationResult => {
  const {
    showStartTime = 500,
    fadeOutStartTime = 3500,
    exitTime = 4000,
    dependency,
    onExit,
  } = props;

  const [animationState, setAnimationState] =
    useState<AnimationState>("hidden");
  const animationStartTime = useRef<number | null>(null);
  const animationFrameHandler = useRef<number | null>(null);

  const clearAnimation = useCallback(() => {
    if (animationFrameHandler.current) {
      cancelAnimationFrame(animationFrameHandler.current);
      animationFrameHandler.current = null;
    }

    animationStartTime.current = null;
  }, []);

  const animate = useCallback(
    (timestamp: number) => {
      if (!animationStartTime.current) {
        animationStartTime.current = timestamp;
      }

      const elapsed = timestamp - animationStartTime.current;

      if (elapsed >= exitTime) {
        clearAnimation();
        onExit?.();
        return;
      }

      if (elapsed >= fadeOutStartTime) {
        setAnimationState("fade-out");
        animationFrameHandler.current = requestAnimationFrame(animate);
        return;
      }

      if (elapsed >= showStartTime) {
        setAnimationState("show");
        animationFrameHandler.current = requestAnimationFrame(animate);
        return;
      }

      setAnimationState("fade-in");
      animationFrameHandler.current = requestAnimationFrame(animate);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps -- omitting onExit on purpose, it might not be memoized
    [exitTime, fadeOutStartTime, showStartTime, clearAnimation],
  );

  useEffect(() => {
    if (dependency) {
      clearAnimation();
      animationFrameHandler.current = requestAnimationFrame(animate);
    }

    return () => {
      clearAnimation();
    };
  }, [dependency, animate, clearAnimation]);

  return {
    animationState,
  };
};
