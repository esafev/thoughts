type DateTimeFormat = 'long' | 'short';

const UPDATED_TIME_ZONE = 'Europe/Berlin';

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
    timeZone: UPDATED_TIME_ZONE,
    dateStyle: 'medium',
    timeStyle: 'short'
  });

  // en-GB names Central European time CET/CEST, en-US only gives GMT+1/GMT+2
  const timeZoneName = new Intl.DateTimeFormat('en-GB', {
    timeZone: UPDATED_TIME_ZONE,
    timeZoneName: 'short'
  })
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value;

  return `${dateTimeFormat.format(date)} [${timeZoneName}]`;
}

export { formatDate, formatUpdatedDate };
