import { isValidLuhn } from "../utils/luhn"

export function validateCard(cardNumber: string) {
  // 1. Check missing input
  if (!cardNumber) {
    throw new Error("Card number is required");
  }

  // 2. Check only digits
  if (!/^\d+$/.test(cardNumber)) {
    throw new Error("Card number must contain only digits");
  }

  // 3. Check length
  if (cardNumber.length < 13 || cardNumber.length > 19) {
    return { valid: false };
  }

  // 4. Luhn check
  const valid = isValidLuhn(cardNumber);

  return { valid };
}