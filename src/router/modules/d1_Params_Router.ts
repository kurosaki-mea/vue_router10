
// 导入 Params_01.vue 组件
// 专门显示各种 RouterLink to xxxx 传递参数用
import d1_Params_01 from "@/views/d1_Params_01.vue";

// 暂时不用懒加载，不然修改vue项目后没有及时热更新，有缓存
// 接收传递来的参数 展示用
import d1_Params_Views from "@/views/d1_Params_Views.vue"

// router 路由规则
export default [
    {
        // 主要显示多个 routerLink 按钮 页面
        path: '/d1_params',
        name: 'd1Params',
        component: d1_Params_01,
        // 如果希望进入 /about 时默认重定向到某个子页面，可以加一个 redirect
        // redirect: '/about/intro',
        // children: [ { } ]
    },
    {
        // 主要展示接收来的参数 页面
        path: '/d1_params/:id',
        name: 'd1ParamsId',
        // 导入引用 views 目录下的显示传递参数的组件 d1_Params_views.vue
        // component: () => import('@/views/d1_Params_views.vue'),
        component: d1_Params_Views
    },
    {
        // 和上面一样，区别是有 可选的 :id?
        path: '/d1_paramsOPT/:id?',
        name: 'd1ParamsIdOPT',
        component: d1_Params_Views
    }
]


