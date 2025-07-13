export function setValue(key: string, value: string) {
  localStorage.setItem(key, value);
}

export function getValue(key: string) {
  return localStorage.getItem(key);
}

export function deleteValue(key: string) {
  localStorage.getItem(key);
}
