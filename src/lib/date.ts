const UPDATED_TIME_ZONE = 'Europe/Berlin';

const dateFormat = new Intl.DateTimeFormat('en-US', { dateStyle: 'long' });

const updatedDateFormat = new Intl.DateTimeFormat('en-US', {
  timeZone: UPDATED_TIME_ZONE,
  dateStyle: 'medium',
  timeStyle: 'short'
});

// en-GB names Central European time CET/CEST, en-US only gives GMT+1/GMT+2
const timeZoneNameFormat = new Intl.DateTimeFormat('en-GB', {
  timeZone: UPDATED_TIME_ZONE,
  timeZoneName: 'short'
});

function formatDate(date: Date): string {
  return dateFormat.format(date);
}

function formatUpdatedDate(date: Date): string {
  const timeZoneName = timeZoneNameFormat
    .formatToParts(date)
    .find((part) => part.type === 'timeZoneName')?.value;

  return `${updatedDateFormat.format(date)} [${timeZoneName}]`;
}

export { formatDate, formatUpdatedDate };
