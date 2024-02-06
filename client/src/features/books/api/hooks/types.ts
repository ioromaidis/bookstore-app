export interface GetBookOptions {
  query?: string;
  categories?: InFilter;
  rating?: RangeFilter;
  author?: MatchFilter;
}

export type BookOptionsWithoutQuery = Omit<GetBookOptions, 'query'>;

export enum BookFilterType {
  in = 'in',
  match = 'match',
  range = 'range',
}

export interface BookFilter<T> {
  value: T;
  type: BookFilterType;
}

export interface InFilter extends BookFilter<string[]> {
  type: BookFilterType.in;
}

export const instanceOfInFilter = (filter: any): filter is InFilter =>
  filter.type === BookFilterType.in;

export interface MatchFilter extends BookFilter<string> {
  type: BookFilterType.match;
}

export const instanceOfMatchFilter = (filter: any): filter is MatchFilter =>
  filter.type === BookFilterType.match;

export interface RangeFilter extends BookFilter<[number, number]> {
  type: BookFilterType.range;
}

export const instanceOfRangeFilter = (filter: any): filter is RangeFilter =>
  filter.type === BookFilterType.range;
