
<template>
  <div>
    Play ground page.

    <CBreadCrumb
      :items="breadcrumb"
    />
  </div>
</template>

<script setup lang="ts">
import CBreadCrumb from '@/components/ui/CBreadcrumb.vue';

const breadcrumb = [
  { label: 'Home', to: '/' },
  { label: 'Products', to: '/products' },
  { label: 'All Products' }
]
</script>
