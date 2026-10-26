
<template>
  <section class="countries-section">
    <div class="countries-container">
      <div class="section-heading">
        <h2 class="section-title">Nechta mamlakatlar?</h2>
        <p class="section-description">
          Mavjud bo'lgan barcha mamlakatlar
        </p>
      </div>

      <div class="countries-grid">
        <CCardCountrie
          v-for="country in countries.slice(0, 4)"
          :key="country.router"
          :flag="country.flag"
          :title="country.title"
          :destintaions="country.destintaions"
          :router="country.router"
        />
      </div>

      <div class="countries-grid countries-grid-bottom">
        <CCardCountrie
          v-for="country in countries.slice(4)"
          :key="country.router"
          :flag="country.flag"
          :title="country.title"
          :destintaions="country.destintaions"
          :router="country.router"
        />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import CCardCountrie from '../card/CCountryCard.vue'

interface Country {
  flag: string
  title: string
  destintaions: number
  router: string
}

const countries: Country[] = [
  {
    flag: 'https://flagcdn.com/w160/uz.png',
    title: "O'zbekiston",
    destintaions: 175,
    router: '/uzbekistan'
  },
  {
    flag: 'https://flagcdn.com/w160/tr.png',
    title: 'Turkiya',
    destintaions: 150,
    router: '/turkey'
  },
  {
    flag: 'https://flagcdn.com/w160/tm.png',
    title: 'Turkmaniston',
    destintaions: 20,
    router: '/turkmenistan'
  },
  {
    flag: 'https://flagcdn.com/w160/az.png',
    title: 'Ozarbayjon',
    destintaions: 0,
    router: '/azerbaijan'
  },
  {
    flag: 'https://flagcdn.com/w160/kz.png',
    title: "Qozog'iston",
    destintaions: 51,
    router: '/kazakhstan'
  },
  {
    flag: 'https://flagcdn.com/w160/kg.png',
    title: "Qirg'iziston",
    destintaions: 19,
    router: '/kyrgyzstan'
  },
  {
    flag: 'https://flagcdn.com/w160/hu.png',
    title: 'Vengriya',
    destintaions: 14,
    router: '/hungary'
  }
]
</script>

<style scoped>
.countries-section {
  width: 100%;
  padding: 32px 20px;
  box-sizing: border-box;
  background: #0d0c1d;
  color: #ffffff;
}

.countries-container {
  width: 100%;
  max-width: 1100px;
  margin: 0 auto;
}

.section-heading {
  margin-bottom: 22px;
  text-align: center;
}

.section-title {
  position: relative;
  display: inline-block;
  margin: 0;
  padding-bottom: 8px;
  color: #ffffff;
  font-size: 28px;
  font-weight: 700;
  line-height: 1.3;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background: #e63946;
}

.section-description {
  margin: 10px 0 0;
  color: #b3b3b3;
  font-size: 14px;
  line-height: 1.5;
}

.countries-grid {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 12px;
}

.countries-grid-bottom {
  grid-template-columns: repeat(3, minmax(0, 1fr));
  width: calc(75% - 3px);
  margin: 12px auto 0;
}

.countries-grid :deep(.country-card) {
  width: 100%;
  min-width: 0;
}

@media (max-width: 760px) {
  .countries-section {
    padding: 28px 12px;
  }

  .countries-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 10px;
  }

  .countries-grid-bottom {
    grid-template-columns: repeat(2, minmax(0, 1fr));
    width: 100%;
    margin-top: 10px;
  }

  .section-title {
    font-size: 24px;
  }
}

@media (max-width: 380px) {
  .countries-grid,
  .countries-grid-bottom {
    grid-template-columns: 1fr;
    width: 100%;
  }
}
</style>
