// src/hooks/useFavorites.ts
import { useSyncExternalStore } from "react";
import { favorites } from "../servisi/OmiljeneNekretnineServis";

export function useFavorites() {
  // subscribe: kad se storage promeni → rerender
  const ids = useSyncExternalStore(
    (cb) => favorites.subscribe(cb),
    () => favorites.getAll(),
    () => favorites.getAll()
  );

  return {
    ids,
    count: ids.length,
    has: (id: string) => ids.includes(id),
    add: (id: string) => favorites.add(id),
    remove: (id: string) => favorites.remove(id),
    toggle: (id: string) => favorites.toggle(id),
    clear: () => favorites.clear(),
  };
}
