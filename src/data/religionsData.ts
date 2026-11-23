export interface Religion {
  id: number
  slug: string
  title: string
  icon: string
  addresses: number
  background: string
}

export const religionsData: Religion[] = [
  {
    id: 1,
    slug: 'islam',
    title: 'Islam',
    icon: '☪',
    addresses: 6,
    background: '/images/religionss/islam.jpg'
  },
  {
    id: 2,
    slug: 'christianity',
    title: 'Christianity',
    icon: '✝',
    addresses: 5,
    background: '/images/religionss/christian.jpg'
  },
  {
    id: 3,
    slug: 'buddhism',
    title: 'Buddhism',
    icon: '☸',
    addresses: 4,
    background: '/images/religionss/budism.jpg'
  }
]