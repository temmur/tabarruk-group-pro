<template>
  <div v-if="activeCountry">
    <CCountryBanner :country="activeCountry" />
    
  </div>

  <div v-else>
    <h1>Country not found</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { countries } from '@/data/countryData'
import CCountryBanner from '@/components/sections/CCountryBanner.vue'

const route = useRoute()

const activeCountry = computed(() => {
  return countries.find((country) => {
    return country.id === Number(route.params.id)
  })
})
</script>