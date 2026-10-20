export function formatCurrency(
  value: string | number,
  notation: Intl.NumberFormatOptions["notation"] = "compact",
  maxDigits: number = 2,
): string {
  const numberFormat = Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: maxDigits,
    notation: notation,
  });

  return numberFormat.format(Number(value));
}
