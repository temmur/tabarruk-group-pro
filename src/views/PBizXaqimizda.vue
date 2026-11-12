
<template>
  <main class="min-h-screen w-full overflow-hidden bg-[#08091d] text-white">
    <!-- Banner Section -->
    <section class="relative h-[300px] w-full overflow-hidden bg-[#08091d] sm:h-[440px] lg:h-[575px]">
      <div class="absolute inset-0 flex h-full w-full overflow-hidden">
        <div
          v-for="(image, index) in aboutData.images"
          :key="image"
          class="relative mx-[-4.5%] h-full min-w-0 flex-1 overflow-hidden first:ml-[-3.5%] last:mr-[-5.5%] max-sm:mx-[-4%]"
          style="clip-path: polygon(25% 0, 100% 0, 75% 100%, 0 100%)"
        >
          <img
            :src="image"
            :alt="`${aboutData.title} ${index + 1}`"
            class="block h-full w-full object-cover object-center"
            @error="handleBannerImageError(image)"
          />
        </div>
      </div>

      <div class="pointer-events-none absolute inset-0 bg-gradient-to-b from-[rgba(5,7,24,0.04)] via-[rgba(5,7,24,0.02)] to-[rgba(5,7,24,0.18)]"></div>
    </section>

    <!-- Title and Statistics -->
    <section class="relative bg-[radial-gradient(ellipse_at_50%_10%,rgba(24,27,58,0.2),transparent_65%),#08091d]">
      <div class="mx-auto box-border w-full max-w-[1300px] px-[18px] pb-[45px] pt-[18px] sm:px-[22px] sm:pb-[70px] lg:px-[28px]">
        <nav aria-label="Breadcrumb" class="mb-[45px] flex min-h-6 flex-wrap items-center gap-[7px] text-xs sm:mb-[55px] sm:gap-[10px] sm:text-sm lg:mb-[82px]">
          <RouterLink to="/" class="inline-flex items-center gap-[6px] font-semibold text-white no-underline transition-colors hover:text-[#e7474c]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">
              <path d="m3 10 9-7 9 7" />
              <path d="M5 9v11h14V9" />
              <path d="M9 20v-7h6v7" />
            </svg>
            Asosiy
          </RouterLink>
          <span class="text-[23px] leading-none text-[#e7474c]">›</span>
          <span class="text-[#858797]">Biz haqimizda</span>
        </nav>

        <div class="max-w-[1000px]">
          <h1 class="m-0 font-serif text-[34px] font-bold leading-[1.25] text-white sm:text-[clamp(34px,4vw,48px)]">
            Biz haqimizda
          </h1>
          <div class="mt-4 h-[3px] w-[76px] rounded-sm bg-[#e7474c] sm:mt-5"></div>
        </div>

        <div class="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          <CAboutCard
            v-for="stat in aboutData.stats"
            :key="stat.id"
            :title="stat.title"
            :statistic="stat.statistic"
            :image="stat.image"
          />
        </div>
      </div>
    </section>

    <!-- Purpose, Supporters and Map -->
    <section class="relative overflow-hidden border-t border-white/5 bg-[#0a0b20] xl:min-h-[720px]">
      <div class="relative z-10 mx-auto box-border w-full max-w-[1300px] px-[18px] py-12 sm:px-[22px] sm:py-16 lg:px-[28px] xl:pointer-events-none xl:py-14">
        <div class="xl:pointer-events-auto xl:max-w-[600px]">
          <h2 class="m-0 font-serif text-[34px] font-bold leading-[1.25] text-white sm:text-[clamp(34px,4vw,48px)]">
            Bizning Maqsad
          </h2>

          <p class="mb-0 mt-5 text-base leading-[1.75] text-white sm:text-lg">
            Maqolalar, fotosuratlar va videolar orqali turkiy mamlakatlarning muqaddas qadamjoylari va tarixiy merosi bilan bog‘liq maskanlarini targ‘ib qilish. Qadimiy obidalar, muhtasham masjidlar, o‘rta asrga oid qal’alar va nafis koshinlar go‘zalligini kashf eting hamda mintaqa o‘tmishida o‘z izini qoldirgan afsonaviy hukmdorlar va allomalar haqida bilib oling.
          </p>

          <div class="mt-10 xl:mt-9">
            <h3 class="m-0 mb-4 text-lg font-semibold text-white sm:text-xl">
              Bizning qo‘llab-quvvatlovchilarimiz
            </h3>

            <ul class="m-0 flex list-none flex-col gap-4 p-0">
              <li class="flex w-full max-w-[475px] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-5 backdrop-blur-sm sm:px-5">
                <img :src="logo" alt="Turkiy davlatlar tashkiloti logotipi" class="h-[54px] w-[54px] shrink-0 object-contain" />
                <p class="m-0 font-serif text-base font-bold leading-snug text-white sm:text-[17px]">
                  Turkiy davlatlar tashkiloti
                </p>
              </li>

              <li class="flex w-full max-w-[475px] items-center gap-4 rounded-lg border border-white/10 bg-white/[0.04] px-4 py-6 backdrop-blur-sm sm:gap-5 sm:px-5">
                <img src="/images/registon.jpg" alt="Registon" class="w-24 shrink-0 rounded-md object-cover sm:w-28" />
                <p class="m-0 font-serif text-base font-bold leading-snug text-white sm:text-[17px]">
                  O‘zbekiston Respublikasi Ekologiya, atrof-muhitni muhofaza qilish va iqlim o‘zgarishi vazirligi huzuridagi Turizm qo‘mitasi
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div class="relative box-border w-full px-[18px] pb-12 sm:px-[22px] sm:pb-16 xl:absolute xl:inset-y-0 xl:right-0 xl:z-0 xl:w-[56%] xl:overflow-hidden xl:px-0 xl:pb-0">
        <div class="relative aspect-[3/2] w-full xl:absolute xl:left-1/2 xl:top-1/2 xl:w-[108%] xl:-translate-x-1/2 xl:-translate-y-1/2">
          <img :src="mapImage" alt="Turkiy davlatlar xaritasi" class="absolute inset-0 h-full w-full object-cover" @error="handleImageError(mapImage)" />

          <div class="pointer-events-none absolute inset-0 hidden xl:block" style="background: linear-gradient(to right, #0a0b20 0%, #0a0b20 4%, rgba(10, 11, 32, 0) 28%), linear-gradient(to bottom, #0a0b20 0%, rgba(10, 11, 32, 0) 12%, rgba(10, 11, 32, 0) 88%, #0a0b20 100%)"></div>

          <div v-for="pin in mapPins" :key="pin.code" class="group absolute -translate-x-1/2 -translate-y-1/2" :style="{ left: `${pin.x}%`, top: `${pin.y}%` }">
            <div class="relative transition-transform duration-300 group-hover:-translate-y-1 group-hover:scale-105">
              <span class="absolute left-1/2 top-full -mt-[4px] h-2 w-2 -translate-x-1/2 rotate-45 bg-white/90 sm:h-2.5 sm:w-2.5"></span>
              <img :src="pin.flag" :alt="pin.name" :title="pin.name" class="relative block h-8 w-8 rounded-full border-2 border-white/80 object-cover shadow-[0_4px_12px_rgba(0,0,0,0.45)] sm:h-10 sm:w-10 xl:h-12 xl:w-12 2xl:h-14 2xl:w-14" loading="lazy" />
              <span class="pointer-events-none absolute left-1/2 top-[calc(100%+12px)] z-20 -translate-x-1/2 whitespace-nowrap rounded bg-black/75 px-2 py-1 text-xs font-medium text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100">
                {{ pin.name }}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Statements Carousel -->
    <section
      v-if="statements.length"
      class="relative border-t border-white/5 bg-[#08091d] py-14 sm:py-20"
      aria-roledescription="carousel"
      aria-labelledby="statements-title"
      @mouseenter="isPaused = true"
      @mouseleave="isPaused = false"
      @focusin="isPaused = true"
      @focusout="isPaused = false"
    >
      <div class="mx-auto box-border w-full max-w-[1300px] px-[18px] sm:px-[22px] lg:px-[28px]">
        <div class="text-center">
          <h2 id="statements-title" class="m-0 inline-block border-b-2 border-[#e7474c] pb-2 font-serif text-[34px] font-bold leading-[1.25] text-white sm:text-[clamp(34px,4vw,48px)]">
            {{ aboutData.statementsTitle }}
          </h2>
          <p class="mb-0 mt-6 text-lg text-white sm:text-xl">
            {{ aboutData.statementsSubtitle }}
          </p>
        </div>

        <div class="mt-4 grid grid-cols-2 gap-x-4 gap-y-6 sm:mt-6 md:grid-cols-[auto_1fr_auto] md:items-center md:gap-x-6 lg:gap-x-10">
          <button type="button" aria-label="Oldingi bayonot" class="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center justify-self-end rounded-full border border-white/25 bg-[#1b1d2e] text-white transition-colors duration-200 hover:border-white hover:bg-[#262a40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7474c] md:h-[62px] md:w-[62px] md:justify-self-auto" :class="{ invisible: !canSlide }" :disabled="!canSlide" @click="prev">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M19 12H5" />
              <path d="m12 19-7-7 7-7" />
            </svg>
          </button>

          <div class="order-first col-span-2 mx-auto w-full min-w-0 max-w-[1100px] touch-pan-y overflow-hidden px-1 pb-6 pt-16 [--lead:0] [--slot:100%] md:order-none md:col-span-1 md:[--lead:1] md:[--slot:33.3333%]" @touchstart.passive="onTouchStart" @touchend.passive="onTouchEnd">
            <div class="grid grid-cols-[var(--slot)]">
              <div v-for="slide in slides" :key="slide.v" class="col-start-1 row-start-1 px-2 transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform motion-reduce:transition-none md:px-3" :style="slideStyle(slide.v)" :aria-hidden="Math.abs(slide.v - pos) > 1">
                <article class="relative h-full min-h-[300px] rounded-[28px] border bg-[#15172a] px-5 pb-14 pt-[72px] text-center transition-all duration-700 ease-out motion-reduce:transition-none sm:px-6" :class="slide.v === pos ? 'border-white/30 opacity-100 shadow-[0_18px_50px_rgba(0,0,0,0.35)]' : 'border-white/10 opacity-60'">
                  <div class="absolute left-1/2 top-0 flex h-[104px] w-[104px] -translate-x-1/2 -translate-y-1/2 items-center justify-center overflow-hidden rounded-full border-2 border-white/80 bg-[#1b1d2e] shadow-[0_6px_18px_rgba(0,0,0,0.45)] sm:h-[112px] sm:w-[112px]">
                    <img v-if="!failedAvatars.has(slide.item.id)" :src="slide.item.image" :alt="slide.item.name" class="h-full w-full object-cover object-top" loading="lazy" @error="handleAvatarError(slide.item)" />
                    <span v-else class="font-serif text-2xl font-bold text-white/80">{{ getInitials(slide.item.name) }}</span>
                  </div>
                  <h3 class="m-0 text-xl font-semibold leading-snug text-[#e7474c]">{{ slide.item.name }}</h3>
                  <p class="mb-0 mt-2 text-base leading-snug text-white/90 sm:text-lg">{{ slide.item.role }}</p>
                  <blockquote class="m-0 mt-6 text-base font-bold leading-snug text-white sm:text-[17px]">{{ slide.item.quote }}</blockquote>
                  <span class="pointer-events-none absolute bottom-0 right-6 select-none font-serif text-[110px] leading-[0.8] text-white/10">”</span>
                </article>
              </div>
            </div>
          </div>

          <button type="button" aria-label="Keyingi bayonot" class="flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center justify-self-start rounded-full border border-white/25 bg-[#1b1d2e] text-white transition-colors duration-200 hover:border-white hover:bg-[#262a40] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7474c] md:h-[62px] md:w-[62px] md:justify-self-auto" :class="{ invisible: !canSlide }" :disabled="!canSlide" @click="next">
            <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>

    <!-- Promo Video Section -->
    <section class="relative isolate flex min-h-[420px] w-full flex-col items-center overflow-hidden border-t border-white/5 bg-[#08091d] sm:min-h-[520px] lg:min-h-[620px]" aria-labelledby="promo-video-title">
      <img :src="promo.background" alt="" aria-hidden="true" class="absolute inset-0 -z-20 h-full w-full object-cover object-center" @error="handleImageError(promo.background)" />
      <div class="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,#08091d_0%,rgba(8,9,29,0.6)_22%,rgba(8,9,29,0.35)_55%,#08091d_100%)]"></div>

      <h2 id="promo-video-title" class="m-0 px-[18px] pt-10 text-center font-serif text-[22px] font-bold leading-snug text-white sm:pt-12 sm:text-[28px]">
        {{ promo.title }}
      </h2>

      <div class="flex w-full flex-1 items-center justify-center px-[18px] py-10">
        <button ref="playButtonRef" type="button" class="group inline-flex cursor-pointer items-center gap-3 rounded-full border-0 bg-[#8b0f2f]/90 px-6 py-3 shadow-[0_18px_50px_rgba(0,0,0,0.45)] backdrop-blur-sm transition-colors duration-300 hover:bg-[#a31238] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:gap-5 sm:px-10 sm:py-4" :aria-label="`${promo.buttonLabel}: ${promo.videoTitle}`" @click="openVideo">
          <span v-if="labelLeft" class="select-none font-sans text-2xl font-extrabold tracking-wide text-white/50 sm:text-5xl">{{ labelLeft }}</span>
          <span class="flex h-[54px] w-[54px] shrink-0 items-center justify-center rounded-full bg-[#e7474c] text-white shadow-[0_6px_18px_rgba(0,0,0,0.4)] transition-transform duration-300 group-hover:scale-110 sm:h-[68px] sm:w-[68px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="currentColor" class="ml-1">
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
          <span v-if="labelRight" class="select-none font-sans text-2xl font-extrabold tracking-wide text-white/50 sm:text-5xl">{{ labelRight }}</span>
        </button>
      </div>
    </section>

    <!-- CONTACT SECTION: directly after Promo Video -->
    <section class="border-t border-white/10 bg-[#08091d] py-16 sm:py-20">
      <div class="mx-auto grid w-full max-w-[1040px] grid-cols-1 items-center gap-10 px-5 sm:px-8 lg:grid-cols-2 lg:gap-16">
        <!-- Contact information -->
        <div>
          <h2 class="mb-7 font-serif text-[30px] font-bold leading-tight text-white sm:text-[36px]">
            Biz bilan bog'lanish
          </h2>

          <div class="space-y-6">
            <div>
              <div class="mb-2 flex items-center gap-3 text-[#a5a7b2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M20 10c0 5-8 12-8 12S4 15 4 10a8 8 0 1 1 16 0Z" />
                  <circle cx="12" cy="10" r="2.5" />
                </svg>
                <span class="text-sm">Manzil</span>
              </div>
              <p class="m-0 font-semibold leading-relaxed text-white">
                Amir Temur shox ko'chasi, 107 B-uy, Toshkent, O'zbekiston
              </p>
            </div>

            <div>
              <div class="mb-2 flex items-center gap-3 text-[#a5a7b2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" />
                  <path d="m3 7 9 6 9-6" />
                </svg>
                <span class="text-sm">Elektron pochta manzili</span>
              </div>
              <a href="mailto:tabarruk.ziyorat@info.uz" class="font-semibold text-white no-underline transition-colors hover:text-[#e7474c]">
                tabarruk.ziyorat@info.uz
              </a>
            </div>

            <div>
              <div class="mb-2 flex items-center gap-3 text-[#a5a7b2]">
                <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.2 18a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 3.18 2 2 0 0 1 4.1 1h3a2 2 0 0 1 2 1.72c.12.96.35 1.9.7 2.8a2 2 0 0 1-.45 2.1L8.1 8.87a16 16 0 0 0 6 6l1.25-1.25a2 2 0 0 1 2.1-.45c.9.35 1.84.58 2.8.7a2 2 0 0 1 1.75 2.05Z" />
                </svg>
                <span class="text-sm">Telefon raqam</span>
              </div>
              <a href="tel:+998712007007" class="font-semibold text-white no-underline transition-colors hover:text-[#e7474c]">
                +998 71 200 7007
              </a>
            </div>
          </div>
        </div>

        <!-- Yandex Map -->
        <div class="h-[260px] w-full overflow-hidden rounded-xl border border-white/10 sm:h-[320px]">
          <iframe
            src="https://yandex.com/map-widget/v1/?text=Amir%20Temur%20shox%20ko%27chasi%20107%2C%20Tashkent%2C%20Uzbekistan&z=16"
            title="Tabarruk Ziyorat manzili xaritasi"
            class="h-full w-full border-0"
            loading="lazy"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>

    <!-- Video Modal -->
    <Teleport to="body">
      <Transition enter-active-class="transition-opacity duration-300 ease-out" enter-from-class="opacity-0" leave-active-class="transition-opacity duration-200 ease-in" leave-to-class="opacity-0">
        <div v-if="isVideoOpen" class="fixed inset-0 z-[1000] flex items-center justify-center bg-black/80 px-3 py-6 backdrop-blur-sm sm:px-6" role="dialog" aria-modal="true" aria-labelledby="promo-video-modal-title" @click.self="closeVideo">
          <div class="w-full overflow-hidden rounded-2xl border border-white/10 bg-[#0c0e24] shadow-[0_30px_80px_rgba(0,0,0,0.6)]" style="max-width: min(1100px, calc((100dvh - 8rem) * 16 / 9))">
            <div class="flex items-center justify-between gap-4 px-4 py-3 sm:px-6 sm:py-4">
              <h3 id="promo-video-modal-title" class="m-0 text-base font-semibold leading-snug text-white sm:text-xl">
                {{ promo.modalTitle }}
              </h3>
              <button ref="closeButtonRef" type="button" aria-label="Yopish" class="flex h-9 w-9 shrink-0 cursor-pointer items-center justify-center rounded-full border-0 bg-transparent text-white/80 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#e7474c]" @click="closeVideo">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </svg>
              </button>
            </div>

            <div class="relative aspect-video w-full bg-black">
              <iframe v-if="embedUrl" :src="embedUrl" :title="promo.videoTitle" class="absolute inset-0 h-full w-full border-0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
              <p v-else class="absolute inset-0 m-0 flex items-center justify-center px-6 text-center text-base text-white/70">
                Video havolasi hali qo‘shilmagan.
              </p>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </main>
</template>

<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'
import { RouterLink } from 'vue-router'
import { aboutData, type AboutStatement } from '@/data/aboutData'
import CAboutCard from '@/components/CAboutCard.vue'
import logo from '@/assets/logo.svg'

interface MapPin {
  code: string
  name: string
  flag: string
  x: number
  y: number
}

interface Slide {
  v: number
  item: AboutStatement
}

const mapImage = '/turkic-map.svg'

const mapPins: MapPin[] = [
  { code: 'hu', name: 'Vengriya', flag: 'https://flagcdn.com/w160/hu.png', x: 17.6, y: 39.5 },
  { code: 'tr', name: 'Turkiya', flag: 'https://flagcdn.com/w160/tr.png', x: 33.9, y: 58 },
  { code: 'az', name: 'Ozarbayjon', flag: 'https://flagcdn.com/w160/az.png', x: 50.3, y: 55.3 },
  { code: 'tm', name: 'Turkmaniston', flag: 'https://flagcdn.com/w160/tm.png', x: 62.3, y: 58.7 },
  { code: 'uz', name: 'O‘zbekiston', flag: 'https://flagcdn.com/w160/uz.png', x: 71, y: 52.8 },
  { code: 'kz', name: 'Qozog‘iston', flag: 'https://flagcdn.com/w160/kz.png', x: 73, y: 34.1 },
  { code: 'kg', name: 'Qirg‘iziston', flag: 'https://flagcdn.com/w160/kg.png', x: 81.1, y: 52.8 },
]

const promo = aboutData.promoVideo

const labelWords = promo.buttonLabel.trim().split(/\s+/).filter(Boolean)
const labelSplit = Math.ceil(labelWords.length / 2)
const labelLeft = labelWords.slice(0, labelSplit).join(' ')
const labelRight = labelWords.slice(labelSplit).join(' ')

function getYouTubeId(value: string): string {
  const input = value.trim()
  const idPattern = /^[\w-]{11}$/

  if (!input) return ''
  if (idPattern.test(input)) return input

  try {
    const url = new URL(input)
    const host = url.hostname.replace(/^www\./, '')

    if (host === 'youtu.be') {
      const id = url.pathname.split('/')[1] ?? ''
      return idPattern.test(id) ? id : ''
    }

    if (host === 'youtube.com' || host === 'm.youtube.com' || host === 'youtube-nocookie.com') {
      const id = url.searchParams.get('v') ?? url.pathname.split('/')[2] ?? ''
      return idPattern.test(id) ? id : ''
    }
  } catch {
    return ''
  }

  return ''
}

const videoId = getYouTubeId(promo.youtubeUrl)
const embedUrl = videoId
  ? `https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`
  : ''

const isVideoOpen = ref(false)
const playButtonRef = ref<HTMLButtonElement | null>(null)
const closeButtonRef = ref<HTMLButtonElement | null>(null)

let previousBodyOverflow = ''

async function openVideo() {
  isVideoOpen.value = true
  await nextTick()
  closeButtonRef.value?.focus()
}

function closeVideo() {
  isVideoOpen.value = false
  playButtonRef.value?.focus()
}

function onKeydown(event: KeyboardEvent) {
  if (event.key === 'Escape') closeVideo()
}

watch(isVideoOpen, (open) => {
  if (open) {
    previousBodyOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeydown)
  } else {
    document.body.style.overflow = previousBodyOverflow
    window.removeEventListener('keydown', onKeydown)
  }
})

const statements = aboutData.statements
const total = statements.length
const autoplayMs = aboutData.statementsAutoplayMs
const canSlide = total >= 3
const BUFFER = 3

const pos = ref(0)
const isPaused = ref(false)
const failedAvatars = reactive(new Set<number>())

const slides = computed<Slide[]>(() => {
  if (total === 0) return []
  if (!canSlide) return statements.map((item, v) => ({ v, item }))

  const list: Slide[] = []
  for (let v = pos.value - BUFFER; v <= pos.value + BUFFER; v++) {
    list.push({ v, item: statements[((v % total) + total) % total] })
  }
  return list
})

function slideStyle(v: number) {
  return {
    transform: `translateX(calc((${v - pos.value} + var(--lead)) * 100%))`,
  }
}

function next() {
  if (canSlide) pos.value += 1
}

function prev() {
  if (canSlide) pos.value -= 1
}

let touchStartX = 0

function onTouchStart(event: TouchEvent) {
  touchStartX = event.changedTouches[0]?.clientX ?? 0
}

function onTouchEnd(event: TouchEvent) {
  const deltaX = (event.changedTouches[0]?.clientX ?? 0) - touchStartX
  if (Math.abs(deltaX) < 50) return
  if (deltaX < 0) next()
  else prev()
}

let autoplayTimer: ReturnType<typeof setInterval> | null = null

onMounted(() => {
  if (autoplayMs > 0 && canSlide) {
    autoplayTimer = setInterval(() => {
      if (!isPaused.value) next()
    }, autoplayMs)
  }
})

onBeforeUnmount(() => {
  if (autoplayTimer) clearInterval(autoplayTimer)
  window.removeEventListener('keydown', onKeydown)
  if (isVideoOpen.value) document.body.style.overflow = previousBodyOverflow
})

function getInitials(name: string) {
  return name
    .split(' ')
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join('')
}

function handleAvatarError(item: AboutStatement) {
  console.error('Failed to load statement image:', item.image)
  failedAvatars.add(item.id)
}

function handleBannerImageError(image: string) {
  console.error('Failed to load banner image:', image)
}

function handleImageError(image: string) {
  console.error('Failed to load image:', image)
}
</script>
