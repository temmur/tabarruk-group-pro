
export type Country = {
  id: number
  flag: string
  title: string
  destintaions: number
  router: string
}

export const countries: Country[] = [
  {
    id: 1,
    flag: 'https://flagcdn.com/w160/uz.png',
    title: "O'zbekiston",
    destintaions: 175,
    router: '/country/1'
  },
  {
    id: 2,
    flag: 'https://flagcdn.com/w160/tr.png',
    title: 'Turkiya',
    destintaions: 150,
    router: '/country/2'
  },
  {
    id: 3,
    flag: 'https://flagcdn.com/w160/tm.png',
    title: 'Turkmaniston',
    destintaions: 20,
    router: '/country/3'
  },
  {
    id: 4,
    flag: 'https://flagcdn.com/w160/az.png',
    title: 'Ozarbayjon',
    destintaions: 0,
    router: '/country/4'
  },
  {
    id: 5,
    flag: 'https://flagcdn.com/w160/kz.png',
    title: "Qozog'iston",
    destintaions: 51,
    router: '/country/5'
  },
  {
    id: 6,
    flag: 'https://flagcdn.com/w160/kg.png',
    title: "Qirg'iziston",
    destintaions: 19,
    router: '/country/6'
  },
  {
    id: 7,
    flag: 'https://flagcdn.com/w160/hu.png',
    title: 'Vengriya',
    destintaions: 14,
    router: '/country/7'
  }
]
