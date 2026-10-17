import type { RouteLocationNormalized } from 'vue-router';


export default [
    {
        path: '/d1_Props',
        name: 'd1Props',
        component: () => import('@/views/d1_Props_01.vue')
    },
    // 第一步：路由配置文件; 解耦 模块
    {
        path: '/d1_Props/:id',
        name: 'd1PropsId',
        component: () => import('@/views/d1_Props_Views.vue'),
        // 开启 props 解耦，Vue 会自动把 params.id 转化为组件的 props 传进去
        props: true, // 关键

    },
    {
        path: '/d1_PropsV2/:id/:name?',  // :id 是必传参数，:name? 是可选参数（带问号）
        name: 'd1PropsIdV2',
        component: () => import('@/views/d1_Props_Views.vue'),
        props: true
    },
    {
        path: '/d1_PropsV3/:id/:name?/:age?',
        name: 'd1PropsIdV3',
        component: () => import('@/views/d1_Props_Views.vue'),
        props: true
    },
    // 参数多的时候，可使用 query 查询参数
    // 当然，也可使用状态管理（Pinia / Vuex）或 SessionStorage（适合大对象/不希望在 URL 显露）
    {
        path: '/d1_PropsQueryV2_Query',
        name: 'd1PropsQuery',
        component: () => import('@/views/d1_Props_ViewsV2_Query.vue'),
        // 重点：使用函数形式开启 props 解耦，可以直接把 query 对象转为 props 传给组件
        // 使用精准类型约束，不报红
        props: (route: RouteLocationNormalized) => route.query
    }

]