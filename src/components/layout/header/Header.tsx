import { Badge } from "@/components/core/badge/Badge";
import { MobileSearchPanel } from "@/components/layout/mobile-search-panel/MobileSearchPanel";
import { Routes } from "@/constants/routes";
import { ProductSearchController } from "@/controllers/product/product-search/ProductSearchController";
import { classNames } from "@/utils/style";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import type { FunctionComponent } from "react";

export interface HeaderProps {
  className?: string;
  orderCount: number;
}

export const Header: FunctionComponent<HeaderProps> = (props) => {
  const { className, orderCount } = props;

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
