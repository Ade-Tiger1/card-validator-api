import { validateCard } from "./src/services/CardService.js";

test("valid card number passes", () => {
  const result = validateCard("4539578763621486");
  expect(result.valid).toBe(true);
});

test("invalid card number fails", () => {
  const result = validateCard("1234567890123456");
  expect(result.valid).toBe(false);
});