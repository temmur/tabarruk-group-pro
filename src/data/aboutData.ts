export interface AboutStatistic {
  id: number
  statistic: number | string
  title: string
  image: string
}

export interface AboutStatement {
  id: number
  name: string
  role: string
  quote: string
  image: string
}

export interface AboutPromoVideo {
  /** Heading above the video block */
  title: string
  /** Text on the big button, e.g. 'WATCH NOW' (it is split around the play icon) */
  buttonLabel: string
  /** Heading inside the pop-up */
  modalTitle: string
  /** Accessible title of the video player */
  videoTitle: string
  /** Background photo of the section */
  background: string
  /** YouTube link (watch?v=, youtu.be/, embed/) or just the 11-character video ID */
  youtubeUrl: string
}

export const aboutData = {
  title: 'Biz haqimizda',

  images: [
    '/img1.jpg',
    '/img2.jpg',
    '/img3.jpg',
    '/img4.jpg',
    '/img5.jpg',
  ],

  stats: [
    {
      id: 1,
      title: 'Diqqatga sazovor joylar',
      statistic: 27,
      image: '/images/mosque/fa-solid_mosque.svg',
    },
    {
      id: 2,
      title: 'Manzillar',
      statistic: 402,
      image: '/images/mask-svg/Mask group.svg',
    },
    {
      id: 3,
      title: 'Davlatlar',
      statistic: 7,
      image: '/images/mask-svg/Mask group (1).svg',
    },
  ] as AboutStatistic[],

  // "Promo Video" section (button opens a pop-up with the YouTube video)
  promoVideo: {
    title: 'Tabarruk ziyorat haqida Promo Video',
    buttonLabel: 'WATCH NOW',
    modalTitle: 'Turkiy mamlakatlarning qimmatli, tarixiy va merosi joylarini o‘rganing',
    videoTitle: 'Inside Uzbekistan: Culture, City Life, Economy & Traditions',
    background: '/images/registon.jpg',
    // Any YouTube link works (watch?v=, youtu.be/, embed/) or just the video ID
    youtubeUrl: 'https://youtu.be/HW059JukzMY?si=qd1k7bbIl4YGhwvD',
  } as AboutPromoVideo,

  statementsTitle: 'Bayonotlar',
  statementsSubtitle: 'Biz vakillik qiladigan barcha davlatlar',

  // Carousel auto-change interval in milliseconds. Set to 0 to turn autoplay off.
  statementsAutoplayMs: 6000,

  statements: [
    {
      id: 1,
      name: 'Katalin Novak',
      role: 'Vengriya prezidenti',
      quote: 'Let us admit: in the Western world, women today have similar chance for success as men. In terms of education career, in terms of progress in employmeent. The real difference is giving or not giving birth  .',
      image: '/images/Presidents/Katalin Novak.jpg',
    },
    {
      id: 2,
      name: 'Shavkat Mirziyoyev',
      role: 'O‘zbekiston Respublikasi prezidenti',
      quote: 'To seat in love with the achievments is the greatest cave on the path of progress.',
      image: '/images/Presidents/Shavkat Mirziyoyev.jpg',
    },
    {
      id: 3,
      name: 'Recep Erdogan',
      role: 'Turkiya prezidenti',
      quote: 'A political porty cannot have a religion. Only individuals can. Otherwise, you would be exploiting religion, and religion is soo supreme that it cannot be exploited or taken advantage of.',
      image: '/images/Presidents/Recep Ergogan.jpg',
    },
  ] as AboutStatement[],
}