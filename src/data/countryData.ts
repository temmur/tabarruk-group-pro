
export type Country = {
  id: number
  flag: string
  title: string
  destintaions: number
  router: string
  description:string,
  image: string,
   population: number | string,
attractions: number,
}

export const countries: Country[] = [
  {
    id: 1,
    flag: 'https://flagcdn.com/w160/uz.png',
    title: "O'zbekiston",
    description:'Oʻzbekiston (rasman: Oʻzbekiston Respublikasi) — Markaziy Osiyoning markaziy qismida joylashgan mamlakat.',
    destintaions: 175,
    router: '/country/1',
    image: "/flags.jpg",
      population:'37 mln',
  attractions: 175
  },
  {
    id: 2,
    flag: 'https://flagcdn.com/w160/tr.png',
    title: 'Turkiya',
    description:"Turkiya",
    destintaions: 150,
    router: '/country/2',
     image: "/images/country/bg-turkiye.png",
      population: '1 B',
  attractions: 150
  },
  {
    id: 3,
    flag: 'https://flagcdn.com/w160/tm.png',
    title: 'Turkmaniston',
    description:"Turkmaniston (turkmancha. Türkmenistan), Turkmaniston Respublikasi (turkmancha. Türkmenistan Respublikasy) — Markaziy Osiyodagi suveren davlat boʻlib, shimoli-gʻarbda Qozogʻiston, shimol va sharqda Oʻzbekiston, janubi-sharqda Afgʻoniston, janubdan Eron, janubi-gʻarbda va gʻarbdan Kaspiy dengizi bilan chegaradosh.",
    destintaions: 20,
    router: '/country/3',
     image: "/Turkman.jpg",
      population: '8 mln',
  attractions: 20
  },
  {
    id: 4,
    flag: 'https://flagcdn.com/w160/az.png',
    title: 'Ozarbayjon',
    description:"Ozarbayjon (Azərbaycan), Ozarbayjon Respublikasi (Azərbaycan Respublikası), — Kavkazortining janubisharqiy qismida joylashgan mamlakat. Maydoni 86,6 ming km². Aholisi 9,5 mln. kishi (2015). Poytaxti — Boku shahri Maʼmuriy jihatdan 61 tuman, 65 shahar va 122 shaharchaga boʻlinadi.",
    destintaions: 0,
    router: '/country/4',
     image: "/Azerbaijan.jpg",
      population:'11 mln',
  attractions: 175
  },
  {
    id: 5,
    flag: 'https://flagcdn.com/w160/kz.png',
    title: "Qozog'iston",
    description:"Qozogʻiston yoki Qozogʻiston Respublikasi (qozoqcha: Қазақстан, Qazaqstan, Қазақстан Республикасы, Qazaqstan Respublikası) – Oʻrta Osiyo va Sharqiy Yevropada joylashgan davlat. Ushbu davlat maʼmuriy jihatdan 17 viloyat, viloyatlar esa audan (tuman) larga boʻlinadi. Poytaxti – Astana shahri. BMT aʼzosi.",
    destintaions: 51,
    router: '/country/5',
     image: "/Kazakh.jpg",
      population: '18 mln',
  attractions: 51
  },
  {
    id: 6,
    flag: 'https://flagcdn.com/w160/kg.png',
    title: "Qirg'iziston",
    description:"Qirgʻiziston (qirgʻizcha: Кыргызстан [qɯrʁɯz'stɑn] Kirgizstan) yoki Qirgʻiz Respublikasi (qirgʻizcha: Кыргыз Республикасы) — Oʻrta Osiyoning shimoli-sharqida joylashgan davlat. Poytaxti — Bishkek shahri. Qirgʻiziston BMTning aʼzosidir.",
    destintaions: 19,
    router: '/country/6',
     image: "/Kyrgys.jpg",
      population: '6 mln',
  attractions: 19
  },
  {
    id: 7,
    flag: 'https://flagcdn.com/w160/hu.png',  
    title: 'Vengriya',
    description:"Vengriya yoki Mojariston (Magyarorszag) (rasman: Vengriya Respublikasi yoki Mojariston Respublikasi) (Magyar Koztar-sasag) — Yevropaning markaziy qismida, Dunay daryosining oʻrta oqimida joylashgan davlat. Maydon 93 ming km.",
    destintaions: 14,
    router: '/country/7',
     image: "/Hungary.jpg",
      population: '1 mln',
  attractions: 14
  }
]
