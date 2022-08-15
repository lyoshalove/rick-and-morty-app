export function getSlicedText(text: string, count: number): string {
  return text.length > count ? `${text.slice(0, count)}...` : text;
}