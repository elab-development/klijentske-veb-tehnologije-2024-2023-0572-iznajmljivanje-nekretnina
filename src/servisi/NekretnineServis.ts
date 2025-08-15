import { IProperty } from "../modeli/INekretnina";

export class PropertyService {
  // demo podaci dok ne povežemo API
  static demo(): IProperty[] {
    return Array.from({ length: 6 }).map((_, i) => ({
      id: String(i + 1),
      title: "Moderan stan u centru",
      city: "Beograd",
      area: 62 + i,
      floor: 1 + (i % 5),
      price: 120000 + (i + 1) * 500,
      type: "Stan",
      imageAlt: `Slika ${i + 1}`
    }));
  }
}
