export function fetcher<T>(...args: Parameters<typeof fetch>): Promise<T> {
  return fetch(...args).then(res => res.json());
}
