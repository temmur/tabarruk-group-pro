<template>
 Home page
 <CButton text="Click me" variant="primary" size="xl"/>
  <CButton text="Change me" variant="secondary" size="lg"/>
   <CButton text="Click me" variant="primary" size="xl">
    <template #suffix>
        <p>-></p>
    </template>
   </CButton>
   <CButton variant="secondary" size="xl"/>
      <CButton variant="secondary" size="xl"/>
</template>
<script setup lang="ts">
import CButton from '@/components/forms/CButton.vue';
</script>