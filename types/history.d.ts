export * from 'history';

declare module 'history' {
  export interface Location {
    query: Record<string, string | undefined>;
  }
}
