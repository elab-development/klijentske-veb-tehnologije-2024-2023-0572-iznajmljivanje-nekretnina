import { IProperty } from "../modeli/INekretnina";

const img = (id: number, w = 1280, h = 720) =>
  `https://picsum.photos/id/${id}/${w}/${h}`;

export class PropertyService {
  // 10 razlicitih nekretnina (sa po 5 slika)
  private static data: IProperty[] = [
    {
      id: "1",
      title: "Dvosoban stan, 58m² — Zemun",
      city: "Zemun",
      area: 58,
      rooms: "2.5",
      floor: "3/5",
      heating: "CG",
      parking: "Zona",
      price: 780,
      rent: true,
      images: [img(1015), img(1025), img(1035), img(1045), img(1055)],
      description:
        "Svetao i funkcionalan dvosoban stan u centru Zemuna. Dnevna soba sa kuhinjom, izdvojena spavaća, moderno kupatilo i balkon.",
      features: ["Klima", "Brzi internet", "Lift", "Balkon", "Veš mašina"],
      available: true,
    },
    {
      id: "2",
      title: "Garsonjera, 32m² — Novi Beograd",
      city: "Novi Beograd",
      area: 32,
      rooms: "0.5",
      floor: "1/6",
      heating: "CG",
      parking: "Slobodno",
      price: 420,
      rent: true,
      images: [img(1020), img(1030), img(1040), img(1050), img(1060)],
      description:
        "Uređena garsonjera u blizini bulevara. Odlična povezanost i mirno okruženje, idealno za jednu osobu.",
      features: ["Klima", "Lift", "Kablovska"],
      available: true,
    },
    {
      id: "3",
      title: "Trosoban stan, 74m² — Vračar",
      city: "Vračar",
      area: 74,
      rooms: "3",
      floor: "2/4",
      heating: "CG",
      parking: "Garaža",
      price: 1150,
      rent: true,
      images: [img(1000), img(1010), img(1028), img(1038), img(1048)],
      description:
        "Renoviran trosoban stan u mirnoj ulici na Vračaru, u blizini Hrama. Garažno mesto uključeno u cenu.",
      features: ["Garaža", "Klima", "Lift", "Video nadzor"],
      available: true,
    },
    {
      id: "4",
      title: "Jednosoban stan, 40m² — Dorćol",
      city: "Dorćol",
      area: 40,
      rooms: "1",
      floor: "4/6",
      heating: "TA",
      parking: "Zona",
      price: 600,
      rent: true,
      images: [img(1074), img(1070), img(1068), img(1066), img(1064)],
      description:
        "Komforan jednosoban stan na odličnoj lokaciji. Pešačka distanca do Kalemegdana i Knez Mihailove.",
      features: ["Brzi internet", "Klima", "Lift"],
      available: true,
    },
    {
      id: "5",
      title: "Četvorosoban, 96m² — Novi Sad, Liman",
      city: "Novi Sad",
      area: 96,
      rooms: "4",
      floor: "5/7",
      heating: "CG",
      parking: "Garaža",
      price: 1350,
      rent: true,
      images: [img(1084), img(1080), img(1078), img(1076), img(1072)],
      description:
        "Prostran stan sa tri spavaće, dve terase i garažnim mestom. Blizina fakulteta i šetališta uz Dunav.",
      features: ["Garaža", "Dve terase", "Lift", "Klima"],
      available: false,
    },
    {
      id: "6",
      title: "Porodična kuća, 150m² — Zvezdara",
      city: "Zvezdara",
      area: 150,
      rooms: "5",
      floor: "PR+1",
      heating: "Gas",
      parking: "Dvorište",
      price: 1600,
      rent: true,
      images: [img(955), img(960), img(965), img(970), img(975)],
      description:
        "Uređena kuća sa dvorištem i dve parking pozicije. Mirna ulica, blizina Lion-a i Đerma.",
      features: ["Dvorište", "Garaža/parking", "Dve kupatila", "Podno grejanje"],
      available: true,
    },
    {
      id: "7",
      title: "Dvosoban, 52m² — Niš, Centar",
      city: "Niš",
      area: 52,
      rooms: "2",
      floor: "2/5",
      heating: "CG",
      parking: "Slobodno",
      price: 500,
      rent: true,
      images: [img(880), img(885), img(890), img(895), img(900)],
      description:
        "Svetao stan u centru Niša. Uredno održavana zgrada, dvorišna orijentacija.",
      features: ["Klima", "Lift", "Balkon"],
      available: true,
    },
    {
      id: "8",
      title: "Studio, 28m² — Kragujevac",
      city: "Kragujevac",
      area: 28,
      rooms: "0.5",
      floor: "3/5",
      heating: "TA",
      parking: "Zona",
      price: 300,
      rent: true,
      images: [img(825), img(830), img(835), img(840), img(845)],
      description:
        "Praktičan studio u blizini centra i fakulteta. Opremljen potpuno novim nameštajem.",
      features: ["Kablovska", "Brzi internet"],
      available: true,
    },
    {
      id: "9",
      title: "Trosoban, 69m² — Subotica",
      city: "Subotica",
      area: 69,
      rooms: "3",
      floor: "1/3",
      heating: "CG",
      parking: "Slobodno",
      price: 480,
      rent: true,
      images: [img(760), img(765), img(770), img(775), img(780)],
      description:
        "Odličan raspored, renovirano kupatilo i kuhinja. Mirno, zeleno okruženje.",
      features: ["Balkon", "Podrum", "PVC stolarija"],
      available: true,
    },
    {
      id: "10",
      title: "Dupleks, 82m² — Beograd na vodi",
      city: "Savski venac",
      area: 82,
      rooms: "3",
      floor: "12/20",
      heating: "CG",
      parking: "Garaža",
      price: 1900,
      rent: true,
      images: [img(700), img(705), img(710), img(715), img(720)],
      description:
        "Luksuzan dupleks sa panoramskim pogledom. Pristup spa centru i bazenu.",
      features: ["Garaža", "Bazen", "Spa", "24/7 obezbeđenje"],
      available: true,
    },
  ];

  static async list(): Promise<IProperty[]> {
    return this.data;
  }

  static async getById(id: string): Promise<IProperty | undefined> {
    return this.data.find(p => p.id === id);
  }

  static async featured(n = 3): Promise<IProperty[]> {
    return this.data.slice(0, n);
  }
}
