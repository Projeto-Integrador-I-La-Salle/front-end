export function safeParse(json) {
  try {
    return JSON.parse(json);
  } catch {
    return null;
  }
}

export function loadFromStorage(key, defaultValue) {
  if (typeof localStorage === "undefined") {
    return defaultValue;
  }

  const raw = localStorage.getItem(key);
  const parsed = safeParse(raw);

  if (!parsed) {
    localStorage.setItem(key, JSON.stringify(defaultValue));
    return defaultValue;
  }

  return parsed;
}

export function saveToStorage(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}

