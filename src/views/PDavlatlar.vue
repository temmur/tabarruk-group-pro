
<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import CCountryCard from '@/components/card/CCountryCard.vue'

const route = useRoute()

const isCountryPage = computed(() => {
  return [
    '/uzbekistan',
    '/turkey',
    '/turkmenistan',
    '/azerbaijan',
    '/kazakhstan',
    '/kyrgyzstan',
    '/hungary'
  ].includes(route.path)
})

const countries = [
  {
    title: "O'zbekiston",
    flag: '/images/fotos/uzbekistan.png',
    destintaions: 175,
    router: '/uzbekistan'
  },
  {
    title: 'Turkiya',
    flag: '/images/fotos/turkey.png',
    destintaions: 150,
    router: '/turkey'
  },
  {
    title: 'Turkmaniston',
    flag: '/images/fotos/turkmenistan.png',
    destintaions: 20,
    router: '/turkmenistan'
  },
  {
    title: 'Ozarbayjon',
    flag: '/images/fotos/azerbaijan.png',
    destintaions: 0,
    router: '/azerbaijan'
  },
  {
    title: "Qozog'iston",
    flag: '/images/fotos/kazakhstan.png',
    destintaions: 51,
    router: '/kazakhstan'
  },
  {
    title: "Qirg'iziston",
    flag: '/images/fotos/kyrgyzstan.png',
    destintaions: 19,
    router: '/kyrgyzstan'
  },
  {
    title: 'Vengriya',
    flag: '/images/fotos/hungary.png',
    destintaions: 14,
    router: '/hungary'
  }
]
</script>

<template>
  <main v-if="isCountryPage" class="empty-country-page"></main>

  <main v-else class="countries-page">
    <section class="countries-section">
      <h1 class="section-title">
        Nechta mamlakatlar?
      </h1>

      <p class="section-subtitle">
        Mavjud bo'lgan barcha mamlakatlar
      </p>

      <div class="countries-grid">
        <CCountryCard
          v-for="country in countries"
          :key="country.title"
          :flag="country.flag"
          :title="country.title"
          :destintaions="country.destintaions"
          :router="country.router"
        />
      </div>
    </section>
  </main>
</template>

<style scoped>
.empty-country-page {
  width: 100%;
  min-height: 100vh;
  background: #ffffff;
}

.countries-page {
  min-height: 100vh;
  padding: 20px 24px 60px;
  background: #08091b;
  color: white;
}

.countries-section {
  max-width: 1100px;
  margin: 0 auto;
}

.section-title {
  width: fit-content;
  margin: 0 auto;
  padding-bottom: 5px;
  border-bottom: 2px solid #ff4655;
  font-family: Georgia, serif;
  font-size: 38px;
  font-weight: 700;
  text-align: center;
}

.section-subtitle {
  margin: 12px 0 60px;
  font-size: 18px;
  text-align: center;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  justify-items: center;
  gap: 60px 30px;
}

@media (max-width: 768px) {
  .countries-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 40px 16px;
  }

  .section-title {
    font-size: 30px;
  }

  .section-subtitle {
    margin-bottom: 40px;
  }
}

@media (max-width: 380px) {
  .countries-page {
    padding-right: 10px;
    padding-left: 10px;
  }

  .countries-grid {
    gap: 32px 8px;
  }
}
</style>
