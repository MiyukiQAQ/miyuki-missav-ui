import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'


export const constRouter:Array<RouteRecordRaw> = [
    {
        path: '/downloadQueue',
        component: () => import('../components/DownloadQueue.vue') ,
    },
    {
        path: '/movies',
        component: () => import('../components/Movies.vue') ,
    },
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constRouter
})

export default router
