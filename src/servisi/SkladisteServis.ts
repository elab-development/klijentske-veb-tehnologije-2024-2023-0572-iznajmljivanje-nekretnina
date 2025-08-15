export class StorageService {
  static setLocal<T>(key: string, value: T) {
    localStorage.setItem(key, JSON.stringify(value));
  }
  static getLocal<T>(key: string, fallback: T): T {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  }
  static removeLocal(key: string) {
    localStorage.removeItem(key);
  }

  static setSession<T>(key: string, value: T) {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
  static getSession<T>(key: string, fallback: T): T {
    const raw = sessionStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  }
  static removeSession(key: string) {
    sessionStorage.removeItem(key);
  }
}
