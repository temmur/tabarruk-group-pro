
export type News = {
  id: number
  image: string
  title: string
  subtitle: string
  content: string
  createdAt: number | string
  views: number
  router: string
}

export const news: News[] = [
  {
    id: 1,
    image: '/images/nevs1.jpg',
    title:
      '2025-yil 18-fevral kuni O‘zbekistondagi Amirsoy tog‘-chang‘i kurortida chang‘i bo‘yicha Turkiy davlatlar kubogi bo‘lib o‘tadi.',
    subtitle:
      'Amirsoy tog‘-chang‘i kurortida Turkiy davlatlar kubogi.',
    content: `2025-yil 18-fevral kuni O‘zbekistondagi Amirsoy tog‘-chang‘i kurortida chang‘i bo‘yicha Turkiy davlatlar kubogi bo‘lib o‘tishi rejalashtirilgan.

Mazkur tadbir Turkiy davlatlar o‘rtasidagi sport hamkorligini rivojlantirish va qishki sport turlariga bo‘lgan qiziqishni oshirishga qaratilgan.

Tadbirning batafsil dasturi va ishtirokchilari haqidagi ma’lumotlar tegishli manbalar asosida to‘ldirilishi mumkin.`,
    createdAt: '2025-02-18',
    views: 95,
    router: '/news/1',
  },
  {
    id: 2,
    image: '/images/nevs2.jpg',
    title: 'Elchi Kubanichbek Omuraliyev bilan suhbat',
    subtitle:
      'Turkiy davlatlar tashkiloti Bosh kotibining TDT faoliyati haqidagi fikrlari.',
    content: `Turkiy davlatlar tashkiloti Bosh kotibi, elchi Kubanichbek O‘muraliyev bilan suhbat tashkilot faoliyati va turkiy davlatlar o‘rtasidagi hamkorlik masalalariga bag‘ishlangan.

Suhbatda tashkilotning asosiy yo‘nalishlari, davlatlar o‘rtasidagi aloqalarni mustahkamlash va kelgusidagi hamkorlik imkoniyatlari haqida ma’lumot beriladi.

Suhbatning to‘liq matnini mavjud rasmiy manbadan olingan ma’lumotlar bilan to‘ldiring.`,
    createdAt: '2025-02-03',
    views: 64,
    router: '/news/2',
  },
  {
    id: 3,
    image: '/images/nevs3.jpg',
    title:
      '“Tabarruk ziyorat” loyihasi doirasida faoliyat yuritayotgan turoperatorlarga platforma taqdimoti o‘tkazildi',
    subtitle:
      'Ziyorat turizmi yo‘nalishida faoliyat yurituvchi turoperatorlar uchun platforma taqdimoti.',
    content: `“Tabarruk ziyorat” loyihasi doirasida faoliyat yuritayotgan turoperatorlarga platforma taqdimoti o‘tkazildi.

Taqdimot ziyorat turizmini rivojlantirish, turoperatorlar faoliyatini qo‘llab-quvvatlash va zamonaviy platformalar orqali hamkorlikni kengaytirishga qaratilgan.

Tadbir tafsilotlari va O‘zbekiston Respublikasi Prezidentining 2022-yil 29-iyuldagi tegishli hujjati haqidagi aniq ma’lumotlarni rasmiy manba asosida to‘ldiring.`,
    createdAt: '2024-03-11',
    views: 42,
    router: '/news/3',
  },
]
  