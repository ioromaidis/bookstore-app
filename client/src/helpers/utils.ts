export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const slugify = (string: string) =>
  string.trim().replace(/ /g, '-').toLowerCase();

export const unslugify = (string: string) =>
  capitalize(string.replace('-', ' '));
