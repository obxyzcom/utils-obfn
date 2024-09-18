function getObj<T extends object>(obj: T): T {
  return JSON.parse(JSON.stringify(obj)) as T;
}

export { getObj };
