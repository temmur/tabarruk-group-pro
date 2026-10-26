<template>
  <RouterLink :to="router" class="country-card">
    <div class="flag-container">
      <img :src="flag" :alt="`${title} flag`" loading="lazy" />
    </div>

    <h3 class="country-title">{{ title }}</h3>

    <p class="country-destinations">
      {{ destintaions }} Manzillar
    </p>
  </RouterLink>
</template>

<script setup lang="ts">
defineProps<{
  flag: string
  title: string
  destintaions: number
  router: string
}>()
</script>

<style scoped>
.country-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 180px;
  min-height: 180px;
  padding: 16px 10px;
  box-sizing: border-box;
  overflow: hidden;
  border: 1px solid transparent;
  border-radius: 12px;
  background: transparent;
  text-decoration: none;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    border-color 0.3s ease,
    box-shadow 0.3s ease,
    transform 0.3s ease;
}

.country-card::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: #ffffff;
  transform: scaleX(0);
  transform-origin: center;
  transition: transform 0.3s ease;
}

.country-card:hover,
.country-card:focus-visible {
  background: #121323;
  border-color: rgba(255, 255, 255, 0.04);
  box-shadow:
    0 0 20px rgba(100, 116, 139, 0.13),
    0 8px 22px rgba(0, 0, 0, 0.25);
  transform: translateY(-2px);
}

.country-card:hover::after,
.country-card:focus-visible::after {
  transform: scaleX(1);
}

.flag-container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 76px;
  height: 76px;
  flex-shrink: 0;
  overflow: hidden;
  margin-bottom: 12px;
  border: 4px solid #343747;
  border-radius: 50%;
  background: #17162b;
  transition:
    border-color 0.3s ease,
    box-shadow 0.3s ease;
}

.country-card:hover .flag-container,
.country-card:focus-visible .flag-container {
  border-color: #454957;
  box-shadow: 0 0 16px rgba(255, 255, 255, 0.08);
}

.flag-container img {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.country-title {
  margin: 0 0 4px;
  color: #ffffff;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.4;
  text-align: center;
}

.country-destinations {
  margin: 0;
  color: #a3a3b2;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.5;
  text-align: center;
}

@media (max-width: 480px) {
  .country-card {
    height: 165px;
    min-height: 165px;
    padding: 12px 6px;
  }

  .flag-container {
    width: 62px;
    height: 62px;
    margin-bottom: 10px;
  }

  .country-title {
    font-size: 14px;
  }

  .country-destinations {
    font-size: 12px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .country-card,
  .country-card::after,
  .flag-container {
    transition: none;
  }
}
</style>