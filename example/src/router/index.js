const routes = [
    {
        path: '/dashboard',
        name: '仪表盘',
        component: () => import('../view/dashboard/index.vue'),
    },
]

export default routes
