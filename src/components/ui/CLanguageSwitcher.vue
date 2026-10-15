```vue
<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useI18n } from 'vue-i18n'
import Flags from './Flags.vue'

const { locale } = useI18n()

const isOpen = ref(false)

const languages = [
  { code: 'ru', name: 'Русский' },
  { code: 'en', name: 'English' },
  { code: 'uz', name: "O'zbekcha" },
  { code: 'kk', name: 'Қазақша' },
  { code: 'ky', name: 'Кыргызча' },
  { code: 'tr', name: 'Türkçe' },
  { code: 'tk', name: 'Türkmençe' },
  { code: 'az', name: 'Azərbaycan' },
  { code: 'hu', name: 'Magyar' }
]

const currentLanguageCode = computed(() => locale.value)

const currentLanguage = computed(() => {
  return (
    languages.find(
      language => language.code === currentLanguageCode.value
    ) || languages[0]
  )
})

const toggleDropdown = () => {
  isOpen.value = !isOpen.value
}

const selectLanguage = (language: { code: string; name: string }) => {
  locale.value = language.code
  localStorage.setItem('language', language.code)
  isOpen.value = false
}

const closeDropdown = (event: MouseEvent) => {
  const target = event.target as HTMLElement

  if (!target.closest('.language-switcher')) {
    isOpen.value = false
  }
}

const closeOnEscape = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    isOpen.value = false
  }
}

onMounted(() => {
  document.addEventListener('click', closeDropdown)
  document.addEventListener('keydown', closeOnEscape)
})

onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
  document.removeEventListener('keydown', closeOnEscape)
})
</script>

<template>
  <div class="language-switcher">
    <button
      type="button"
      class="language-trigger"
      :aria-expanded="isOpen"
      @click.stop="toggleDropdown"
    >
      <Flags
        :code="currentLanguage.code"
        :size="24"
      />
    </button>

    <Transition name="dropdown">
      <div
        v-if="isOpen"
        class="language-dropdown"
      >
        <button
          v-for="language in languages"
          :key="language.code"
          type="button"
          class="language-option"
          :class="{
            selected: language.code === currentLanguageCode
          }"
          @click="selectLanguage(language)"
        >
          <Flags
            :code="language.code"
            :size="24"
          />

          <span class="language-title">
            {{ language.name }}
          </span>

          <svg
            v-if="language.code === currentLanguageCode"
            class="check"
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M5 12L10 17L19 7"
              stroke="currentColor"
              stroke-width="2.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.language-switcher {
  position: relative;
  display: inline-block;
}

.language-trigger {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  padding: 0;
  margin: 0;
  border: none;
  border-radius: 3px;
  background: transparent;
  color: inherit;
  cursor: pointer;
  font-family: inherit;
  font-size: 14px;
  font-weight: 500;
  transition: 0.2s ease;
}

.language-trigger::before,
.language-trigger::after {
  content: none !important;
  display: none !important;
}

.language-trigger:hover {
  background: #202d40;
}

.language-dropdown {
  position: absolute;
  z-index: 1000;
  top: calc(100% + 8px);
  right: 0;
  width: 560px;
  padding: 8px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 4px;
  background: #172231;
  border: 1px solid rgba(255, 255, 255, 0.12);
  border-radius: 12px;
  box-shadow: 0 18px 45px rgba(0, 0, 0, 0.35);
}

.language-option {
  display: flex;
  align-items: center;
  gap: 10px;
  min-height: 54px;
  padding: 8px 10px;
  border: 0;
  border-radius: 8px;
  background: transparent;
  color: #ffffff;
  cursor: pointer;
  font-family: inherit;
  transition: background 0.2s ease;
}

.language-option:hover {
  background: rgba(255, 255, 255, 0.07);
}

.language-option.selected {
  background: rgba(255, 255, 255, 0.1);
}

.language-title {
  flex: 1;
  text-align: left;
  font-size: 14px;
  font-weight: 500;
  white-space: nowrap;
}

.check {
  flex-shrink: 0;
  color: #70d6a4;
}

.dropdown-enter-active,
.dropdown-leave-active {
  transition:
    opacity 0.18s ease,
    transform 0.18s ease;
}

.dropdown-enter-from,
.dropdown-leave-to {
  opacity: 0;
  transform: translateY(-6px);
}

@media (max-width: 700px) {
  .language-dropdown {
    width: 400px;
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 480px) {
  .language-dropdown {
    width: calc(100vw - 30px);
    right: -10px;
    grid-template-columns: 1fr;
  }
}
</style>
```
