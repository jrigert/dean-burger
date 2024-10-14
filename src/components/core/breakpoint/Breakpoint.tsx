import { parseEnvBoolean } from "@/utils/environment";
import type { FunctionComponent } from "react";

const shouldShow = parseEnvBoolean(process.env.SHOW_BREAKPOINTS);

/**
 * this is a debugging component for showing the current breakpoint
 * set SHOW_BREAKPOINTS env variable to true to enabled
 */
export const Breakpoint: FunctionComponent = () => {
  if (!shouldShow) {
    return null;
  }

  return (
    <div className="z-12 bg-container fixed left-5 top-16 border border-foreground p-3">
      <span className="sm:hidden">XS</span>
      <span className="hidden sm:max-md:block">SM</span>
      <span className="hidden md:max-lg:block">MD</span>
      <span className="hidden lg:max-xl:block">LG</span>
      <span className="hidden xl:max-2xl:block">XL</span>
      <span className="hidden 2xl:block">2XL</span>
    </div>
  );
};
