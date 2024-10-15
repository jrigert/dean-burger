import { Badge } from "@/components/core/badge/Badge";
import { Popover } from "@/components/core/popover/Popover";
import { MobileSearchPanel } from "@/components/layout/mobile-search-panel/MobileSearchPanel";
import { Routes } from "@/constants/routes";
import { SignOutButton } from "@/controllers/auth/sign-out-button/SignOutButton";
import { ThemeToggle } from "@/controllers/core/theme-toggle/ThemeToggle";
import { ProductSearchController } from "@/controllers/product/product-search/ProductSearchController";
import { SessionUser } from "@/types/next-auth";
import { classNames } from "@/utils/style";
import { faShoppingCart, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { FunctionComponent } from "react";

export interface HeaderProps {
  className?: string;
  user: SessionUser | undefined;
  orderCount: number;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const { className, user, orderCount } = props;

  return (
    <header
      className={classNames(
        "bg-container fixed left-0 top-0 z-20 h-14 w-full items-center shadow-xl",
        className,
      )}
    >
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-teko text-2xl font-bold tracking-wide text-primary hover:underline sm:text-3xl sm:tracking-wider"
          >
            Dean Burger
          </Link>

          <ProductSearchController
            className="hidden sm:block"
            id="search-menu"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-5">
          <MobileSearchPanel className="sm:hidden">
            <ProductSearchController
              id="mobile-search-menu"
              inputContainerClassName="flex w-full"
            />
          </MobileSearchPanel>

          <ThemeToggle className="p-2 text-xl leading-none sm:text-2xl sm:leading-none" />

          {user ? (
            <Popover
              buttonIcon={faUser}
              buttonClassName="text-xl p-2 sm:p-1 sm:text-2xl leading-none sm:leading-none"
              popoverId="user-panel"
              accessibilityName="user panel"
              focusOnOpenId="sign-out"
            >
              <div>
                <strong>Welcome, {user.firstName}!</strong>
              </div>

              <SignOutButton variant="link" className="mt-6">
                Sign Out
              </SignOutButton>
            </Popover>
          ) : (
            <Link
              href={`/${Routes.Login}`}
              aria-label="Sign In"
              className="-mt-0.5 p-2 text-xl text-primary sm:p-1 sm:text-2xl sm:leading-none"
            >
              <FontAwesomeIcon
                icon={faUser}
                className="transition-transform hover:scale-110"
              />
            </Link>
          )}

          <div className="relative">
            <Link
              href={`/${Routes.Cart}`}
              aria-label={`Go To Cart${orderCount ? ` - you have ${orderCount} items in your cart` : ""}`}
              className="p-2 text-xl text-primary sm:p-1 sm:text-2xl sm:leading-none"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="transition-transform hover:scale-110"
              />
            </Link>

            {orderCount ? (
              <Badge className="absolute -right-3 -top-2" aria-hidden={true}>
                {orderCount}
              </Badge>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};
