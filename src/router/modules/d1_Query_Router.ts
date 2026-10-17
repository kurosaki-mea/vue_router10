
// 导入 Query_01.vue 组件
// 专门发送各种 RouterLink to xxxx 请求
import d1_Query_01 from "@/views/d1_Query_01.vue";


// 接收 参数 展示 输出 渲染
import d1_Query_Views from "@/views/d1_Query_Views.vue"

// router 路由规则
export default [
    {
        path: '/d1_Query',
        name: 'd1Query',
        component: d1_Query_01,
    },
    {
        path: '/d1_Query_Views',
        name: 'd1QueryViews',
        component: d1_Query_Views
    }
]