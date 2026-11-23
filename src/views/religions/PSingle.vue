<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { religionsData } from '@/data/religionsData'
import { countries } from '@/data/countryData.ts'
import CCardCountrie from '@/components/card/CCountryCard.vue'

const route = useRoute()

const religion = computed(() => {
  return religionsData.find(
    item => item.slug === route.params.slug
  )
})
</script>

<template>
  <template v-if="religion">
    <!-- Hero -->
    <section
      class="relative min-h-screen w-full overflow-hidden bg-cover bg-center bg-no-repeat text-white"
      :style="{
        backgroundImage: `url('${religion.background}')`
      }"
    >
      <div class="absolute inset-0 bg-black/50"></div>

      <div class="relative z-10 container mx-auto px-4 pt-32 pb-12">

        <!-- Breadcrumb -->
        <div class="flex items-center gap-2 text-sm text-white/80">
          <RouterLink
            to="/"
            class="flex items-center gap-2 transition hover:text-red-400"
          >
            <span>⌂</span>
            <span>Asosai</span>
          </RouterLink>

          <span class="text-white/40">/</span>

          <RouterLink
            to="/dinlar"
            class="transition hover:text-red-400"
          >
            Religions
          </RouterLink>

          <span class="text-white/40">/</span>

          <span class="text-white">
            {{ religion.title }}
          </span>
        </div>

        <!-- Main content -->
        <div class="flex min-h-[70vh] items-center justify-center">
          <div class="text-center">
            <div class="mb-5 text-7xl md:text-8xl">
              {{ religion.icon }}
            </div>

            <h1 class="text-5xl font-bold tracking-wide md:text-7xl">
              {{ religion.title }}
            </h1>

            <p class="mt-4 text-lg text-white/80">
              {{ religion.title }}
            </p>
          </div>
        </div>

        <!-- Bottom cards -->
        <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <div
            class="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md transition duration-300 hover:bg-white/[0.15]"
          >
            <h2 class="mb-3 text-3xl font-semibold">
              {{ religion.addresses }}
            </h2>
            <p class="text-white/70">Religious destinations</p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md transition duration-300 hover:bg-white/[0.15]"
          >
            <h2 class="mb-3 text-3xl font-semibold">
              {{ religion.title }}
            </h2>
            <p class="text-white/70">Explore religious places</p>
          </div>

          <div
            class="rounded-2xl border border-white/10 bg-white/[0.08] p-6 backdrop-blur-md transition duration-300 hover:bg-white/[0.15]"
          >
            <h2 class="mb-3 text-3xl font-semibold">Explore</h2>
            <p class="text-white/70">Discover sacred destinations</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Davlatlar (same card + same style as your countries section) -->
    <section class="countries-section">
      <div class="countries-container">
        <div class="section-heading">
          <h2 class="section-title">Davlatlar</h2>
        </div>

        <div class="countries-grid">
          <CCardCountrie
            v-for="country in countries.slice(0, 4)"
            :key="country.id"
            :flag="country.flag"
            :title="country.title"
            :destintaions="country.destintaions"
            :router="country.router"
          />
        </div>

        <div class="countries-grid countries-grid-bottom">
          <CCardCountrie
            v-for="country in countries.slice(4)"
            :key="country.id"
            :flag="country.flag"
            :title="country.title"
            :destintaions="country.destintaions"
            :router="country.router"
          />
        </div>
      </div>
    </section>
  </template>

  <!-- Religion not found -->
  <section
    v-else
    class="flex min-h-screen items-center justify-center bg-[#08091d] px-4 text-white"
  >
    <div class="text-center">
      <h1 class="text-3xl font-semibold">Religion not found</h1>

      <RouterLink
        to="/dinlar"
        class="mt-5 inline-block text-white/70 transition hover:text-white"
      >
        ← Back to religions
      </RouterLink>
    </div>
  </section>
</template>

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