<template>
  <div class="relative" data-countries-menu>
    <!-- Davlatlar Button -->
    <button
      type="button"
      class="cursor-pointer border-0 bg-transparent p-0 text-inherit [font:inherit] flex items-center gap-1"
      :aria-expanded="isOpen"
      aria-haspopup="true"
      @click.stop="$emit('toggle')"
    >
      {{ title }}
    </button>

    <!-- Dropdown Menu -->
    <div
      v-if="isOpen"
      class="absolute left-1/2 top-full z-50 mt-4 w-[320px] max-w-[calc(100vw-1rem)] -translate-x-1/2 rounded-xl border border-[#484B58] bg-[#202333]/95 p-3 shadow-2xl"
      @click.stop
    >
      <div class="grid grid-cols-2 gap-2">
        <router-link
          v-for="country in countriesList"
          :key="country.id"
          :to="country.router"
          class="flex flex-col rounded-lg p-2.5 text-white transition-colors hover:bg-white/5"
          @click="$emit('close')"
        >
          <div class="flex items-center space-x-2">
            <!-- Flag Image -->
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
  </div>
</template>

<script setup lang="ts">
import flag1 from '@/assets/flags-svg/(1).svg'
import flag2 from '@/assets/flags-svg/(2).svg'
import flag3 from '@/assets/flags-svg/(3).svg'
import flag4 from '@/assets/flags-svg/(4).svg'
import flag5 from '@/assets/flags-svg/(5).svg'
import flag6 from '@/assets/flags-svg/(6).svg'

defineProps<{
  title: string
  isOpen: boolean
}>()

defineEmits(['toggle', 'close'])

interface CountryItem {
  id: number
  name: string
  flag: string
  locationsCount: number
  router: string
}

const countriesList: CountryItem[] = [
  { id: 1, name: "O'zbekiston", flag: flag1, locationsCount: 150, router: "/uzbekistan" },
  { id: 2, name: "Turkmaniston", flag: flag2, locationsCount: 0, router: "/turkmenistan" },
  { id: 3, name: "Qozog'iston", flag: flag3, locationsCount: 0, router: "/kazakhstan" },
  { id: 4, name: "Ozarbayjon", flag: flag4, locationsCount: 0, router: "/azerbaijan" },
  { id: 5, name: "Qirg'iziston", flag: flag5, locationsCount: 0, router: "/kyrgyzstan" },
  { id: 6, name: "Vengriya", flag: flag6, locationsCount: 0, router: "/hungary" },
]
</script>