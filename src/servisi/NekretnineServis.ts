import { IProperty } from "../modeli/INekretnina";

export class PropertyService {
  static demo(): IProperty[] {
    return Array.from({ length: 9 }).map((_, i) => ({
      id: String(i + 1),
      title: i % 2 ? "Apartman 1" : "Moderan stan u centru",
      city: ["Beograd", "Novi Sad", "Niš"][i % 3],
      area: 60 + i * 3,
      floor: (i % 6) + 1,
      price: 120000 + (i + 1) * 750,
      type: "Stan",
      imageAlt: `Slika ${i + 1}`
    }));
  }

  /** vrati tačno 3 istaknute */
  static featured(): IProperty[] {
    const all = this.demo();
    return all.slice(0, 3);
  }
}
