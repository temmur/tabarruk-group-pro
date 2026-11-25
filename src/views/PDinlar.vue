
<script setup lang="ts">
import { religionsData } from '@/data/religionsData'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>

<template>
  <section class="container mx-auto px-4 py-12 text-white">
    <h1 class="mb-8 text-3xl font-semibold">
      {{ t('religions.title') }}
    </h1>

    <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
      <RouterLink
        v-for="religion in religionsData"
        :key="religion.id"
        :to="`/dinlar/${religion.slug}`"
        class="flex items-center gap-4 rounded-xl border border-white/20 bg-white/[0.03] p-5 transition hover:bg-white/[0.07]"
      >
        <div class="flex size-14 shrink-0 items-center justify-center rounded-lg bg-white/10 text-3xl">
          {{ religion.icon }}
        </div>

        <div>
          <h2 class="text-lg font-semibold">
            {{ t(`religions.${religion.slug}.title`) }}
          </h2>

          <p class="mt-1 text-sm text-[#C2C2C5]">
            {{ religion.addresses }}
            {{ t('religions.addresses') }}
          </p>
        </div>
      </RouterLink>
    </div>
  </section>
</template>
