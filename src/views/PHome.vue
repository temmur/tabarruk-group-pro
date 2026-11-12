<template>
<div>
    <CBanner/>
    <CAbout/>
    <CCountries/>
    <CInstagram />

</div>
 
</template>
<script setup lang="ts">
import CBanner from '@/components/sections/CBanner.vue';
import CAbout from '@/components/sections/CAbout.vue';
import CCountryCard from '@/components/card/CCountryCard.vue';
import CCountries from '@/components/sections/CCountries.vue';
import CInstagram from '@/components/CInstagram.vue';
import CNews from '@/components/sections/CNews.vue';
import CPartners from '@/components/sections/CPartners.vue';
</script>
