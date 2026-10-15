<template>
  <header class="py-6">
    <div class="container flex items-center justify-between">
      <router-link to="/">
        <img
          class="w-full max-w-92.5"
          src="https://tabarrukziyorat.sayohat.uz/logo/ru.svg"
          alt="Tabarruk Ziyorat"
        />
      </router-link>

      <nav class="relative flex items-center gap-7">
        <ul class="flex items-center gap-7">
          <li
            v-for="el in navList"
            :key="el.name"
            :class="el.router === '/dinlar' || el.key === 'countries' ? 'relative' : ''"
            :data-dinlar-menu="el.router === '/dinlar' ? '' : undefined"
            :data-countries-menu="el.key === 'countries' ? '' : undefined"
          >
            <!-- Dinlar Dropdown Button -->
            <button
              v-if="el.router === '/dinlar'"
              type="button"
              class="cursor-pointer border-0 bg-transparent p-0 text-inherit [font:inherit]"
              :aria-expanded="dinlarOpen"
              aria-haspopup="true"
              @click.stop="toggleDinlar"
            >
              {{ el.name }}
            </button>

            <!-- Davlatlar Dropdown Button -->
            <button
              v-else-if="el.key === 'countries'"
              type="button"
              class="cursor-pointer border-0 bg-transparent p-0 text-inherit [font:inherit] flex items-center gap-1"
              :aria-expanded="countriesOpen"
              aria-haspopup="true"
              @click.stop="toggleCountries"
            >
              {{ el.name }}
            </button>

            <!-- Normal Link -->
            <router-link
              v-else
              :to="el.router"
              @click="closeAllMenus"
            >
              {{ el.name }}
            </router-link>

            <!-- Dinlar Dropdown Content -->
            <div
              v-if="el.router === '/dinlar' && dinlarOpen"
              class="absolute left-1/2 top-full z-50 mt-4 w-[260px] max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-xl border border-[#484B58] bg-[#202333]/95 p-3 shadow-lg"
              @click.stop
            >
              <router-link
                v-for="din in dinlarList"
                :key="din.id"
                :to="din.router"
                class="flex min-h-[77px] items-center gap-3 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/5"
                @click="closeAllMenus"
              >
                <img
                  :src="din.image"
                  :alt="din.name"
                  class="h-12 w-12 shrink-0 rounded-lg object-cover"
                  loading="lazy"
                />

                <div class="min-w-0">
                  <h3 class="text-base font-medium leading-5 text-white">
                    {{ din.name }}
                  </h3>

                  <p class="text-sm font-normal leading-4 text-[#A5A7B2]">
                    {{ din.locationsCount }} Manzillar
                  </p>
                </div>
              </router-link>
            </div>

            <!-- Davlatlar Dropdown Content with flags-svg folder paths -->
            <div
              v-if="el.key === 'countries' && countriesOpen"
              class="absolute left-1/2 top-full z-50 mt-4 w-[320px] max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-xl border border-[#484B58] bg-[#202333]/95 p-3 shadow-2xl"
              @click.stop
            >
              <div class="grid grid-cols-2 gap-2">
                <router-link
                  v-for="country in countriesList"
                  :key="country.id"
                  :to="country.router"
                  class="flex flex-col rounded-lg p-2.5 text-white transition-colors hover:bg-white/5"
                  @click="closeAllMenus"
                >
                  <div class="flex items-center space-x-2">
                    <!-- Flag Image from flags-svg folder -->
                    <img 
                      :src="country.flag" 
                      :alt="country.name" 
                      class="w-6 h-6 rounded-full object-cover shrink-0" 
                    />
                    <span class="text-sm font-medium text-white truncate">{{ country.name }}</span>
                  </div>
                  <span class="text-xs text-[#A5A7B2] mt-1 pl-8">
                    {{ country.locationsCount }} Manzilgoh
                  </span>
                </router-link>
              </div>
            </div>
          </li>
        </ul>

        <CLanguageSwitcher />

        <CSearch
          v-show="inputShow"
          class="absolute right-10"
        />

        <i
          :class="[inputShow ? 'icon-xmark' : 'icon-search']"
          class="cursor-pointer text-2xl"
          @click="inputShow = !inputShow"
        ></i>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useI18n } from 'vue-i18n'

import CLanguageSwitcher from '../ui/CLanguageSwitcher.vue'
import CSearch from '../forms/CSearch.vue'

const { t } = useI18n()

const inputShow = ref(false)
const dinlarOpen = ref(false)
const countriesOpen = ref(false)

const navList = computed(() => [
  { name: t('header.about'), router: '/biz-haqimizda' },
  { name: t('header.countries'), router: '/', key: 'countries' },
  {
    name: t('header.map'),
    router: '/umumiy-xarita'
  },
  { name: t('header.religions'), router: '/dinlar' },
  { name: t('header.help'), router: '/yordam' },
  { name: t('header.faq'), router: '/faq' }
])

interface DinlarItem {
  id: number
  name: string
  image: string
  locationsCount: number
  router: string
}

interface CountryItem {
  id: number
  name: string
  flag: string
  locationsCount: number
  router: string
}

const dinlarList: DinlarItem[] = [
  {
    id: 1,
    name: 'Islam',
    image: '/images/fotos/islam.png',
    locationsCount: 6,
    router: '/dinlar/islam'
  },
  {
    id: 2,
    name: 'Christianity',
    image: '/images/fotos/christianity.png',
    locationsCount: 3,
    router: '/dinlar/christianity'
  },
  {
    id: 3,
    name: 'Buddhism',
    image: '/images/fotos/budhisim.png',
    locationsCount: 2,
    router: '/dinlar/buddhism'
  }
]

const countriesList: CountryItem[] = [
  { id: 1, name: "O'zbekiston", flag: "/images/flags/Uzbekistan.svg", locationsCount: 150, router: "/uzbekistan" },
  { id: 2, name: "Turkmaniston", flag: "/images/flags/Turkmenistan.svg", locationsCount: 0, router: "/turkmenistan" },
  { id: 3, name: "Qozog'iston", flag: "/images/flags/Kazahastan.svg", locationsCount: 0, router: "/kazakhstan" },
  { id: 4, name: "Ozarbayjon", flag: "/images/flags/Azerbayjan.svg", locationsCount: 0, router: "/azerbayjan" },
  { id: 5, name: "Qirg'iziston", flag: "/images/flags/Kirgiz.svg", locationsCount: 0, router: "/kyrgyzstan" },
  { id: 6, name: "Vengriya", flag: "/images/flags/Vengriya.svg", locationsCount: 0, router: "/vengriya" },
]

const closeAllMenus = () => {
  dinlarOpen.value = false
  countriesOpen.value = false
}

const toggleDinlar = () => {
  dinlarOpen.value = !dinlarOpen.value
  countriesOpen.value = false
}

const toggleCountries = () => {
  countriesOpen.value = !countriesOpen.value
  dinlarOpen.value = false
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target

  if (
    target instanceof Element &&
    !target.closest('[data-dinlar-menu]') &&
    !target.closest('[data-countries-menu]')
  ) {
    closeAllMenus()
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeAllMenus()
  }
}

onMounted(() => {
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>