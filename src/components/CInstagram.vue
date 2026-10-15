
<template>
  <section class="w-full bg-[#08091b] px-5 py-8 text-white">
    <div class="mx-auto max-w-[1120px]">

      <!-- Sarlavha -->
      <div class="mb-7 text-center">
        <h2
          class="text-[40px] font-bold decoration-red-500 underline decoration-1 underline-offset-[8px]"
          style="font-family: 'Playfair Display', serif;"
        >
          Instagram
        </h2>

        <p
          class="mt-3 text-[11px] text-gray-300"
          style="font-size: 17px; color: white; font-weight: 500;"
        >
          Turk dunyosidagi so'nggi yangiliklar va o'zgarishlardan xabardor bo'ling.
        </p>
      </div>

      <!-- Rasmlar -->
      <div class="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
        <div
          v-for="(item, index) in posts"
          :key="index"
          class="group relative cursor-pointer overflow-hidden rounded-md border min-h-[220px] border-white/15 bg-[#17182a] p-2 transition-colors duration-300 hover:border-white/30"
        >
          <!-- Rasm va hover effekti -->
          <div class="relative h-[150px] w-full overflow-hidden rounded">
            <img
              v-if="item.image"
              :src="item.image"
              :alt="item.title"
              class="h-full w-full object-cover transition-all duration-300 group-hover:scale-105 group-hover:brightness-50 "
            />

            <!-- Rasm topilmasa -->
            <div
              v-else
              class="flex h-full w-full items-center justify-center bg-[#222438] text-xs text-gray-500"
            >
              Rasm {{ index + 1 }}
            </div>

            <!-- Hover qoramtir qatlam -->
            <div
              class="absolute inset-0 flex flex-col items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            >
              <span class="text-2xl">◎</span>
              <span class="mt-1 text-[10px] font-medium">
                postni ko'rish
              </span>
            </div>
          </div>

          <!-- Rasm tashqarisidagi matn -->
          <div class="px-1 pb-3 pt-2">
            <h3 class="text-[10px] font-semibold leading-3 text-white">
              {{ item.title }}
            </h3>

            <p class="mt-1 text-[8px] leading-3 text-gray-300">
              {{ item.description }}
            </p>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup lang="ts">
const posts = [
  {
    image: "/images/saroy1.jpg",
    title: "20 yodgorlik",
    description: "Tarixiy joylar",
    
  },
  {
    image: "/images/saroy2.jpg",
    title: "15 yodgorlik",
    description: "Tarixiy obidalar",
  },
  {
    image: "/images/saroy3.jpg",
    title: "5 yodgorlik",
    description: "Qadimiy shaharlar",
  },
  {
    image: "/images/saroy4.jpg",
    title: "20 yodgorlik",
    description: "Madaniy meros",
  },
  {
    image: "/images/saroy5.jpg",
    title: "15 yodgorlik",
    description: "Tabiat va tarix",
  },
  {
    image: "/images/saroy6.jpg",
    title: "22 yodgorlik",
    description: "Tarixiy obidalar",
  },
];
</script>
