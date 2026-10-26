
<template>
  <main class="min-h-screen bg-[#080b19] px-4 py-8 text-white sm:px-6 sm:py-12">
    <article v-if="currentNews" class="mx-auto max-w-4xl">
      <!-- Bosh sahifaga qaytish -->
      <RouterLink
        to="/"
        class="mb-6 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-white"
      >
        <span aria-hidden="true">←</span>
        Bosh sahifaga qaytish
      </RouterLink>

      <!-- Asosiy yangilik rasmi -->
      <img
        :src="currentNews.image"
        :alt="currentNews.title"
        class="mb-6 max-h-[480px] w-full rounded-lg border border-white/10 object-cover"
      />

      <!-- Sana va ko‘rishlar soni -->
      <div class="mb-4 flex flex-wrap items-center gap-4 text-xs text-slate-400">
        <span>{{ formatDate(currentNews.createdAt) }}</span>
        <span>{{ currentNews.views ?? 0 }} ta ko‘rish</span>
      </div>

      <!-- Yangilik sarlavhasi -->
      <h1 class="text-2xl font-bold leading-snug sm:text-3xl">
        {{ currentNews.title }}
      </h1>

      <!-- Qisqacha ma'lumot -->
      <p
        v-if="currentNews.subtitle"
        class="mt-4 text-base leading-7 text-slate-300"
      >
        {{ currentNews.subtitle }}
      </p>

      <!-- Yangilikning to‘liq matni -->
      <div class="mt-6 border-t border-white/10 pt-6">
        <p class="whitespace-pre-line text-sm leading-8 text-slate-300 sm:text-base">
          {{ currentNews.content || currentNews.subtitle || currentNews.title }}
        </p>
      </div>

      <!-- Boshqa yangiliklar -->
      <section
        v-if="otherNews.length"
        class="mt-12 border-t border-white/10 pt-6"
      >
        <h2 class="mb-5 text-xl font-semibold">
          Boshqa yangiliklar
        </h2>

        <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RouterLink
            v-for="item in otherNews"
            :key="item.id"
            :to="getRoute(item)"
            class="group flex min-w-0 gap-3 rounded-lg border border-white/10 bg-[#0c1021] p-3 transition hover:border-slate-500"
          >
            <img
              :src="item.image"
              :alt="item.title"
              class="h-24 w-28 shrink-0 rounded object-cover transition duration-300 group-hover:scale-[1.02]"
            />

            <div class="flex min-w-0 flex-1 flex-col">
              <h3
                class="text-sm font-semibold leading-snug text-white transition group-hover:text-slate-300"
              >
                {{ item.title }}
              </h3>

              <p
                v-if="item.subtitle"
                class="mt-2 line-clamp-2 text-xs leading-5 text-slate-400"
              >
                {{ item.subtitle }}
              </p>

              <span class="mt-auto pt-2 text-xs text-slate-500">
                {{ formatDate(item.createdAt) }}
              </span>
            </div>
          </RouterLink>
        </div>
      </section>
    </article>

    <!-- Yangilik topilmagan holat -->
    <div v-else class="mx-auto max-w-4xl py-20 text-center">
      <h1 class="text-xl font-semibold">
        Yangilik topilmadi
      </h1>

      <p class="mt-3 text-sm text-slate-400">
        Ushbu manzilda yangilik mavjud emas.
      </p>

      <RouterLink
        to="/"
        class="mt-6 inline-flex items-center gap-2 rounded bg-[#252a3c] px-5 py-3 text-sm text-white transition hover:bg-[#343a50]"
      >
        <span aria-hidden="true">←</span>
        Bosh sahifaga qaytish
      </RouterLink>
    </div>
  </main>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { news, type News } from '@/data/newsData'

const route = useRoute()

// URL manzilidagi ID bo‘yicha yangilikni topish
const currentNews = computed(() => {
  const id = String(route.params.id ?? '')

  if (!id) {
    return undefined
  }

  return news.find((item) => String(item.id) === id)
})

// Joriy yangilikdan boshqa yangiliklarni olish
const otherNews = computed(() => {
  if (!currentNews.value) {
    return []
  }

  return news.filter(
    (item) => String(item.id) !== String(currentNews.value!.id),
  )
})

// Boshqa yangilik sahifasiga o‘tish
function getRoute(item: News): string {
  return item.router || `/news/${item.id}`
}

// Sanani to‘g‘ri formatda chiqarish
function formatDate(date: number | string): string {
  if (!date) {
    return ''
  }

  const parsedDate =
    typeof date === 'number'
      ? new Date(date < 1e12 ? date * 1000 : date)
      : new Date(date)

  if (Number.isNaN(parsedDate.getTime())) {
    return String(date)
  }

  return new Intl.DateTimeFormat('uz-UZ', {
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).format(parsedDate)
}
</script>
