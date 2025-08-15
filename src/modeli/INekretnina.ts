export interface IProperty {
  id: string;
  title: string;
  city: string;
  area: number;      // m²
  floor?: number;    // opcionalno
  price: number;     // EUR
  type: "Stan" | "Kuća" | "Poslovni prostor";
  imageAlt?: string;
}
