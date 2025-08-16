export interface IProperty {
  id: string;
  title: string;
  city: string;
  area: number;            // m²
  rooms: string;           // npr. "1.5", "2", "3"
  floor?: string;          // npr. "3/5"
  heating?: string;        // "CG", "TA", "Gas"...
  parking?: string;        // "Zona", "Garaža", "Slobodno"
  price: number;           // €/mes
  rent: boolean;           // true = izdavanje
  images: string[];        // URL-ovi slika
  description: string;
  features: string[];      // karakteristike (chip-ovi)
  available: boolean;
  favorite?: boolean;
}
