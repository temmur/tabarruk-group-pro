
<template>
  <button
    class="custom-button"
    :class="[
      `custom-button--${variant}`,
      `custom-button--${size}`
    ]"
    :disabled="disabled"
    type="button"
  >
    <slot name="prefix" />

    {{ text }}

    <slot name="suffix" />
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
</script>

<style scoped>
.custom-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 4px;
  height: 20px;
  padding: 30px 130px;
  border: none;
  border-radius: 9px;
  color: #ffffff;
  font-family: Arial, sans-serif;
  font-size: 20px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  flex-shrink: 0;
}

/* Variants */
.custom-button--primary {
  background: #f04452;
}

.custom-button--secondary {
  background: #292d3e;
}

/* Sizes */
.custom-button--md {
  height: 20px;
  min-width: 53px;
  padding: 0 8px;
  font-size: 7px;
}

.custom-button--lg {
  height: 32px;
  min-width: 80px;
  padding: 0 12px;
  font-size: 12px;
}

.custom-button--xl {
  height: 40px;
  min-width: 101px;
  padding: 0 16px;
  font-size: 14px;
}

/* Disabled */
.custom-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>
