
<template>
  <header
    class="fixed left-0 top-0 z-[1000] w-full py-4 text-white
           transition-all duration-500 ease-in-out"
    :class="
      isScrolled || mobileMenuOpen
        ? 'bg-[#08091d]/95 shadow-lg backdrop-blur-sm'
        : 'bg-transparent shadow-none'
    "
  >
    <div class="container flex items-center justify-between gap-4">

      <!-- Logo -->
      <RouterLink
        to="/"
        class="relative z-10 shrink-0"
        @click="closeAllMenus"
      >
        <img
          class="w-[170px] sm:w-[210px] lg:w-[250px]"
          src="https://tabarrukziyorat.sayohat.uz/logo/ru.svg"
          alt="Tabarruk Ziyorat"
        />
      </RouterLink>

      <!-- Desktop navigation -->
      <nav class="hidden items-center gap-7 lg:flex">

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
            <!-- Religions -->
            <button
              v-if="item.key === 'religions'"
              type="button"
              class="cursor-pointer bg-transparent"
              :aria-expanded="dinlarOpen"
              @click.stop="toggleDinlar"
            >
              {{ item.name }}
            </button>

            <!-- Countries -->
            <button
              v-else-if="item.key === 'countries'"
              type="button"
              class="cursor-pointer bg-transparent"
              :aria-expanded="countriesOpen"
              @click.stop="toggleCountries"
            >
              {{ item.name }}
            </button>

            <!-- Other links -->
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
              class="absolute left-1/2 top-full z-[1001] mt-4
                     w-[260px] -translate-x-1/2 rounded-xl
                     border border-[#484B58] bg-[#202333]/95
                     p-3 shadow-lg"
              @click.stop
            >
              <RouterLink
                v-for="religion in dinlarList"
                :key="religion.id"
                :to="religion.router"
                class="flex min-h-[77px] items-center gap-3
                       rounded-lg px-3 py-2 hover:bg-white/5"
                @click="closeAllMenus"
              >
                <img
                  :src="religion.image"
                  :alt="religion.name"
                  class="h-12 w-12 shrink-0 rounded-lg object-cover"
                />

                <div>
                  <h3 class="text-base font-medium">
                    {{ religion.name }}
                  </h3>

                  <p class="text-sm text-[#A5A7B2]">
                    {{ religion.locationsCount }}
                    {{ t('header.destinations') }}
                  </p>
                </div>
              </RouterLink>
            </div>

            <!-- Countries dropdown -->
            <div
              v-if="item.key === 'countries' && countriesOpen"
              class="absolute left-1/2 top-full z-[1001] mt-4
                     w-[320px] -translate-x-1/2 rounded-xl
                     border border-[#484B58] bg-[#202333]/95
                     p-3 shadow-2xl"
              @click.stop
            >
              <div class="grid grid-cols-2 gap-2">
                <RouterLink
                  v-for="country in countriesList"
                  :key="country.id"
                  :to="country.router"
                  class="flex min-w-0 flex-col rounded-lg p-2.5
                         hover:bg-white/5"
                  @click="closeAllMenus"
                >
                  <div class="flex items-center gap-2">
                    <img
                      :src="country.flag"
                      :alt="country.name"
                      class="h-6 w-6 rounded-full object-cover"
                    />

                    <span class="truncate text-sm">
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

        <div class="relative">
          <CSearch
            v-show="inputShow"
            class="absolute right-10 top-1/2 z-[1001] -translate-y-1/2"
          />

          <button
            type="button"
            class="cursor-pointer text-white"
            :aria-label="
              inputShow
                ? t('header.closeSearch')
                : t('header.openSearch')
            "
            @click="toggleSearch"
          >
            <i
              :class="inputShow ? 'icon-xmark' : 'icon-search'"
              class="text-2xl"
            ></i>
          </button>
        </div>
      </nav>

      <!-- Mobile controls -->
      <div class="flex items-center gap-4 lg:hidden">

        <CLanguageSwitcher />

        <button
          type="button"
          class="flex h-10 w-10 items-center justify-center
                 text-white"
          :aria-label="inputShow ? t('header.closeSearch') : t('header.openSearch')"
          @click="toggleSearch"
        >
          <i
            :class="inputShow ? 'icon-xmark' : 'icon-search'"
            class="text-xl"
          ></i>
        </button>

        <!-- Hamburger -->
        <button
          type="button"
          class="flex h-10 w-10 flex-col items-center
                 justify-center gap-[6px]"
          :aria-label="mobileMenuOpen ? 'Close menu' : 'Open menu'"
          :aria-expanded="mobileMenuOpen"
          @click="toggleMobileMenu"
        >
          <span
            class="h-[2px] w-6 rounded-full bg-white transition-all duration-300"
            :class="mobileMenuOpen ? 'translate-y-2 rotate-45' : ''"
          ></span>

          <span
            class="h-[2px] w-6 rounded-full bg-white transition-all duration-300"
            :class="mobileMenuOpen ? 'opacity-0' : ''"
          ></span>

          <span
            class="h-[2px] w-6 rounded-full bg-white transition-all duration-300"
            :class="mobileMenuOpen ? '-translate-y-2 -rotate-45' : ''"
          ></span>
        </button>
      </div>
    </div>

    <!-- Mobile search -->
    <div
      v-if="inputShow"
      class="container mt-4 lg:hidden"
    >
      <CSearch class="w-full" />
    </div>

    <!-- Mobile navigation panel -->
    <div
      class="absolute left-0 top-full w-full overflow-hidden
             border-t border-white/10 bg-[#08091d]/98
             shadow-xl transition-all duration-300 lg:hidden"
      :class="
        mobileMenuOpen
          ? 'visible max-h-[85vh] opacity-100'
          : 'invisible max-h-0 opacity-0'
      "
    >
      <div class="container max-h-[85vh] overflow-y-auto py-5">

        <nav class="flex flex-col">

          <RouterLink
            v-for="item in navList"
            v-if="false"
            :key="item.key"
            :to="item.router"
          >
            {{ item.name }}
          </RouterLink>

          <!-- About -->
          <RouterLink
            to="/biz-haqimizda"
            class="mobile-link"
            @click="closeAllMenus"
          >
            {{ t('header.about') }}
          </RouterLink>

          <!-- Countries -->
          <button
            type="button"
            class="mobile-link flex items-center justify-between"
            :aria-expanded="mobileCountriesOpen"
            @click="toggleMobileCountries"
          >
            {{ t('header.countries') }}

            <i
              class="icon-chevron-down transition-transform duration-300"
              :class="mobileCountriesOpen ? 'rotate-180' : ''"
            ></i>
          </button>

          <div
            v-if="mobileCountriesOpen"
            class="grid grid-cols-2 gap-2 pb-3"
          >
            <RouterLink
              v-for="country in countriesList"
              :key="country.id"
              :to="country.router"
              class="flex min-w-0 items-center gap-2 rounded-lg
                     bg-white/5 p-3"
              @click="closeAllMenus"
            >
              <img
                :src="country.flag"
                :alt="country.name"
                class="h-6 w-6 shrink-0 rounded-full object-cover"
              />

              <span class="truncate text-sm">
                {{ country.name }}
              </span>
            </RouterLink>
          </div>

          <!-- Map -->
          <RouterLink
            to="/umumiy-xarita"
            class="mobile-link"
            @click="closeAllMenus"
          >
            {{ t('header.map') }}
          </RouterLink>

          <!-- Religions -->
          <button
            type="button"
            class="mobile-link flex items-center justify-between"
            :aria-expanded="mobileReligionsOpen"
            @click="toggleMobileReligions"
          >
            {{ t('header.religions') }}

            <i
              class="icon-chevron-down transition-transform duration-300"
              :class="mobileReligionsOpen ? 'rotate-180' : ''"
            ></i>
          </button>

          <div
            v-if="mobileReligionsOpen"
            class="flex flex-col gap-2 pb-3"
          >
            <RouterLink
              v-for="religion in dinlarList"
              :key="religion.id"
              :to="religion.router"
              class="flex items-center gap-3 rounded-lg
                     bg-white/5 p-3"
              @click="closeAllMenus"
            >
              <img
                :src="religion.image"
                :alt="religion.name"
                class="h-11 w-11 rounded-lg object-cover"
              />

              <div>
                <h3 class="font-medium">
                  {{ religion.name }}
                </h3>

                <p class="text-xs text-[#A5A7B2]">
                  {{ religion.locationsCount }}
                  {{ t('header.destinations') }}
                </p>
              </div>
            </RouterLink>
          </div>

          <!-- Help -->
          <RouterLink
            to="/yordam"
            class="mobile-link"
            @click="closeAllMenus"
          >
            {{ t('header.help') }}
          </RouterLink>

          <!-- FAQ -->
          <RouterLink
            to="/faq"
            class="mobile-link"
            @click="closeAllMenus"
          >
            {{ t('header.faq') }}
          </RouterLink>

        </nav>
      </div>
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
const mobileMenuOpen = ref(false)

const mobileCountriesOpen = ref(false)
const mobileReligionsOpen = ref(false)

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

  mobileMenuOpen.value = false
  mobileCountriesOpen.value = false
  mobileReligionsOpen.value = false
  inputShow.value = false
}

const toggleDinlar = () => {
  dinlarOpen.value = !dinlarOpen.value
  countriesOpen.value = false
}

const toggleCountries = () => {
  countriesOpen.value = !countriesOpen.value
  dinlarOpen.value = false
}

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value

  if (mobileMenuOpen.value) {
    inputShow.value = false
  }
}

const toggleMobileCountries = () => {
  mobileCountriesOpen.value = !mobileCountriesOpen.value
  mobileReligionsOpen.value = false
}

const toggleMobileReligions = () => {
  mobileReligionsOpen.value = !mobileReligionsOpen.value
  mobileCountriesOpen.value = false
}

const toggleSearch = () => {
  inputShow.value = !inputShow.value

  if (inputShow.value) {
    dinlarOpen.value = false
    countriesOpen.value = false
    mobileMenuOpen.value = false
  }
}

const handleOutsideClick = (event: MouseEvent) => {
  const target = event.target

  if (!(target instanceof Element)) return

  if (
    !target.closest('[data-dinlar-menu]') &&
    !target.closest('[data-countries-menu]')
  ) {
    dinlarOpen.value = false
    countriesOpen.value = false
  }
}

const handleEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    closeAllMenus()
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 30
}

const handleResize = () => {
  if (window.innerWidth >= 1024) {
    mobileMenuOpen.value = false
    mobileCountriesOpen.value = false
    mobileReligionsOpen.value = false
  }
}

onMounted(() => {
  handleScroll()

  window.addEventListener('scroll', handleScroll, {
    passive: true,
  })

  window.addEventListener('resize', handleResize)

  document.addEventListener('click', handleOutsideClick)
  document.addEventListener('keydown', handleEscape)
})

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll)
  window.removeEventListener('resize', handleResize)

  document.removeEventListener('click', handleOutsideClick)
  document.removeEventListener('keydown', handleEscape)
})
</script>

<style scoped>
.mobile-link {
  display: block;
  width: 100%;
  padding: 15px 4px;
  color: white;
  font-size: 16px;
  font-weight: 500;
  text-align: left;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  transition: color 0.2s ease;
}

.mobile-link:hover {
  color: #a5a7b2;
}
</style>
