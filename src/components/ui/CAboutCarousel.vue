<template>
  <section class="about-section">

    <div class="image-carousel">

      <div
        v-for="(image, index) in images"
        :key="index"
        class="image-item"
        :class="{ expanded: hovered === index }"
        @mouseenter="hovered = index"
        @mouseleave="hovered = null"
      >

        <img
          :src="image"
          :alt="`Historical place ${index + 1}`"
        >

      </div>

    </div>

  </section>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const hovered = ref<number | null>(null)

const images = [
  'public/img1.jpg',
  'public/img2.jpg',
  'public/img3.jpg',
  'public/img4.jpg',
  'public/img5.jpg'
]
</script>

<style scoped>

.about-section {
  width: 100%;
  height: 245px;
  position: relative;
}

.image-carousel {
  width: 490px;
  height: 280px;

  display: flex;
  gap: 5px;

  overflow: hidden;

  margin-left: 600px;

  transform: translateY(-100px);
}

.image-item {
  height: 100%;
  min-width: 70px;
  flex: 1;

  overflow: hidden;
  border-radius: 7px;

  cursor: pointer;

  transition:
    flex 0.2s ease,
    min-width 0.2s ease;
}

.image-item.expanded {
  flex: 3;
  min-width: 130px;
}

.image-item img {
  width: 100%;
  height: 100%;

  display: block;

  object-fit: cover;

  transition: transform 0.6s ease;
}

.image-item.expanded img {
  transform: scale(1.05);
}

</style>