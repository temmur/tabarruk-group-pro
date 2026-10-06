<template>
  <div
    class="min-h-screen bg-no-repeat bg-cover bg-center relative"
    :style="{ backgroundImage: `url(${currentBanner.image})` }"
  >
    <div class="bg-[#070A1C]/40 z-2 absolute w-screen h-screen"></div>

    <img
      src="/images/vectors/Vector(7).svg"
      alt=""
      class="absolute z-20"
    />

    <div class="container relative">
      <div class="h-screen flex flex-col items-center justify-center relative z-6!">
        <p class="flex items-center gap-2 text-xl">
          <i class="icon-map-pin"></i>
          {{ currentBanner?.city }}, {{ currentBanner?.country }}
        </p>

        <h1 class="text-6xl font-extrabold my-8">
          {{ currentBanner?.destination }}
        </h1>

        <p class="text-center text-xl">
          {{ currentBanner?.description }}
        </p>

        <CButton variant="secondary" size="xl" class="mt-6">
          <template #suffix>
            <i class="icon-arrow-right"></i>
          </template>
        </CButton>
      </div>

      <!-- RIGHT PROGRESS -->
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
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  computed,
  onMounted,
  onBeforeUnmount
} from 'vue'

import CButton from '../forms/CButton.vue'

const currentStep = ref(0)

const bannerMosques = ref([
  {
    country: "O'zbekiston",
    city: "Namangan viloyati",
    destination: 'Sulton Uvays Qaroniy Masjidi',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos necessitatibus veniam temporibus quam enim saepe nisi.',
    image:
      'https://uzbekistan.travel/storage/app/media/Otabek/Sulton%20uvays%20qoraniy/cropped-images/DJI_0097-0-0-0-0-1724066827.jpg'
  },
  {
    country: "O'zbekiston",
    city: "Samarqand viloyati",
    destination: 'Registon',
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos necessitatibus veniam temporibus quam enim saepe nisi.',
    image:
      'https://statics.getnofilter.com/photos/regular/75593ee9-7ca8-4f6e-8676-41b6a38960a4.jpg'
  },
  {
    country: "Qozog'iston",
    city: "Turkiston viloyati",
    destination: "O'trar shahri",
    description:
      'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos necessitatibus veniam temporibus quam enim saepe nisi.',
    image:
      'https://admin.tabarrukziyorat.uz/media/destination_images/3_zL7Uu07.jpg'
  }
])

const currentBanner = computed(() => {
  return bannerMosques.value[currentStep.value]
})

let intervalId: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  intervalId = setInterval(() => {
    currentStep.value =
      (currentStep.value + 1) % bannerMosques.value.length
  }, 5000)
})

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