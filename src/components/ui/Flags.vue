<script setup lang="ts">
defineProps<{
  code: string
  size?: number
}>()
</script>

<template>
  <!-- RUSSIA -->
  <svg
    v-if="code === 'ru'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="16" fill="#fff" />
    <rect y="5.33" width="24" height="5.34" fill="#1d4ed8" />
    <rect y="10.67" width="24" height="5.33" fill="#ef4444" />
  </svg>

  <!-- UNITED KINGDOM -->
  <svg
    v-else-if="code === 'en'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="16" fill="#1e3a8a" />

    <path
      d="M0 0L24 16M24 0L0 16"
      stroke="#fff"
      stroke-width="4"
    />

    <path
      d="M0 0L24 16M24 0L0 16"
      stroke="#dc2626"
      stroke-width="1.8"
    />

    <path
      d="M12 0V16M0 8H24"
      stroke="#fff"
      stroke-width="5"
    />

    <path
      d="M12 0V16M0 8H24"
      stroke="#dc2626"
      stroke-width="2.5"
    />
  </svg>

  <!-- UZBEKISTAN -->
  <svg
    v-else-if="code === 'uz'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="5.33" fill="#0099b5" />
    <rect y="5.33" width="24" height="5.34" fill="#fff" />
    <rect y="10.67" width="24" height="5.33" fill="#1eb53a" />

    <rect y="5" width="24" height="0.6" fill="#ce1126" />
    <rect y="10.4" width="24" height="0.6" fill="#ce1126" />

    <circle cx="5" cy="3" r="1.5" fill="#fff" />
  </svg>

  <!-- KAZAKHSTAN -->
  <svg
    v-else-if="code === 'kk'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="16" fill="#00afca" />

    <circle
      cx="12"
      cy="8"
      r="3"
      fill="#f9d616"
    />

    <path
      d="M3 3L5 5M3 13L5 11"
      stroke="#f9d616"
      stroke-width="1.5"
    />
  </svg>

  <!-- KYRGYZSTAN -->
  <svg
    v-else-if="code === 'ky'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="16" fill="#e11d48" />

    <circle
      cx="12"
      cy="8"
      r="4"
      fill="#facc15"
    />

    <circle
      cx="12"
      cy="8"
      r="1.5"
      fill="#e11d48"
    />
  </svg>

  <!-- TURKEY -->
  <svg
    v-else-if="code === 'tr'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="16" fill="#e30a17" />

    <circle
      cx="9"
      cy="8"
      r="4"
      fill="#fff"
    />

    <circle
      cx="10.5"
      cy="8"
      r="3.2"
      fill="#e30a17"
    />

    <path
      d="M15 4.8L16.1 7.1L18.6 7.4L16.8 9.1L17.2 11.6L15 10.4L12.8 11.6L13.2 9.1L11.4 7.4L13.9 7.1Z"
      fill="#fff"
    />
  </svg>

  <!-- TURKMENISTAN -->
  <svg
    v-else-if="code === 'tk'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="16" fill="#159447" />

    <rect
      width="5"
      height="16"
      fill="#d62828"
    />

    <circle cx="11" cy="5" r="1.2" fill="#fff" />
    <circle cx="11" cy="8" r="1.2" fill="#fff" />
    <circle cx="11" cy="11" r="1.2" fill="#fff" />
  </svg>

  <!-- AZERBAIJAN -->
  <svg
    v-else-if="code === 'az'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="5.33" fill="#00a1de" />
    <rect y="5.33" width="24" height="5.34" fill="#e4002b" />
    <rect y="10.67" width="24" height="5.33" fill="#00a651" />

    <circle
      cx="12"
      cy="8"
      r="2.3"
      fill="#fff"
    />

    <circle
      cx="12.8"
      cy="8"
      r="1.9"
      fill="#e4002b"
    />
  </svg>

  <!-- HUNGARY -->
  <svg
    v-else-if="code === 'hu'"
    class="flag"
    :width="size || 48"
    :height="(size || 48) * 0.67"
    viewBox="0 0 24 16"
  >
    <rect width="24" height="5.33" fill="#ce2939" />
    <rect y="5.33" width="24" height="5.34" fill="#fff" />
    <rect y="10.67" width="24" height="5.33" fill="#477050" />
  </svg>
</template>

<style scoped>
.flag {
  display: block;
  flex-shrink: 0;
  border-radius: 3px;
  overflow: hidden;
}
</style>