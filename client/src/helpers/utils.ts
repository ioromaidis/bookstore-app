import * as luxon from 'luxon';

export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const slugify = (string: string) =>
  string.trim().replace(/ /g, '-').toLowerCase();

export const unslugify = (string: string) =>
  capitalize(string.replace('-', ' '));

export const formatDate = (dateISO: string) => {
  const dateTime = luxon.DateTime.fromISO(dateISO);
  return dateTime.toFormat('yyyy-MM-dd HH:mm');
};
