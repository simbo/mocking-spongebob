export function sanitizeText(text: string): string[] {
  return text
    .trim()
    .split('\n')
    .map(line => line.trim());
}
