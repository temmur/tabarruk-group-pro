
<template>
  <button
    class="custom-button"
    :class="variants[variant]"
    :disabled="disabled"
  >
    <slot name="prefix"></slot>

    {{ text }}

    <slot name="suffix">
      <svg
        v-if="variant === 'primary'"
        width="10"
        height="10"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        stroke-width="2"
      >
        <circle cx="12" cy="12" r="10" />
        <ellipse cx="12" cy="12" rx="4" ry="10" />
        <path d="M2 12h20M4.5 6h15M4.5 18h15" />
      </svg>
    </slot>
  </button>
</template>

<script setup lang="ts">
withDefaults(
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
  primary: 'primary',
  secondary: 'secondary'
}
</script>


<style scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 20px;
  padding: 0;
  border: none;
  border-radius: 4px;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 7px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
}

.primary {
  width: 53px;
  background: #f04452;
}

.secondary {
  width: 101px;
  background: #292d3e;
}

.custom-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
```