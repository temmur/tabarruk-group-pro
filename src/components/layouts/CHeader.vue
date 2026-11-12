
<template>
  <header
    class="fixed left-0 top-0 z-[1000] w-full py-6 text-white
           transition-[background-color,box-shadow,backdrop-filter]
           duration-500 ease-in-out"
    :class="
      isScrolled
        ? 'bg-[#08091d]/95 shadow-lg backdrop-blur-sm'
        : 'bg-transparent shadow-none backdrop-blur-none'
    "
  >
    <div class="container flex items-center justify-between">
      <RouterLink to="/" @click="closeAllMenus">
        <img
          class="w-full max-w-92.5"
          src="https://tabarrukziyorat.sayohat.uz/logo/ru.svg"
          alt="Tabarruk Ziyorat"
        />
      </RouterLink>

      <nav class="relative flex items-center gap-7">
        <ul class="flex items-center gap-7">
          <li
            v-for="item in navList"
            :key="item.key"
            class="relative"
            :data-dinlar-menu="
              item.key === 'religions' ? '' : undefined
            "
            :data-countries-menu="
              item.key === 'countries' ? '' : undefined
            "
          >
            <button
              v-if="item.key === 'religions'"
              type="button"
              class="cursor-pointer border-0 bg-transparent p-0 text-inherit [font:inherit]"
              :aria-expanded="dinlarOpen"
              aria-haspopup="true"
              @click.stop="toggleDinlar"
            >
              {{ item.name }}
            </button>

            <button
              v-else-if="item.key === 'countries'"
              type="button"
              class="flex cursor-pointer items-center gap-1 border-0 bg-transparent p-0 text-inherit [font:inherit]"
              :aria-expanded="countriesOpen"
              aria-haspopup="true"
              @click.stop="toggleCountries"
            >
              {{ item.name }}
            </button>

            <RouterLink
              v-else
              :to="item.router"
              @click="closeAllMenus"
            >
              {{ item.name }}
            </RouterLink>

            <!-- Religions dropdown -->
            <div
              v-if="item.key === 'religions' && dinlarOpen"
              class="absolute left-1/2 top-full z-[1001] mt-4 w-[260px] max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-xl border border-[#484B58] bg-[#202333]/95 p-3 text-white shadow-lg"
              @click.stop
            >
              <RouterLink
                v-for="religion in dinlarList"
                :key="religion.id"
                :to="religion.router"
                class="flex min-h-[77px] items-center gap-3 rounded-lg px-3 py-2 text-white transition-colors hover:bg-white/5"
                @click="closeAllMenus"
              >
                <img
                  :src="religion.image"
                  :alt="religion.name"
                  class="h-12 w-12 shrink-0 rounded-lg object-cover"
                  loading="lazy"
                />

                <div class="min-w-0">
                  <h3 class="text-base font-medium leading-5">
                    {{ religion.name }}
                  </h3>

                  <p class="text-sm font-normal leading-4 text-[#A5A7B2]">
                    {{ religion.locationsCount }}
                    {{ t('header.destinations') }}
                  </p>
                </div>
              </RouterLink>
            </div>

            <!-- Countries dropdown -->
            <div
              v-if="item.key === 'countries' && countriesOpen"
              class="absolute left-1/2 top-full z-[1001] mt-4 w-[320px] max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-xl border border-[#484B58] bg-[#202333]/95 p-3 text-white shadow-2xl"
              @click.stop
            >
              <div class="grid grid-cols-2 gap-2">
                <RouterLink
                  v-for="country in countriesList"
                  :key="country.id"
                  :to="country.router"
                  class="flex min-w-0 flex-col rounded-lg p-2.5 text-white transition-colors hover:bg-white/5"
                  @click="closeAllMenus"
                >
                  <div class="flex min-w-0 items-center gap-2">
                    <img
                      :src="country.flag"
                      :alt="country.name"
                      class="h-6 w-6 shrink-0 rounded-full object-cover"
                      loading="lazy"
                    />

                    <span class="truncate text-sm font-medium">
                      {{ country.name }}
                    </span>
                  </div>

                  <span class="mt-1 pl-8 text-xs text-[#A5A7B2]">
                    {{ country.locationsCount }}
                    {{ t('header.destinations') }}
                  </span>
                </RouterLink>
              </div>
            </div>
          </li>
        </ul>

        <CLanguageSwitcher />

        <CSearch
          v-show="inputShow"
          class="absolute right-10 z-[1001]"
        />

        <button
          type="button"
          class="cursor-pointer border-0 bg-transparent p-0 text-white"
          :aria-label="
            inputShow
              ? t('header.closeSearch')
              : t('header.openSearch')
          "
          :aria-expanded="inputShow"
          @click="toggleSearch"
        >
          <i
            :class="inputShow ? 'icon-xmark' : 'icon-search'"
            class="text-2xl"
            aria-hidden="true"
          ></i>
        </button>
      </nav>
    </div>
  </header>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { RouterLink } from 'vue-router'
import { useI18n } from 'vue-i18n'

import CLanguageSwitcher from '../ui/CLanguageSwitcher.vue'
import CSearch from '../forms/CSearch.vue'

const { t } = useI18n()

const inputShow = ref(false)
const dinlarOpen = ref(false)
const countriesOpen = ref(false)
const isScrolled = ref(false)

const navList = computed(() => [
  {
    key: 'about',
    name: t('header.about'),
    router: '/biz-haqimizda',
  },
  {
    key: 'countries',
    name: t('header.countries'),
    router: '/',
  },
  {
    key: 'map',
    name: t('header.map'),
    router: '/umumiy-xarita',
  },
  {
    key: 'religions',
    name: t('header.religions'),
    router: '/dinlar',
  },
  {
    key: 'help',
    name: t('header.help'),
    router: '/yordam',
  },
  {
    key: 'faq',
    name: t('header.faq'),
    router: '/faq',
  },
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
    router: '/dinlar/islam',
  },
  {
    id: 2,
    name: 'Christianity',
    image: '/images/fotos/christianity.png',
    locationsCount: 3,
    router: '/dinlar/christianity',
  },
  {
    id: 3,
    name: 'Buddhism',
    image: '/images/fotos/budhisim.png',
    locationsCount: 2,
    router: '/dinlar/buddhism',
  },
]

const countriesList: CountryItem[] = [
  {
    id: 1,
    name: "O'zbekiston",
    flag: '/images/flags/Uzbekistan.svg',
    locationsCount: 150,
    router: '/uzbekistan',
  },
  {
    id: 2,
    name: 'Turkmaniston',
    flag: '/images/flags/Turkmenistan.svg',
    locationsCount: 0,
    router: '/turkmenistan',
  },
  {
    id: 3,
    name: "Qozog'iston",
    flag: '/images/flags/Kazahastan.svg',
    locationsCount: 0,
    router: '/kazakhstan',
  },
  {
    id: 4,
    name: 'Ozarbayjon',
    flag: '/images/flags/Azerbayjan.svg',
    locationsCount: 0,
    router: '/azerbayjan',
  },
  {
    id: 5,
    name: "Qirg'iziston",
    flag: '/images/flags/Kirgiz.svg',
    locationsCount: 0,
    router: '/kyrgyzstan',
  },
  {
    id: 6,
    name: 'Vengriya',
    flag: '/images/flags/Vengriya.svg',
    locationsCount: 0,
    router: '/vengriya',
  },
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

const toggleSearch = () => {
  inputShow.value = !inputShow.value

  if (inputShow.value) {
    closeAllMenus()
  }
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target

  if (!(target instanceof Element)) return

  if (
    !target.closest('[data-dinlar-menu]') &&
    !target.closest('[data-countries-menu]')
  ) {
    closeAllMenus()
  }

  if (!target.closest('nav')) {
    inputShow.value = false
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeAllMenus()
    inputShow.value = false
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

onMounted(() => {
  handleScroll()

  window.addEventListener('scroll', handleScroll, { passive: true })
  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>
