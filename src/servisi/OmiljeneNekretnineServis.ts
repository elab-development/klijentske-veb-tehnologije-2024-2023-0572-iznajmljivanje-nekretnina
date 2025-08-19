// src/services/FavoritesService.ts
// Klasa + interfejs sa metodama (aktivno se koristi u aplikaciji)

export interface IFavoritesService {
  getAll(): string[];                                    // sve ID-jeve
  has(id: string): boolean;                              // da li je ID u omiljenim
  add(id: string): string[];                             // dodaj i vrati novu listu
  remove(id: string): string[];                          // ukloni i vrati novu listu
  toggle(id: string): { isFav: boolean; items: string[] }; // preklopi i vrati status + listu
  clear(): void;                                         // isprazni
  count(): number;                                       // broj omiljenih
  subscribe(listener: () => void): () => void;           // pretplata na promene (za UI)
}

export class FavoritesService implements IFavoritesService {
  // jedinstveni ključ – koristi isti kao ranije da zadržiš podatke
  private static readonly STORAGE_KEY = "user.favorites";
  private listeners = new Set<() => void>();

  private safeRead(): string[] {
    try {
      const raw = localStorage.getItem(FavoritesService.STORAGE_KEY);
      if (!raw) return [];
      const arr = JSON.parse(raw);
      return Array.isArray(arr) ? arr.filter(Boolean) : [];
    } catch {
      // ako je storage koruptan – očisti i kreni od nule
      localStorage.removeItem(FavoritesService.STORAGE_KEY);
      return [];
    }
  }

  private write(ids: string[]) {
    localStorage.setItem(FavoritesService.STORAGE_KEY, JSON.stringify(ids));
    // obavesti sve pretplaćene komponente
    for (const l of this.listeners) {
      try { l(); } catch { /* ignore single listener errors */ }
    }
  }

  getAll(): string[] {
    return this.safeRead();
  }

  has(id: string): boolean {
    return this.safeRead().includes(id);
  }

  add(id: string): string[] {
    const set = new Set(this.safeRead());
    set.add(id);
    const next = Array.from(set);
    this.write(next);
    return next;
  }

  remove(id: string): string[] {
    const next = this.safeRead().filter(x => x !== id);
    this.write(next);
    return next;
  }

  toggle(id: string): { isFav: boolean; items: string[] } {
    const present = this.has(id);
    const items = present ? this.remove(id) : this.add(id);
    return { isFav: !present, items };
  }

  clear(): void {
    this.write([]);
  }

  count(): number {
    return this.safeRead().length;
  }

  // React-friendly subscribe (radi sa useSyncExternalStore ili custom useEffect)
  subscribe(listener: () => void): () => void {
    this.listeners.add(listener);
    return () => this.listeners.delete(listener);
  }
}

// ✅ izvezi jedinstvenu instancu (singleton) koju koristi ceo app
export const favorites = new FavoritesService();
