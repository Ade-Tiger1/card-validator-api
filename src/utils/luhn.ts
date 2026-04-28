export function isValidLuhn(cardNumber: string): boolean {
  if (typeof cardNumber !== "string") return false;

  // Remove spaces and dashes (common user input)
  const sanitized = cardNumber.replace(/[\s-]/g, "");

  // Ensure only digits
  if (!/^\d+$/.test(sanitized)) return false;

  // Optional: enforce typical card length (13–19 digits)
  if (sanitized.length < 13 || sanitized.length > 19) return false;

  let sum = 0;
  let shouldDouble = false;

  // Loop from right to left
  for (let i = sanitized.length - 1; i >= 0; i--) {
    let digit = Number(sanitized[i]);

    if (shouldDouble) {
      digit *= 2;
      if (digit > 9) digit -= 9;
    }

    sum += digit;
    shouldDouble = !shouldDouble;
  }

  return sum % 10 === 0;
}