import type { App } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { RouteModeEnum } from '../defineConfig'

const innerRoutes = [
    {
        path: '/',
        redirect: '/login',
    },
    {
        path: '/login',
        name: '登录页',
        component: () => import('../views/user/login.vue'),
    },
]

export const noFoundRoute = {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('../views/result/noFound.vue'),
}

interface Option {
    mode: string
    base: string
}

export default {
    install: (app: App, opts: Option) => {
        const { mode, base } = opts

        const history =
            mode === RouteModeEnum.History ? createWebHistory(base) : createWebHashHistory(base)

        const router = createRouter({
            history,
            routes: innerRoutes,
        })

        app.use(router)
    },
}
