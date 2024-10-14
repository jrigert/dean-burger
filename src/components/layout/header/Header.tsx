import { Badge } from "@/components/core/badge/Badge";
import { Popover } from "@/components/core/popover/Popover";
import { MobileSearchPanel } from "@/components/layout/mobile-search-panel/MobileSearchPanel";
import { Routes } from "@/constants/routes";
import { SignOutButton } from "@/controllers/auth/sign-out-button/SignOutButton";
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
        "fixed left-0 top-0 z-20 h-14 w-full items-center bg-background shadow-xl",
        className,
      )}
    >
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="font-teko text-3xl font-bold tracking-wider text-primary hover:underline"
          >
            Dean Burger
          </Link>

          <ProductSearchController
            className="hidden sm:block"
            id="search-menu"
          />
        </div>

        <div className="flex items-center gap-3">
          <MobileSearchPanel className="sm:hidden">
            <ProductSearchController
              id="mobile-search-menu"
              inputContainerClassName="flex w-full"
            />
          </MobileSearchPanel>

          {user ? (
            <Popover
              buttonIcon={faUser}
              popoverId="user-panel"
              accessibilityName="user panel"
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
              className="text-2xl text-primary"
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
              aria-label="Go To Cart"
              className="text-2xl text-primary"
            >
              <FontAwesomeIcon
                icon={faShoppingCart}
                className="transition-transform hover:scale-110"
              />
            </Link>

            {orderCount ? (
              <Badge
                className="absolute -right-3 -top-2"
                aria-label={`There are ${orderCount} items in your cart`}
              >
                {orderCount}
              </Badge>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
};
