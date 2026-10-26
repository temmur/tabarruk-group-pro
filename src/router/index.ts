
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'LDefault',
    component: () => import('@/layouts/LDefault.vue'),
    children: [
      {
        path: '',
        name: 'home',
        component: () => import('@/views/PHome.vue')
      },
      {
        path: 'biz-haqimizda',
        name: 'biz-haqimizda',
        component: () => import('@/views/PBizXaqimizda.vue')
      },
      {
        path: 'dinlar',
        name: 'dinlar',
        component: () => import('@/views/PDinlar.vue')
      },
      {
        path: 'umumiy-xarita',
        name: 'umumiy-xarita',
        component: () => import('@/views/PUmumiyxarita.vue')
      },
      {
        path: 'yordam',
        name: 'yordam',
        component: () => import('@/views/PYordam.vue')
      },
      {
        path: 'faq',
        name: 'faq',
        component: () => import('@/views/PFaq.vue')
      },
      {
        path: 'playground',
        name: 'playground',
        component: () => import('@/views/PPlayground.vue'),
        alias: ['spark', 'tracker']
      },
      {
        path: 'davlatlar',
        name: 'davlatlar',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'uzbekistan',
        name: 'uzbekistan',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'turkey',
        name: 'turkey',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'turkmenistan',
        name: 'turkmenistan',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'azerbaijan',
        name: 'azerbaijan',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'kazakhstan',
        name: 'kazakhstan',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'kyrgyzstan',
        name: 'kyrgyzstan',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'hungary',
        name: 'hungary',
        component: () => import('@/views/PDavlatlar.vue')
      },
      {
        path: 'news/:id',
        name: 'news-single',
        component: () => import('@/views/PSingle.vue')
      },
      {
        path: 'country/:id',
        name: "country-single",
        component: ()=> import('@/views/countries/PIndex.vue')
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 }
  }
})

export default router
  