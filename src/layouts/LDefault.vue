<template>
  <div class="flex min-h-screen flex-col bg-[#070A1C]">
    <CHeader />

    <main class="flex-1">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import CHeader from '@/components/layouts/CHeader.vue'
</script>