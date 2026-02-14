const STORAGE_KEY = "england_battles";

export function getBattles() {
  const data = localStorage.getItem(STORAGE_KEY);
  return data ? JSON.parse(data) : [];
}

export function saveBattles(battles) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(battles));
}

