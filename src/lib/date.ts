type DateTimeFormat = 'long' | 'short';

function formatDate(date?: Date, format: DateTimeFormat = 'short'): string {
  if (!date) return 'Unknown date';

  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    day: 'numeric',
    month: format
  };

  return date.toLocaleDateString('en-US', options);
}

function formatUpdatedDate(date?: Date): string {
  if (!date) return 'Unknown date';

  const dateTimeFormat = new Intl.DateTimeFormat('en-US', {
    timeZone: 'Europe/Berlin',
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  return `${dateTimeFormat.format(date)} [CET]`;
}

export { formatDate, formatUpdatedDate };
