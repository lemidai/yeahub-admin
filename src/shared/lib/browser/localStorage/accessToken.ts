const ACCES_TOKEN_KEY = "accessToken";

export function getAccessToken(): string | null {
  try {
    const data = localStorage.getItem(ACCES_TOKEN_KEY);

    if (!data) return null;

    const parsed = JSON.parse(data);
    return parsed;
  } catch {
    return null;
  }
}

export function saveAccessToken(data: string): void {
  localStorage.setItem(ACCES_TOKEN_KEY, JSON.stringify(data));
}

export function clearAccessToken(): void {
  localStorage.removeItem(ACCES_TOKEN_KEY);
}
