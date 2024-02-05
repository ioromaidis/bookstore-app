export const capitalize = (string: string) =>
  string.charAt(0).toUpperCase() + string.slice(1);

export const slugify = (string: string) =>
  string.replace(' ', '-').toLowerCase();

export const unslugify = (string: string) =>
  capitalize(string.replace('-', ' '));
