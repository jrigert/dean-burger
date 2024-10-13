import { MOCK_PRODUCTS } from "@/constants/mocks/product";
import { filterProductsByQuery } from "@/utils/products";
import { describe, expect, test } from "vitest";

describe("filterProductsByQuery", () => {
  test("matches by name", () => {
    expect(filterProductsByQuery(MOCK_PRODUCTS, "Black Burger")).toStrictEqual([
      MOCK_PRODUCTS[1],
    ]);

    expect(filterProductsByQuery(MOCK_PRODUCTS, "Fries")).toStrictEqual([
      MOCK_PRODUCTS[2],
    ]);
  });

  test("matches by partial name", () => {
    expect(filterProductsByQuery(MOCK_PRODUCTS, "Burg")).toStrictEqual([
      MOCK_PRODUCTS[0],
      MOCK_PRODUCTS[1],
    ]);
  });

  test("matches by name case insensitive", () => {
    expect(filterProductsByQuery(MOCK_PRODUCTS, "bUrG")).toStrictEqual([
      MOCK_PRODUCTS[0],
      MOCK_PRODUCTS[1],
    ]);
  });

  test("matches by description", () => {
    expect(
      filterProductsByQuery(MOCK_PRODUCTS, "A classic beef patty"),
    ).toStrictEqual([MOCK_PRODUCTS[0]]);
  });

  test("matches by partial description", () => {
    expect(filterProductsByQuery(MOCK_PRODUCTS, "bun")).toStrictEqual([
      MOCK_PRODUCTS[0],
      MOCK_PRODUCTS[1],
    ]);
  });

  test("matches by name case insensitive", () => {
    expect(filterProductsByQuery(MOCK_PRODUCTS, "bUn")).toStrictEqual([
      MOCK_PRODUCTS[0],
      MOCK_PRODUCTS[1],
    ]);
  });
});
