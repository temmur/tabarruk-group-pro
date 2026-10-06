<template>
    <button class="flex items-center gap-2 cursor-pointer" :class="[variants[variant], sizes[size]]">
        <slot name="prefix"></slot>
        {{ text }}
        <slot name="suffix"></slot>
    </button>
</template>
<script setup lang="ts">
import {defineProps}from 'vue'

const props = withDefaults(
  defineProps<{
    text?: string
    variant?: 'primary' | 'secondary'
    size?: 'md' | 'lg' | 'xl'
    disabled?: boolean
  }>(),
  {
    text: 'Button',
    variant: 'primary',
    size: 'md',
    disabled: false
  }
)



const variants = {
    primary: 'bg-black text-white',
    secondary: 'bg-red-500'
}
const sizes = {
    md: 'px-2 py-2',
    lg: 'px-4 py-2',
    xl: 'px-10 py-4 rounded-md'
}
</script>