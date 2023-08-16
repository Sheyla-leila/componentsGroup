import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
    {
        path: '/',
        redirect: 'Home'
    },
    {
        path: '/home',
        name: 'Home',
        component: () => import('../views/home.vue')
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes
})

export default router