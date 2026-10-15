<template>
  <div
    class="relative flex h-[90px] min-w-0 items-center overflow-hidden rounded-[12px] bg-[#27293b] px-[7px] text-white"
  >
    <div class="relative z-10 min-w-0">
      <h2 class="text-[35px] font-bold leading-[40px]">
        {{ statistic }}
      </h2>

      <p class="whitespace-nowrap text-[14px] font-semibold leading-[20px] text-gray-400">
        {{ title }}
      </p>
    </div>

    <img
      :src="image"
      :alt="title"
      class="pointer-events-none absolute right-0 top-1/2 !h-[98px] !w-[88px] -translate-y-1/2 object-contain opacity-[0.35]"
    />
  </div>
</template>

<script setup lang="ts">
defineProps<{
  title: string
  statistic: string | number
  image: string
}>()
</script>