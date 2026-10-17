export default [
    {
        path: '/user/:id',
        name: 'userDetail',
        component: () => import('@/views/UserDetail.vue')
    }
]