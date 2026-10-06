<template>
   <header class="py-6">
    <div class="container flex items-center justify-between">
        <img class="w-full max-w-92.5" src="https://tabarrukziyorat.sayohat.uz/logo/ru.svg" alt="">
        <nav class="flex items-center gap-7 relative ">
            <ul class="flex items-center gap-7">
                <li v-for="(el, idx) in navList" :key="idx">
                    <router-link :to="el.router">{{ el.name }}</router-link>
                </li>
            </ul>
            <CLanguageSwitcher/>
            <CSearch
            v-show="inputShow"
            class="absolute right-10"/>
            <i :class="[inputShow ? 'icon-xmark' : 'icon-search']"
             @click="inputShow = !inputShow"
             class="text-2xl cursor-pointer"
             ></i>
        </nav>
    </div>
   </header>
</template>
<script setup lang="ts">
import {ref, reactive} from 'vue'
import CLanguageSwitcher from '../ui/CLanguageSwitcher.vue';
import CSearch from '../forms/CSearch.vue';
let inputShow = ref(false)
const navList = reactive([
    {
        name: 'О нас',
        router: '/about'
    }, 
    {
        name: 'Страны',
        router: '/countries'
    }, 
    {
        name: 'Общая карта', 
        router: '/map'
    },
    {
        name: 'Религии',
        router: '/religions'
    }, 
    {
        name: 'Помощь', 
        router: '/help'
    },
    {
        name: 'FAQ',
        router: "/faq"
    }
])
</script>