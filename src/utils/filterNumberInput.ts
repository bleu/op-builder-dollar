export function filterNumberInput(input: string): string {
  // First remove all characters except numbers, dots and commas
  let filtered = input.replace(/[^\d.,]/g, "");

  // Replace all commas with dots
  filtered = filtered.replace(/,/g, ".");

  // Handle multiple dots - keep the rightmost one
  const parts = filtered.split(".");
  if (parts.length > 2) {
    // Join all parts except last with empty string (removing dots)
    // Then add the last part with a dot
    filtered = `${parts.slice(0, -1).join("")}.${parts[parts.length - 1]}`;
  }

  return filtered;
}
