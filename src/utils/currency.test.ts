import { centsToDollars } from "@/utils/currency";
import { describe, expect, test } from "vitest";

describe("centsToDollars", () => {
  test("converts a cents (numeric) value to dollars (string)", () => {
    expect(centsToDollars(100)).toBe("1.00");
    expect(centsToDollars(1000)).toBe("10.00");
    expect(centsToDollars(120)).toBe("1.20");
    expect(centsToDollars(1220)).toBe("12.20");
    expect(centsToDollars(12345)).toBe("123.45");
    expect(centsToDollars(0)).toBe("0.00");
    expect(centsToDollars(650)).toBe("6.50");
  });
});
