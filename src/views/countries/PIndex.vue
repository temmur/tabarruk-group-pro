
<template>
  <div v-if="activeCountry">
    <h1>{{ activeCountry.title }}</h1>

    <img
      :src="activeCountry.flag"
      :alt="activeCountry.title"
      width="120"
    />

    <p>{{ activeCountry.destintaions }} Manzillar</p>
  </div>

  <div v-else>
    <h1>Country not found</h1>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { countries } from '@/data/countryData'

const route = useRoute()

const activeCountry = computed(() => {
  return countries.find((country) => {
    return country.id === Number(route.params.id)
  })
})
</script>
