
<template>
  <div class="container py-10">
    <div class="max-w-4xl mx-auto">

      
      <div class="space-y-4 text-[#A5A7B2] leading-relaxed">
        <p>
          Tabarruk Ziyorat loyihasi — ziyorat turizmini rivojlantirish va muqaddas qadamjolar haqida to'liq ma'lumot berishga qaratilgan platforma hisoblanadi.
        </p>

        <p>
          Bu yerda siz o'zingiz qiziqqan tarixiy obidalar, ziyoratgohlar va ularning joylashuvi haqida batafsil ma'lumot olishingiz mumkin.
        </p>
      </div>

    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
