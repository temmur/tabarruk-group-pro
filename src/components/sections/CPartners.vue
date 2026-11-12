
<template>
  <main class="partners">
    <h1>{{ t('partners.title') }}</h1>
    <div class="title-line"></div>

    <p class="description">
     {{ t('partners.subtitle') }}
    </p>

    <div class="carousel-area">
      <div class="flag-container">
  <div class="red-flag">
    
      <img class="imgr" src="https://tabarrukziyorat.sayohat.uz/_nuxt/partners-logo.svg" alt=" ">
    
  </div>
</div>


      <section class="carousel row-left">
        <div class="track">
          <div
            v-for="group in 2"
            :key="'left-' + group"
            class="group"
            :aria-hidden="group === 2 ? 'true' : undefined"
          >
            <div
              v-for="partner in partners"
              :key="'left-' + group + '-' + partner.id"
              class="logo-card"
            >
              <img
                :src="partner.image"
                :alt="partner.name"
                class="partner-logo"
              />

            </div>

          </div>
        </div>
      </section>
   

      

      <!-- Ikkinchi qator -->
      <section class="carousel row-right">
        <div class="track">
          <div
            v-for="group in 2"
            :key="'right-' + group"
            class="group"
            :aria-hidden="group === 2 ? 'true' : undefined"
          >
            <div
              v-for="partner in reversedPartners"
              :key="'right-' + group + '-' + partner.id"
              class="logo-card"
            >
          

              <img
                :src="partner.image"
                :alt="partner.name"
                class="partner-logo"
              />


           
            </div>
          </div>
        </div>
      </section>
    </div>
  </main>



</template>

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

interface Partner {
  id: number
  name: string
  image: string
}

const partners: Partner[] = [
  {
    id: 1,
    name: "O‘zbekiston Respublikasi",
    image: "https://admin.tabarrukziyorat.uz/media/partners/%D0%9A%D0%BE%D0%BC%D0%B8%D1%82%D0%B5%D1%82_%D0%BF%D0%BE_%D1%82%D1%83%D1%80%D0%B8%D0%B7%D0%BC%D1%83_%D1%83%D0%B7%D0%B1.png",
  },
  {
    id: 2,
    name: "Turizm qo‘mitasi",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqfcMJDAwfWsGkNkV5lP3gpQJspNgofC9e1em8ld5enUXSQPTha3ZyAo8&s=10",
  },
  {
    id: 3,
    name: "Ekologiya tashkiloti",
    image: "https://admin.tabarrukziyorat.uz/media/partners/ADM.png",
  },
  {
    id: 4,
    name: "Hamkor tashkilot",
    image: "https://admin.tabarrukziyorat.uz/media/partners/f6dfaee1-5f13-cfec-e602-eb3e09c726dc_authority_19.png",
  },

]

const reversedPartners = [...partners].reverse()
</script>

<style scoped>
* {
  box-sizing: border-box;
}

.partners {
  --bg: #07091b;
  --card: #151727;
  --border: #303246;
  --red: #ef444b;

  min-height: 100vh;
  padding: 56px 0 72px;
  overflow: hidden;
  background: var(--bg);
  color: #fff;
  font-family: Arial, Helvetica, sans-serif;
}

h1 {
  font-family: Georgia, "Times New Roman", serif;
  font-size: clamp(38px, 4vw, 52px);
  text-align: center;
  margin: 0 auto 8px;
  font-weight: 700;
}

.title-line {
  width: 252px;
  height: 3px;
  background: var(--red);
  margin: 0 auto 20px;
}

.description {
  text-align: center;
  font-size: clamp(15px, 1.65vw, 24px);
  line-height: 1.5;
  margin: 0 auto 54px;
  padding: 0 24px;
  color: #f6f6fb;
}

.carousel-area {
  position: relative;
}

.carousel {
  width: 100%;
  overflow: hidden;
  margin-bottom: 38px;
}

.track {
  display: flex;
  align-items: center;
  gap: 34px;
  width: max-content;
  will-change: transform;
}

.group {
  display: flex;
  align-items: center;
  gap: 34px;
  flex: none;
}

.logo-card {
  width: clamp(220px, 22vw, 350px);
  height: 120px;
  flex: none;
  border: 1px solid var(--border);
  border-radius: 16px;
  background: var(--card);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  overflow: hidden;
  transition: border-color 0.8s ease;

}

.logo-card:hover {
  border-color: var(--red);
  
}

.partner-logo {
  display: block;
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  transition: transform 0.4s ease;
}

.logo-card:hover .partner-logo {
  transform: scale(1.05);
}

/* Birinchi qator chapga harakatlanadi */
.row-left .track {
  animation: move-left 40s linear infinite;
}

/* Ikkinchi qator o'ngga harakatlanadi */
.row-right .track {
  animation: move-right 40s linear infinite;
}

/* Sichqoncha karusel ustiga kelganda to'xtaydi */
.carousel:hover .track {
  animation-play-state: paused;
}

 



@keyframes move-left {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(calc(-50% - 17px), 0, 0);
  }
}

@keyframes move-right {
  from {
    transform: translate3d(calc(-50% - 17px), 0, 0);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .row-left .track,
  .row-right .track {
    animation: none;
  }
}

@media (max-width: 760px) {
  .partners {
    padding-top: 42px;
  }

  .description {
    margin-bottom: 38px;
  }

  .logo-card {
    width: 220px;
    height: 112px;
    padding: 18px;

  }

  .track,
  .group {
    gap: 18px;
  }

  .carousel {
    margin-bottom: 24px;
  }



}
  .partners img{
      width: 80px;
  height: 50px;

  }
.cards-section {
  position: relative;

}





.flag-container {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  pointer-events: none;



}



.red-flag {
  
  width: 100px;
  height: 100px;
  object-fit: contain;







} 
.red-flag img{
  width: 100px;
  height: 100px;
  object-fit: contain;


       box-shadow:
            0 0 20px rgba(255, 60, 65, 0.4),
            0 0 40px rgba(255, 60, 65, 0.3),
            0 0 70px rgba(255, 60, 65, 0.15); 
            border-radius: 50px;
}



</style>
