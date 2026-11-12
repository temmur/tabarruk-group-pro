
<template>
  <section class="w-full overflow-hidden py-5">
    <div class="translate-x-120">
      <p class="text-[35px] font-['Playfair_Display'] font-bold">
        {{ t('gallery.title') }}
      </p>

      <p class="text-[14px] text-gray-400 font-bold">
        {{ t('gallery.subtitle') }}
      </p>
    </div>

    <div class="w-full min-h-[400px] py-5 overflow-hidden">

      <!-- 1-qator: o'ngdan chapga -->
      <div class="overflow-hidden">
        <div class="flex w-max gap-[25px] marquee-left">
          <div
            v-for="(image, index) in [...marqueeData.slice(0, 10), ...marqueeData.slice(0, 10)]"
            :key="index"
            class="w-[290px] h-[180px] rounded-xl overflow-hidden shrink-0"
          >
            <img
              :src="image"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              alt="Image"
            />
          </div>
        </div>
      </div>

      <!-- 2-qator: chapdan o'ngga -->
      <div class="overflow-hidden mt-5">
        <div class="flex w-max gap-[25px] marquee-right">
          <div
            v-for="(image, index) in [...marqueeData.slice(10, 20), ...marqueeData.slice(10, 20)]"
            :key="index"
            class="w-[290px] h-[180px] rounded-xl overflow-hidden shrink-0"
          >
            <img
              :src="image"
              class="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
              alt="Image"
            />
          </div>
        </div>
      </div>

    </div>
  </section>

  <CInstagram />
</template>

<script setup lang="ts">
import { marqueeData } from '@/data/marqueeData'
import CInstagram from './CInstagram.vue'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<style scoped>
.marquee-left {
  animation: move-left 130s linear infinite;
}

.marquee-right {
  animation: move-right 130s linear infinite;
}

@keyframes move-left {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-50%);
  }
}

@keyframes move-right {
  from {
    transform: translateX(-50%);
  }
  to {
    transform: translateX(0);
  }
}

.marquee-left:hover,
.marquee-right:hover {
  animation-play-state: paused;
}
</style>
