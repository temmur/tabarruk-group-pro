
<template>
  <div
    class="w-full bg-cover bg-center bg-no-repeat"
    style="background-image: url('/images/vectors/Vector(6).svg');"
  >
    <section class="mx-auto w-full max-w-[1150px] px-4 pb-10 pt-6">
      <div class="mb-3 flex items-center gap-2 text-[14px] text-gray-300">
        <a
          href="/"
          class="transition-colors duration-200 hover:text-white"
        >
          Asosiy
        </a>

        <span class="text-gray-500">&gt;</span>

        <span class="text-white">FAQ</span>
      </div>

      <h2
        class="mb-6 font-['Playfair_Display'] text-[36px] font-bold leading-tight text-white max-sm:text-[28px]"
      >
        Tez-tez beriladigan savollar
      </h2>

      <div class="grid w-full grid-cols-1 items-start gap-6 md:grid-cols-2">
        <div class="w-full min-w-0">
          <div
            v-for="(item, index) in questions.slice(0, 1)"
            :key="index"
            class="w-full overflow-hidden rounded-xl border border-[#757575] bg-gray-900/80 transition-all duration-300"
            :class="openIndex === index ? 'border-[#5a5a5a] shadow-lg' : ''"
          >
            <button
              class="flex w-full items-start justify-between gap-4 p-5 text-left max-sm:p-4"
              @click="openIndex = openIndex === index ? null : index"
              :aria-expanded="openIndex === index"
            >
              <span class="flex min-w-0 flex-1 items-start gap-3">
                <img
                  src="/bayroq.svg"
                  alt=""
                  class="h-[38px] w-[38px] shrink-0 rounded-lg bg-[#dd3f3f] p-[7px]"
                />

                <span
                  class="min-w-0 break-words text-[19px] font-bold leading-snug text-white max-sm:text-[17px]"
                >
                  {{ item.question }}
                </span>
              </span>

              <div
                class="-mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5c5c5c] bg-gray-900/80"
              >
                <svg
                  class="h-5 w-5 text-white transition-transform duration-300"
                  :class="openIndex === index ? 'rotate-180' : ''"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>

            <div class="mx-5 border-t border-[#555555]/70"></div>

            <div
              class="grid transition-[grid-template-rows] duration-300 ease-in-out"
              :class="openIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <p
                  class="px-5 pb-5 pt-3 text-[16px] font-medium leading-[1.3] text-gray-200 max-sm:px-4"
                >
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="flex min-w-0 flex-col gap-5">
          <div
            v-for="(item, index) in questions.slice(1, 3)"
            :key="index + 1"
            class="w-full overflow-hidden rounded-xl border border-[#757575] bg-gray-900/80 transition-all duration-300"
            :class="openIndex === index + 1 ? 'border-[#5a5a5a] shadow-lg' : ''"
          >
            <button
              class="flex w-full items-start justify-between gap-4 p-5 text-left max-sm:p-4"
              @click="openIndex = openIndex === index + 1 ? null : index + 1"
              :aria-expanded="openIndex === index + 1"
            >
              <span class="flex min-w-0 flex-1 items-start gap-3">
                <img
                  src="/bayroq.svg"
                  alt=""
                  class="h-[38px] w-[38px] shrink-0 rounded-lg bg-[#dd3f3f] p-[7px]"
                />

                <span
                  class="min-w-0 break-words text-[19px] font-bold leading-snug text-white max-sm:text-[17px]"
                >
                  {{ item.question }}
                </span>
              </span>

              <div
                class="-mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#5c5c5c] bg-gray-900/80"
              >
                <svg
                  class="h-5 w-5 text-white transition-transform duration-300"
                  :class="openIndex === index + 1 ? 'rotate-180' : ''"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    d="m6 9 6 6 6-6"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </div>
            </button>

            <div class="mx-5 border-t border-[#555555]/70"></div>

            <div
              class="grid transition-[grid-template-rows] duration-300 ease-in-out"
              :class="openIndex === index + 1 ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'"
            >
              <div class="overflow-hidden">
                <p
                  class="px-5 pb-5 pt-3 text-[16px] font-medium leading-[1.3] text-gray-200 max-sm:px-4"
                >
                  {{ item.answer }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const openIndex = ref(null)

const questions = [
  {
    question:
      '"Tabarruk Ziyorat" platformasi orqali nimaga erishish maqsad qilingan?',
    answer:
      "Ushu platformani joriy etish orqali turkiy davlatlarga tegishli bo'lgan ziyoratgohlar haqida ma'lumotlarni joylashtirgan holda o'zaro ziyorat turizm bo'yicha turistlar sonini oshirish maqsad qilingan."
  },
  {
    question: '“Tabarruk Ziyorat” platformasi qachon ishlab chiqilgan?',
    answer:
      'Turizm qo‘mitasi tomonidan sohadagi ekspertlar jalb qilinib, Turkiy davlatlar tashkiloti a’zolari uchun “Tabarruk ziyorat” turizm platformasi 2023-yilda ishga tushirildi (www.tabarrukziyorat.uz).'
  },
  {
    question: 'Turkiy davlatlar tashkilotiga nechta davlat kiradi?',
    answer:
      'Turkiy davlatlar tashkilotiga 7 ta davlat: Oʻzbekiston, Qozogʻiston, Qirgʻiziston, Turkiya, Ozarbayjon, Turkmaniston kiradi'
  }
]
</script>
