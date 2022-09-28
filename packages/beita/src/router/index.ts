import type { App } from 'vue'
import { createRouter, createWebHistory, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import { RouteMode } from '../types'

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

interface Option {
    mode: string
    base: string
    routes: RouteRecordRaw[]
}

export default {
    install: (app: App, opts: Option) => {
        const { mode, base, routes } = opts

        const history =
            mode === RouteMode.History ? createWebHistory(base) : createWebHashHistory(base)

        const router = createRouter({
            history,
            routes: [
                ...innerRoutes,
                {
                    path: '/',
                    component: () => import('../layout'),
                    children: [
                        ...routes,
                        {
                            path: '/:catchAll(.*)',
                            name: 'NotFound',
                            component: () => import('../views/result/noFound.vue'),
                        },
                    ],
                },
            ],
        })

        app.use(router)
    },
}
