import { Button } from "@/components/core/button/Button";
import { classNames } from "@/utils/style";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import type { FunctionComponent } from "react";

export interface HeaderProps {
  className?: string;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const { className } = props;

  return (
    <header
      className={classNames(
        "fixed left-0 top-0 z-10 h-14 w-full items-center bg-background shadow-xl",
        className,
      )}
    >
      <div className="flex h-full items-center justify-between px-6">
        <Link
          href="/"
          className="font-teko text-3xl font-bold tracking-wider text-primary hover:underline"
        >
          Dean Burger
        </Link>

        <Button variant="icon" icon={faShoppingCart} />
      </div>
    </header>
  );
};
