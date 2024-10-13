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

export const ProductSearchController: FunctionComponent = () => {
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
    <form onSubmit={handleSubmit}>
      <SearchInput
        placeholder="Search the menu..."
        id="search-menu"
        label="Search the menu"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </form>
  );
};
