<template>
  <div>
    <CBanner />
    <CAbout />
    <CCountries />
    <CNews />
    <CInstagram />
    <CPartners/>
</div>
</template>
<script setup lang="ts">
import CBanner from '@/components/sections/CBanner.vue';
import CAbout from '@/components/sections/CAbout.vue';
import CInstagram from '@/components/CInstagram.vue';
import CPartners from '@/components/sections/CPartners.vue'
import CCountries from '@/components/sections/CCountries.vue'
import CNews from '@/components/sections/CNews.vue'
</script>