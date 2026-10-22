
export type News = {
  image: string
  title: string
  subtitle: string
  createdAt: number | string
  views: number
  router: number | string
  id: number
}

export const news: News[] = [
  {
    id: 1,
    image: '/images/nevs1.jpg',
    title:
      '2025-yil 18-fevral kuni O‘zbekistondagi Amirsoy tog‘-chang‘i kurortida chang‘i bo‘yicha Turkiy davlatlar kubogi bo‘lib o‘tadi.',
    subtitle: '',
    createdAt: '2025-02-18',
    views: 95,
    router: '/news/1',
  },
  {
    id: 2,
    image: '/images/nevs2.jpg',
    title: 'Elchi Kubanichbek Omuraliyev bilan suhbat',
    subtitle:
      'Turkiy davlatlar tashkiloti Bosh kotibi, elchi Kubanichbek O‘muraliyevning TDT faoliyati haqidagi fikrlari.',
    createdAt: '2025-02-03',
    views: 64,
    router: '/news/ozbekistonda-ziyorat-turizmi-rivojlantirilmoqda',
  },
  {
    id: 3,
    image: '/images/nevs3.jpg',
    title:
      '“Tabarruk ziyorat” loyihasi doirasida faoliyat yuritayotgan turoperatorlarga platforma taqdimoti o‘tkazildi',
    subtitle:
      'O‘zbekiston Respublikasi Prezidentining 2022 yil 29 iyuldagi “Turkiy davlatlar bilan ',
    createdAt: '2024-03-11',
    views: 42,
    router:
      '/news/tabarruk-ziyorat-loyihasi-doirasida-faoliyat-yuritayotgan-turopearotlarga-platforma-taqdimoti-otkazildi',
  },
]
