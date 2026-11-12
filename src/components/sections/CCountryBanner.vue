
<template>
  <div>
    <div
      class="relative min-h-screen bg-no-repeat bg-cover bg-center overflow-hidden"
      :style="{ backgroundImage: `url('${country.image}')` }"
    >
      <div class="absolute inset-0 bg-black/60 z-10"></div>

      <img
        src="/images/vectors/Vector(7).svg"
        alt=""
        class="absolute z-20"
      />

      <div
        class="absolute top-1/2 left-1/2
        -translate-x-1/2 -translate-y-1/2
        w-full px-5 text-center z-30"
      >
        <h1
          class="text-4xl md:text-6xl font-bold
          font-serif text-white mb-6"
        >
          {{ t(`countries.${countryKeys[Number(country.id)]}.title`) }}
        </h1>

        <p
          class="text-base md:text-xl font-semibold
          text-white max-w-4xl mx-auto"
        >
          {{ t(`countries.${countryKeys[Number(country.id)]}.description`) }}
        </p>

        <CButton
          class="relative top-5"
          :text="t('gallery.watchVideo') + ' ▷'"
          size="xl"
          variant="primary"
        />
      </div>

      <div
        class="absolute bottom-10 left-1/2
        -translate-x-1/2 z-30
        flex flex-wrap justify-center
        gap-5 w-full px-4"
      >
        <CCards
          v-for="(val, idx) in bannerCardData"
          :key="idx"
          :title="val.title"
          :icon="val.icon"
          :statistic="val.statistic"
        />
      </div>
    </div>

    <section class="w-full py-10 overflow-hidden">
      <div class="w-full overflow-hidden">
        <div
          class="flex gap-5 transition-transform duration-1000 ease-in-out"
          :style="{
            transform: `translateX(-${currentIndex * 320}px)`
          }"
        >
          <CCaruselCards
            v-for="item in carouselData"
            :key="item.id"
            :image="item.image"
            :title="item.title"
            :country="item.country"
            :description="item.description"
          />
        </div>
      </div>
    </section>
  </div>

  <CMarquee />
</template>

<script setup lang="ts">
import { computed, ref, onMounted, onUnmounted } from 'vue'

import CButton from '../forms/CButton.vue'
import CCards from '../cards/CCards.vue'
import CCaruselCards from '../cards/CCaruselCards.vue'
import CMarquee from '../CMarquee.vue'

import { useI18n } from 'vue-i18n'

const { t } = useI18n()

const props = defineProps<{
  country: {
    title: string
    flag: string
    destintaions: number
    image?: string
    id?: number | string
    description: string
    attractions: number
    population: number | string
  }
}>()

// Davlat ID larini tarjima kalitlariga bog'laymiz
const countryKeys: Record<number, string> = {
  1: 'uzbekistan',
  2: 'turkey',
  3: 'turkmenistan',
  4: 'azerbaijan',
  5: 'kazakhstan',
  6: 'kyrgyzstan',
  7: 'hungary'
}

// Statistik kartochkalar
const bannerCardData = computed(() => [
  {
    title: t('gallery.attractions'),
    icon: 'fa-solid fa-mosque',
    statistic: props.country.attractions
  },
  {
    title: t('gallery.population'),
    icon: 'fa-solid fa-people-group',
    statistic: props.country.population
  }
])

// Carousel
const carouselData = [
  {
    id: 1,
    image: '/images/Cards/CHeroCard/country1.webp',
    title: 'Eiffel Tower',
    country: 'France',
    description: 'France ning mashhur minorasi'
  },
  {
    id: 2,
    image: '/images/Cards/CHeroCard/country2.webp',
    title: 'Colosseum',
    country: 'Italy',
    description: 'Qadimiy Rim amfiteatri'
  },
  {
    id: 3,
    image: '/images/Cards/CHeroCard/country3.webp',
    title: 'Big Ben',
    country: 'England',
    description: 'Londonning mashhur soat minorasi'
  },
  {
    id: 4,
    image: '/images/Cards/CHeroCard/country4.webp',
    title: 'Leaning Tower of Pisa',
    country: 'Italy',
    description: 'Mashhur Pisa minorasi'
  },
  {
    id: 5,
    image: '/images/Cards/CHeroCard/country5.webp',
    title: 'Notre-Dame Cathedral',
    country: 'France',
    description: 'Tarixiy sobor'
  },
  {
    id: 6,
    image: '/images/Cards/CHeroCard/country7.webp',
    title: 'Acropolis',
    country: 'Greece',
    description: 'Qadimiy tarixiy majmua'
  },
  {
    id: 7,
    image: '/images/Cards/CHeroCard/country6.webp',
    title: 'Sagrada Familia',
    country: 'Spain',
    description: 'Barselonadagi mashhur bazilika'
  },
  {
    id: 8,
    image: '/images/Cards/CHeroCard/country8.webp',
    title: 'Stonehenge',
    country: 'England',
    description: 'Qadimiy tosh yodgorligi'
  },
  {
    id: 9,
    image: '/images/Cards/CHeroCard/fake1.jpeg',
    title: 'Brandenburg Gate',
    country: 'Germany',
    description: 'Berlinning tarixiy darvozasi'
  },
  {
    id: 10,
    image: '/images/Cards/CHeroCard/fake2.jpeg',
    title: 'Charles Bridge',
    country: 'Czech Republic',
    description: 'Pragadagi tarixiy ko‘prik'
  }
]

const currentIndex = ref(0)

let timer: ReturnType<typeof setInterval> | undefined

onMounted(() => {
  timer = setInterval(() => {
    if (currentIndex.value < carouselData.length - 6) {
      currentIndex.value++
    } else {
      currentIndex.value = 0
    }
  }, 6000)
})

onUnmounted(() => {
  if (timer) {
    clearInterval(timer)
  }
})
</script>
