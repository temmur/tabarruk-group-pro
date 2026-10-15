
<template>
  <div class="container">
 <section class="section">
    <h1 class="our">Biz haqimizda</h1>

    <p class="long">
      Maqolalar, fotosuratlar va videolar tanlovi orqali turkiy <br>
      mamlakatlarning qimmatli, tarixiy va merosi joylarini o'rganing. <br>
      Qadimgi xarobalar, hayratlanarli masjidlar, o'rta asr qal'alari va <br>
      murakkab koshinlar go'zalligini kashf eting.
    </p>

    <CAboutCarousel />
<div class="our-all">
    <p class="text-xl font-medium mt-6">
      Bizning qo'llab-quvvatlovchilar
    </p>

    <div class="images">
      <p>Turkiy davlatlar tashkiloti</p>

      <div class="first-picture">
        <img :src="logo" alt="Logo" class="picture">
      </div>

      <div class="house-area">
        <p style="max-width: 250px;">
          O‘zbekiston Respublikasi Ekologiya,
          atrof-muhitni muhofaza qilish va iqlim 
          o‘zgarishi vazirligi huzuridagi Turizm 
          qo‘mitasi
        </p>

        <div class="house-wrap">
          <img
            src="/images/registon.jpg"
            alt="Registon"
            class="house"
          >
        </div>
      </div>
    </div>

    <div class="about-buttons flex items-center gap-2">
      <CButton
        text="Ko‘rish"
        variant="primary"
        size="md"
        class="!w-19 !h-7 !px-8 !min-w-19 !border-none !rounded-md !py-3 !text-white transition-all duration-300 hover:!bg-[#ff5964] !px-12 !py-5 !text-[14px]"
      >
        <template #suffix>
          <svg
            class="h-4 w-4 shrink-0 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="1.8"
            stroke-linecap="round"
            stroke-linejoin="round"
            aria-label="Oq globus"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18" />
            <path d="M12 3a15 15 0 0 1 0 18" />
            <path d="M12 3a15 15 0 0 0 0 18" />
          </svg>
        </template>
      </CButton>

      <CButton
        text="Biz haqimizda batafsil ➜"
        variant="secondary"
        size="md"
        class="!border-none !rounded-md !bg-[#202438] !px-5 !py-3 !text-white transition-all duration-300 hover:!bg-[#14182a] !text-[14px] !px-23 !py-5"
      >
        <template #suffix>
          <svg
            class="h-3.5 w-3.5 text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </template>
      </CButton>
    </div>

    <!-- Uchta card tugmalarning tagida -->
     <div class="mt-9 grid w-[700px] max-w-none grid-cols-3 gap-5">
      <CAboutCard
        v-for="item in cards"
        :key="item.title"
        :title="item.title"
        :statistic="item.statistic"
        :image="item.image"
      />
    </div>
    </div>
  </section>
  </div>
 
</template>

<script setup lang="ts">
import logo from '@/assets/logo.svg'
import CAboutCarousel from '../ui/CAboutCarousel.vue'
import CButton from '../forms/CButton.vue'
import CAboutCard from '../CAboutCard.vue'

const cards = [
  {
    title: 'Diqqatga sazovor joylar',
    statistic: 27,
    image: '/images/mosque/fa-solid_mosque.svg'
  },
  {
    title: 'Manzillar',
    statistic: 402,
    image: '/images/mask-svg/Mask group.svg'
  },
  {
    title: 'Davlatlar',
    statistic: 7,
    image: '/images/mask-svg/Mask group (1).svg'
  }
]
</script>

<style scoped>
.section {
  margin-left: 80px;
  margin-top: 90px;
}
.our-all{
margin-top: -230px;
}
.our {
  font-size: 45px;
  position: relative;
  display: inline-block;
  font-family: "Playfair Display", serif;
  font-weight: 550;
}

.our::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 3px;
  width: 275px;
  height: 2px;
  background: red;
}

.long {
  font-size: 20px;
  margin-top: 18px;
}

.images {
  display: flex;
  align-items: center;
  position: relative;
  gap: 0;
}

.first-picture {
  width: 105px;
  height: 100px;
  flex-shrink: 0;
  position: relative;
  z-index: 5;
}

.picture {
  display: block;
  width: 105px;
  cursor: pointer;
  transition: transform 1s ease;
}

.house-wrap {
  position: absolute;
  left: 0;
  top: 50%;
  width: 150px;
  transform: translateY(-50%);
  z-index: 4;
  transition: transform 0.45s ease;
}

.house {
  display: block;
  width: 150px;
  height: auto;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.59s ease, box-shadow 0.4s ease;
}

.images:has(.first-picture .picture:hover) .house {
  transform: translateX(150px);
}

.images > p {
  position: absolute;
  left: 80px;
  top: 50%;
  margin: 0;
  font-size: 14px;
  font-weight: 550;
  white-space: nowrap;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  transform: translateY(-50%);
  transition: clip-path 0.5s ease-in-out;
}

.images:has(.first-picture .picture:hover) > p {
  clip-path: inset(0);
}

.house-area {
  position: relative;
  width: 350px;
  height: 100px;
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 20px;
}

.house-area p {
  position: absolute;
  left: 150px;
  top: 50%;
  width: 100%;
  margin: 0;
  font-size: 14px;
  font-weight: 550;
  overflow: hidden;
  clip-path: inset(0 100% 0 0);
  transform: translateY(-50%);
  transition: clip-path 0.5s ease-in-out;
}

.house-area:has(.house:hover) p {
  clip-path: inset(0);
}

.about-buttons {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: 18px;
}

.about-buttons button {
  box-sizing: border-box;
  height: 30px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  padding: 0 12px;
  border-radius: 5px;
  color: #fff;
  font-family: inherit;
  font-size: 10px;
  font-weight: 600;
  white-space: nowrap;
  cursor: pointer;
  transition: all 0.25s ease;
}

.watch-button {
  background: #ef444b;
}

.watch-button:hover {
  background: #ff535a;
  transform: translateY(-2px);
  box-shadow: 0 4px 12px #ef444b55;
}

.watch-icon {
  display: inline-flex;
  width: 13px;
  height: 13px;
  cursor: pointer;
}

.watch-icon svg {
  width: 100%;
  height: 100%;
}

.details-button {
  background: #25283b;
  border: 1px solid #30344a;
}

.details-button:hover {
  background: #343950;
  transform: translateY(-1px);
}

.arrow-icon {
  display: block;
  width: 9px;
  height: 9px;
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.details-button:hover .arrow-icon {
  transform: translateX(2px);
}
</style>
