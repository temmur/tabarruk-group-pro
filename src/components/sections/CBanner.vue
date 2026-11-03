```vue
<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center relative overflow-hidden"
    :style="{ backgroundImage: `url(${currentBanner.image})` }"
  >
    <!-- Qorong'i fon -->
    <div class="bg-[#070A1C]/40 absolute inset-0 z-[2]"></div>


    <!-- Dekorativ rasm -->
    <img
      src="/images/vectors/Vector(7).svg"
      alt=""
      class="absolute z-20"
    />

    <!-- Asosiy banner -->
    <div class="container relative -top-20">
      <div
        class="h-screen flex flex-col items-center justify-center relative z-[6] text-white"
      >
        <p class="flex items-center gap-2 text-xl">
          <i class="icon-map-pin"></i>
          {{ currentBanner.city }}, {{ currentBanner.country }}
        </p>

        <h1 class="text-4xl md:text-6xl font-extrabold my-8 text-center">
          {{ currentBanner.destination }}
        </h1>

        <p class="text-center text-base md:text-xl max-w-3xl px-4">
          {{ currentBanner.description }}
        </p>

        <CButton
          variant="secondary"
          size="xl"
          class="mt-6"
          style="background-color: red; padding: 23px 15px; font-size: 20px"
        >
          <template #suffix>
            <i class="icon-arrow-right"></i>
          </template>
        </CButton>
      </div>

      <!-- Banner raqamlari va progress -->
      <div
        class="absolute right-6 top-1/2 z-20 flex -translate-y-1/2 flex-col items-center gap-3 text-white"
      >
        <span class="text-sm font-medium">
          {{ String(currentStep + 1).padStart(2, '0') }}
        </span>

        <div
          class="relative h-32 w-[3px] overflow-hidden rounded-full bg-white/30"
        >
          <div
            :key="currentStep"
            class="absolute left-0 top-0 w-full rounded-full bg-white progress-line"
          ></div>
        </div>

        <span class="text-sm font-medium">
          {{ String(bannerMosques.length).padStart(2, '0') }}
        </span>
      </div>
    </div>

    <!-- Pastki karusel -->
    <div class="absolute bottom-12 left-0 z-30 w-full">
      <Carousel v-bind="carouselConfig">
        <Slide
          v-for="slide in cards"
          :key="slide.id"
          class="slider"
        >
          <CBannerCard :item="slide" />
        </Slide>
      </Carousel>
    </div>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount,
} from 'vue'

import { useRouter } from 'vue-router'

import 'vue3-carousel/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

import CBannerCard from '../cards/CBannerCard.vue'
import CButton from '../forms/CButton.vue'

const router = useRouter()

// Orqaga qaytish
const goBack = () => {
  router.back()
}

// Karusel sozlamalari
const carouselConfig = {
  itemsToShow: 1.2,
  wrapAround: true,
  autoplay: 3000,
  transition: 500,
  snapAlign: 'start' as const,

  breakpoints: {
    640: {
      itemsToShow: 2.2,
    },

    1024: {
      itemsToShow: 3.5,
    },
  },
}

// Asosiy banner ma'lumotlari
const currentStep = ref(0)

const bannerMosques = ref([
  {
    country: "O'zbekiston",
    city: 'Namangan viloyati',
    destination: 'Sulton Uvays Qaroniy Masjidi',

    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos necessitatibus veniam temporibus quam enim saepe nisi.',

    image:
      'https://uzbekistan.travel/storage/app/media/Otabek/Sulton%20uvays%20qoraniy/cropped-images/DJI_0097-0-0-0-0-1724066827.jpg',
  },

  {
    country: "O'zbekiston",
    city: 'Samarqand viloyati',
    destination: 'Registon',

    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos necessitatibus veniam temporibus quam enim saepe nisi.',

    image:
      'https://statics.getnofilter.com/photos/regular/75593ee9-7ca8-4f6e-8676-41b6a38960a4.jpg',
  },

  {
    country: "Qozog'iston",
    city: 'Turkiston viloyati',
    destination: "O'trar shahri",

    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos necessitatibus veniam temporibus quam enim saepe nisi.',

    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/3_zL7Uu07.jpg',
  },
])

// Karusel kartochkalari
const cards = [
  {
    id: 1,
    location: 'Zhambyl region, Kazakhstan',
    title: 'Ancient Taraz',
    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/%D0%A0%D0%B8%D1%81%D1%83%D0%BD%D0%BE%D0%BA3_W24FO57.jpg',
  },

  {
    id: 2,
    location: 'Kazakhstan',
    title: 'Auliye-bastau',
    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/Screenshot_20190819-152258_Google.jpg',
  },

  {
    id: 3,
    location: 'Uzbekistan',
    title: 'Ahtamsohob',
    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/e72a32a4e5fa6016ced565677acfc453.jpg',
  },

  {
    id: 4,
    location: 'Turkmenistan',
    title: 'Abiwerd',
    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/Axtam_Sahoba_Adhamsahoba.jpg',
  },

  {
    id: 5,
    location: 'Kazakhstan',
    title: 'Balasagun',
    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/IMG_6383.jpg',
  },

  {
    id: 6,
    location: 'Turkiston viloyati, Qozoq shaharchasi',
    title: "O'trar shahar",
    image:
      'https://invest-in-uzbekistan.org/wp-content/uploads/The-minaret-and-the-fortress-of-Bukhara-14-1200x800-c.jpg',
  },

  {
    id: 7,
    location: 'Qadimgi Taraz shaharchasi',
    title: 'Balasagun',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiONmZY9nM7rlct2bUIHId0PkpQtkWRQLrsv1mYThaUw&s',
  },

  {
    id: 8,
    location: 'Kazakhstan',
    title: 'Balasagun',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfmPQCs-T7_WLyVsPh6rlX04iPBBGCBgGx9O8FqzCkVg&s=10',
  },

  {
    id: 9,
    location: 'Kazakhstan',
    title: 'Balasagun',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUs1CTva8dc6RXoBrytpEXcZ-07ngg6CgVYD196Ym7Vw&s=10',
  },

  {
    id: 10,
    location: 'Kazakhstan',
    title: 'Balasagun',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzdOmVYbwqcfZ1xymlg5EgE8Vx-FYLfyCb2yZ-3cqI4A&s=10',
  },
]

// Hozirgi banner
const currentBanner = computed(() => {
  return bannerMosques.value[currentStep.value]
})

// Banner avtomatik almashishi
let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentStep.value =
      (currentStep.value + 1) % bannerMosques.value.length
  }, 5000)
})

// Komponent yopilganda intervalni to'xtatish
onBeforeUnmount(() => {
  if (intervalId) {
    clearInterval(intervalId)
  }
})
</script>

<style scoped>
.progress-line {
  height: 0%;
  animation: progress 5s linear forwards;
}

@keyframes progress {
  from {
    height: 0%;
  }

  to {
    height: 100%;
  }
}
</style>
```