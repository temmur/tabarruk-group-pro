
<template>
  <div
    class="carousel-card relative group
    shrink-0 w-[300px] h-[300px]
    overflow-hidden rounded-xl cursor-pointer"
  >
    <img
      :src="image"
      :alt="title"
      class="w-full h-full object-cover
      transition-transform duration-500
      group-hover:scale-110"
    />

    <div
      class="absolute inset-0
      flex flex-col justify-end
      p-5 text-white
      bg-gradient-to-t
      from-black/80 via-black/20 to-transparent"
    >
      <h1
        class="text-xl font-bold
        transition-transform duration-300
        group-hover:-translate-y-3"
      >
        {{ title }}
      </h1>

      <p
        class="text-sm
        transition-transform duration-300
        group-hover:-translate-y-3"
      >
        {{ country }}
      </p>

      <p
        class="translate-y-full opacity-0
        transition-all duration-500
        group-hover:translate-y-0
        group-hover:opacity-100"
      >
        {{ description }}
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps<{
  image: string
  title: string
  country: string
  description: string
}>()
</script>

<style scoped>
.carousel-card {
  flex: 0 0 300px;
}
</style>
