import { parseEnvBoolean } from "@/utils/environment";
import { describe, expect, test } from "vitest";

describe("parseEnvBoolean", () => {
  test("returns true if env value = 'true'", () => {
    expect(parseEnvBoolean("true")).toBe(true);
  });

  test("returns false if env value = 'false'", () => {
    expect(parseEnvBoolean("false")).toBe(false);
  });

  test("returns false for undefined and all other values", () => {
    expect(parseEnvBoolean("")).toBe(false);
    expect(parseEnvBoolean("test")).toBe(false);
    expect(parseEnvBoolean(undefined)).toBe(false);
  });
});
