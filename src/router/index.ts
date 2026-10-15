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
      }
    ]
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
