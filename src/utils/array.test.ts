import { MOCK_PRODUCTS } from "@/constants/mocks/product";
import { findItemById, findItemBySlug, isDefined } from "@/utils/array";
import { describe, expect, test } from "vitest";

describe("isDefined", () => {
  test("returns true if the item is defined", () => {
    expect(isDefined({ value: "test" })).toBe(true);
    expect(isDefined(true)).toBe(true);
    expect(isDefined(false)).toBe(true);
    expect(isDefined("test")).toBe(true);
  });

  test("returns false for undefined and null", () => {
    expect(isDefined(undefined)).toBe(false);
    expect(isDefined(null)).toBe(false);
  });
});

describe("findItemBySlug", () => {
  test("returns the item if the item is found", () => {
    const item = findItemBySlug(MOCK_PRODUCTS, "black-burger");
    expect(item).toBeDefined();
    expect(item).toBe(MOCK_PRODUCTS[1]);
  });

  test("returns undefined if the item is not found", () => {
    expect(findItemBySlug(MOCK_PRODUCTS, "fake-burger")).toBeUndefined();
  });
});

describe("findItemById", () => {
  test("returns the item if the item is found", () => {
    const item = findItemById(MOCK_PRODUCTS, "3");

    expect(item).toBeDefined();
    expect(item).toBe(MOCK_PRODUCTS[2]);
  });

  test("returns undefined if the item is not found", () => {
    expect(findItemById(MOCK_PRODUCTS, "fake-burger")).toBeUndefined();
  });
});
