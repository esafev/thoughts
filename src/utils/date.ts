export function formatDate(date: Date | undefined, format: 'short' | 'long' = 'short'): string {
  if (!date) return 'Unknown date';

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: 'numeric',
    month: format
  };

  return date.toLocaleDateString('en-US', options);
}
