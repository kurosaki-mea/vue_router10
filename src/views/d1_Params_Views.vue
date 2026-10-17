<script setup lang="ts">
// 读取当前路由动态参数的最基础写法
// 1、从 vue-router 路由库中导入 useRoute 这个 Hook 函数
//    useRoute 专门用来获取当前激活的路由状态信息（只读的路由对象）
import { useRoute } from 'vue-router';

// 2、调用 useRoute() 函数，创建一个代表“当前页面路由”的响应式对象 route
//    route 对象里包含当前 URL 的所有元数据，比如 route.path（当前路径）、
//    route.query（问号后面的参数）、route.params（路径占位符参数）等
const route = useRoute();

</script>
<template>
    <div id="d1PV">
        <h1>这是d1_params_01传递过来的 params_views 页面</h1>
        <h1>动态路由匹配与传参：1. Params 传参（路径参数）</h1>
        <!-- 3、动态渲染 URL 路径中的 id 参数-->
        <h1>当前用户 id 是：{{ route.params.id }}</h1>
        <button @click="$router.back()">返回</button>
    </div>
</template>
<style lang="css" scoped>
#d1PV {
    background-color: rgb(149, 242, 63);
    font-size: 15px;
}
</style>