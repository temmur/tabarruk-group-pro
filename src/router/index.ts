import {createRouter, createWebHistory} from 'vue-router'

const routes = [
    {
        path: '/',
        name: 'LDefault', 
        component: ()=> import('@/layouts/LDefault.vue'),
        children: [
            {
        path: '/',
        name: 'home', 
        component: ()=> import('@/views/PHome.vue')
            },
            {
                path: '/playground', 
                name: 'playground',
                component: ()=> import('@/views/PPlayground.vue'),
                alias: ['spark', 'tracker']
            }
        ]
    }
]

const router = createRouter({
    routes, 
    history: createWebHistory()
})

export default router