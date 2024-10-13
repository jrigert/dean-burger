"use client";

import { SearchInput } from "@/components/core/search-input/SearchInput";
import { SearchParamKeys } from "@/constants/search-params";
import { useSearchParams, useRouter } from "next/navigation";
import {
  FormEvent,
  FunctionComponent,
  useCallback,
  useEffect,
  useState,
} from "react";

export interface ProductSearchControllerProps {
  className?: string;
  inputClassName?: string;
  inputContainerClassName?: string;
  id: string;
}

export const ProductSearchController: FunctionComponent<
  ProductSearchControllerProps
> = (props) => {
  const { className, id, inputClassName, inputContainerClassName } = props;
  const searchParams = useSearchParams();
  const { replace } = useRouter();
  const currentQueryValue = searchParams.get(SearchParamKeys.query) ?? "";

  const [query, setQuery] = useState(currentQueryValue);

  useEffect(() => {
    setQuery(currentQueryValue);
  }, [currentQueryValue]);

  const handleSubmit = useCallback(
    (e: FormEvent) => {
      e.preventDefault();

      const params = new URLSearchParams(searchParams);
      if (query) {
        params.set(SearchParamKeys.query, query);
      } else {
        params.delete(SearchParamKeys.query);
      }

      replace(`/?${params.toString()}`);
    },
    [searchParams, query, replace],
  );

  return (
    <form onSubmit={handleSubmit} className={className}>
      <SearchInput
        inputClassName={inputClassName}
        inputContainerClassName={inputContainerClassName}
        placeholder="Search the menu..."
        id={id}
        label="Search the menu"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
