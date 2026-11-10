```vue
<template>
  <div class="bg-[#111325] text-white min-h-screen px-4 pt-32 pb-12 md:px-16 md:py-28 font-sans">
    <div class="max-w-6xl mx-auto">
      <!-- Sarlavha qismi -->
      <h1 class="text-3xl md:text-5xl font-bold mb-3">
        {{ $t('forms.have_question') }}
      </h1>
      <p class="text-[#A0A5B5] text-sm md:text-base mb-10">
        {{ $t('forms.fill_blanks') }}
      </p>

      <div class="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <!-- Forma -->
        <form @submit.prevent="handleSubmit" class="lg:col-span-7 space-y-6">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <!-- Ism -->
            <div class="flex flex-col space-y-2">
              <label class="text-sm font-medium text-gray-200">
                {{ $t('forms.fullName') }}
              </label>
              <CInput
                v-model="form.name"
                placeholder="Samantha Smith"
                type="text"
                @blur="v$.name.$touch()"
                :class="{
                  'border-red-500 ring-1 ring-red-500': v$.name.$error
                }"
              />
            </div>

            <!-- Elektron pochta -->
            <div class="flex flex-col space-y-2">
              <label class="text-sm font-medium text-gray-200">
                {{ $t('forms.email') }}
              </label>
              <CInput
                v-model="form.email"
                placeholder="example@gmail.com"
                type="email"
                @blur="v$.email.$touch()"
                :class="{
                  'border-red-500 ring-1 ring-red-500': v$.email.$error
                }"
              />
            </div>
          </div>

          <!-- Xabar (Textarea) -->
          <div class="flex flex-col space-y-2">
            <label class="text-sm font-medium text-gray-200">
              {{ $t('forms.message') }}
            </label>
            <div class="relative">
              <textarea
                v-model="form.message"
                @blur="v$.message.$touch()"
                placeholder="Sizning xabaringiz"
                maxlength="300"
                rows="4"
                :class="{
                  'border-red-500 ring-1 ring-red-500': v$.message.$error
                }"
                class="w-full text-[#C2C2C5] bg-[#545861]/20 backdrop-blur-lg px-6 py-3 border ring-0 outline-0 rounded-xl border-[#545861] focus:border-[#C2C2C5] resize-none"
              ></textarea>
              <span class="absolute bottom-3 right-4 text-xs text-gray-400">
                {{ form.message.length }}/300
              </span>
            </div>
          </div>

          <!-- Maxfiylik siyosati eslatmasi -->
          <p class="text-xs text-gray-400">
            {{ $t('forms.approve_with') }}
          </p>

          <!-- CButton komponenti -->
          <CButton
            variant="primary"
            type="submit"
            :text=" $t('forms.send_for')"
            class="w-full md:w-auto px-10 py-4 text-base font-semibold shadow-lg"
          >
          </CButton>
        </form>

        <!-- O'ng tomondagi kontakt ma'lumotlari -->
        <div class="lg:col-span-5">
          <div class="bg-[#121624] border border-[#23283B] rounded-2xl p-6 md:p-8 space-y-8 mt-7">
            <!-- Manzil -->
            <div class="flex items-start space-x-4">
              <div class="mt-1 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p class="text-xs text-gray-400 font-medium uppercase tracking-wider mb-1">
                  {{ $t('forms.address') }}
                </p>
                <p class="text-lg font-bold leading-snug">
                  Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
                </p>
              </div>
            </div>

            <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
              <!-- Email -->
              <div class="flex items-start space-x-3">
                <div class="mt-0.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-1">
                    {{ $t('forms.message') }}
                  </p>
                  <a href="mailto:tabarruk.ziyorat@info.uz" class="font-bold text-sm hover:underline">
                    tabarruk.ziyorat@info.uz
                  </a>
                </div>
              </div>

              <!-- Telefon -->
              <div class="flex items-start space-x-3">
                <div class="mt-0.5 text-gray-400">
                  <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p class="text-xs text-gray-400 mb-1">
                    {{ $t('forms.phone_number') }}
                  </p>
                  <a href="tel:+998712007007" class="font-bold text-sm hover:underline">
                    +998 71 200 7007
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

import useVuelidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

import CInput from '@/components/forms/CInput.vue'
import CButton from '@/components/forms/CButton.vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

// Vuelidate qoidalari
const rules = {
  name: {
    required
  },
  email: {
    required,
    email
  },
  message: {
    required,
    minLength: minLength(5)
  }
}

const v$ = useVuelidate(rules, form)

// Formani tekshirish
const handleSubmit = async () => {
  const isValid = await v$.value.$validate()

  if (!isValid) return

  console.log('Form yuborildi:', form)
}
</script>
```