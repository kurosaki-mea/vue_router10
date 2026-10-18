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
    },
    /*
    // 1. 布尔模式：props: true（默认仅支持 params）
        特点：默认机制，将 route.params 设置为组件属性。
        适用场景：路径参数（如 /user/123）。
    {
        path: '/user',
        name: 'user',
        component: () => import('@/views/user.vue')
        props: true,  // 关键 开启 props 解耦
    },

    // 2. 函数模式：props: route => ({ ... })（支持 query 及自定义逻辑）
    {
        path: '/user',
        component: User,
        // 显式将 route.query 映射为组件的 props
        props: route => route.query 
    },
    // 混合传参（同时解耦 params 和 query）：
    {
        path: '/user/:id',
        component: User,
        // 同时把 params 和 query 组合成一个对象传给 props
        props: route => ({ id: route.params.id, ...route.query })
    },
    // 3. 对象模式：props: { ... }（用于传递静态固定值）
    // 特点：当 props 是一个静态对象时，它会原样按属性传递给组件，适用于传静态常量。
    {
        path: '/user',
        component: User,
        props: { role: 'admin' } // 组件内可直接通过 defineProps 接收 role
    },
    // 总结备忘
    // 写 props: true ➔ 默认只处理 params。
    // 想解耦 query ➔ 必须写成函数 props: route => route.query。
    */
    {
        path: '/getTxt',
        component: () => import('@/views/d1_Props_Views.vue'),
        props: {
            JingTai: '这个是用于传递静态固定值，然后组件defineProps接收'
        }
    }


]