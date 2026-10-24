
<template>
  <section class="news-section w-full px-4 py-8 sm:px-6">
    <div class="mx-auto max-w-5xl">
      <div class="relative mb-5 text-center">
        <div
          class="absolute left-[18%] top-3 h-px w-8 bg-slate-700 sm:left-[20%] sm:w-12"
        ></div>
        <div
          class="absolute right-[18%] top-3 h-px w-8 bg-slate-700 sm:right-[20%] sm:w-12"
        ></div>

        <h2
          class="font-sans text-[35px] font-bold sm:text-3xl"
          style="font-family: 'Playfair Display', serif"
        >
          <span class="underline decoration-red-500 decoration-1 underline-offset-9">
            {{ t('news.title') }}
          </span>
        </h2>

        <p class="mt-2 text-[10px] text-slate-100 sm:text-[18px]">
          {{ t('news.subtitle') }}
        </p>
      </div>

      <div
        v-if="news.length"
        class="grid grid-cols-1 items-stretch gap-2 md:grid-cols-[1.35fr_1fr]"
      >
        <!-- Birinchi yangilik -->
        <RouterLink
          v-if="news[0]"
          :to="getRoute(news[0])"
          class="group flex min-w-0 gap-3 rounded-md border border-white/10 bg-[#0c1021] p-3 transition hover:border-slate-600 sm:p-4"
        >
          <div
            class="h-[200px] w-[42%] shrink-0 overflow-hidden rounded-sm bg-[#080b19] sm:h-[240px]"
          >
            <img
              :src="news[0].image"
              :alt="news[0].title"
              class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            />
          </div>

          <div class="flex min-w-0 flex-1 flex-col py-1">
            <h3 class="text-sm font-semibold leading-snug text-white sm:text-base">
              {{ news[0].title }}
            </h3>

            <p
              v-if="news[0].subtitle"
              class="mt-2 text-xs leading-snug text-white/80 sm:text-sm"
            >
              {{ news[0].subtitle }}
            </p>

            <span class="mt-auto pt-2 text-[10px] text-slate-500">
              {{ formatDate(news[0].createdAt) }}
            </span>
          </div>
        </RouterLink>

        <!-- Ikkinchi va uchinchi yangiliklar -->
        <div class="flex min-w-0 flex-col gap-2">
          <RouterLink
            v-for="item in news.slice(1, 3)"
            :key="item.id"
            :to="getRoute(item)"
            class="group flex min-h-[90px] min-w-0 flex-1 gap-2 rounded-md border border-white/10 bg-[#0c1021] p-2 transition hover:border-slate-600 sm:min-h-[100px]"
          >
            <div
              class="h-[110px] w-[35%] shrink-0 overflow-hidden rounded-sm bg-[#080b19] sm:h-[110px]"
            >
              <img
                :src="item.image"
                :alt="item.title"
                class="h-full w-full object-cover transition duration-300 group-hover:scale-105"
              />
            </div>

            <div class="flex min-w-0 flex-1 flex-col">
              <h3 class="text-[11px] font-semibold leading-snug text-white sm:text-[13px]">
                {{ item.title }}
              </h3>

              <p class="mt-1 text-[9px] leading-snug text-white/65 sm:text-[10px]">
                {{ item.subtitle }}
              </p>

              <span class="mt-auto pt-1 text-[9px] text-slate-500">
                {{ formatDate(item.createdAt) }}
              </span>
            </div>
          </RouterLink>
        </div>
      </div>

      <div v-else class="py-8 text-center text-sm text-slate-500">
        {{ t('news.empty') }}
      </div>

      <div class="mt-3 flex justify-end">
        <RouterLink
          to="/news"
          class="inline-flex items-center gap-1 rounded-sm bg-[#252a3c] px-7 py-3.5 text-[16px] text-white transition hover:bg-[#343a50]"
        >
          {{ t('news.all') }}
          <span aria-hidden="true">→</span>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { news, type News } from '@/data/newsData'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

function formatDate(date: number | string): string {
  if (!date) return ''

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

function getRoute(item: News): string {
  return item.router || `/news/${item.id}`
}
</script>
