import { type SessionData } from "../model/types";

const SESSION_STORAGE_KEY = "session_data";

export function getSessionDataFromLS(): SessionData | null {
  try {
    const data = localStorage.getItem(SESSION_STORAGE_KEY);

    if (!data) return null;

    const parsed = JSON.parse(data) as SessionData;
    return parsed;
  } catch {
    return null;
  }
}

export function setSessionDataToLS(data: SessionData): void {
  localStorage.setItem(SESSION_STORAGE_KEY, JSON.stringify(data));
}

export function clearSessionDataInLS(): void {
  localStorage.removeItem(SESSION_STORAGE_KEY);
}
