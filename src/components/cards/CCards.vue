<template>
  <div
    :class="title === 'Diqqatga sazovor joylar' ? 'w-[300px]' : 'w-[450px]'"
    class="border border-gray-500 py-[18px] pl-[18px] pr-[18px] rounded-[13px] backdrop-blur-md bg-white/10"
  >
    <div class="flex items-center gap-2">
      <i class="bg-red-500 p-[8px] rounded-[8px]" :class="icon"></i>

      <p class="font-[500] text-white">
        {{ statistic }}
      </p>
    </div>

    <p class="text-[20px] font-[500] text-gray-400">
      {{ title }}
    </p>
  </div>
</template>



<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
defineProps<{
  icon: string
  statistic: number
  title: string
}>()
</script>