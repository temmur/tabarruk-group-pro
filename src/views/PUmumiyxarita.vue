
<template>
  <main class="container min-h-screen py-8">

 
    <!-- Sarlavha -->
    <h1 class="mb-6 text-3xl font-bold text-white">
      Umumiy Xarita
    </h1>

    <!-- OQ XARITA JOYI -->
    <div
      class="min-h-[500px] w-full rounded-2xl
             bg-white shadow-lg"
    >
      <div
        class="flex min-h-[500px] items-center
               justify-center"
      >
        <div class="text-center">
          <h2 class="mb-3 text-2xl font-bold text-gray-900">
            Umumiy Xarita
          </h2>

          <p class="text-gray-600">
            Xarita shu yerda joylashadi.
          </p>
        </div>
      </div>
    </div>

  </main>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const goHome = () => {
  router.push('/')
}
</script>
