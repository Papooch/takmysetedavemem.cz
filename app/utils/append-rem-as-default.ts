/**
 * Converts a numeric value to rem units, or returns the value as-is if it already has a unit suffix
 * @param value - The size value (number or string)
 * @returns The formatted size string
 *
 * @example
 * appendRemAsDefault(16) // "16rem"
 * appendRemAsDefault("16") // "16rem"
 * appendRemAsDefault("16px") // "16px"
 * appendRemAsDefault("1.5rem") // "1.5rem"
 * appendRemAsDefault("100%") // "100%"
 */
export function appendRemAsDefault(value: string | number | undefined): string | undefined {
  if (value === undefined) {
    return undefined;
  }

  const stringValue = String(value);

  // Check if the value is purely numeric (including decimals)
  if (/^-?\d+\.?\d*$/.test(stringValue)) {
    return `${stringValue}rem`;
  }

  // Return as-is if it already has a unit or is a special value
  return stringValue;
}
