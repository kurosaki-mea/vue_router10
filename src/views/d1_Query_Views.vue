<script setup lang="ts">

// 从 vue-router 库中引入一个叫 useRoute 的组合式 API 函数
//// 1. 从 vue-router 引入 useRoute 函数（用来获取当前路由信息的钩子函数）
import { useRoute } from 'vue-router';

// 调用这个函数，获取一个代表当前页面路由信息的响应式对象，赋给变量 route
//// 2. 调用 useRoute()，生成并获取当前页面的只读路由信息对象（包含 query、params、path 等）
const route = useRoute();


//监听 Query 参数变化（响应式）
//如果用户在同一个组件页面，只是 URL 上的 query 参数变了（比如从 ?id=1 变成 ?id=2），默认情况下组件不会重新加载。你需要知道怎么响应这个变化：
// import { useRoute } from 'vue-router';
import { watch } from 'vue';
// const route = useRoute();
//监听 query 的变化，触发数据重新加载
watch( 
    () => route.query.id, // 第 1 个参数：Getter 函数
    (newId) => {          // 第 2 个参数：回调函数
        console.log('id变了，最新的id是', newId);
        console.log(route.query)
    },
    // 第 3 参数：配置选项对象 / 初始化配置
    // immediate开启“立即执行”：组件刚挂载加载时强制先运行一次回调函数，不再等待参数变动
    { immediate: true }
)


/*
// 监听 Query 参数变化（响应式）
// 如果用户在同一个组件页面，只是 URL 上的 query 参数变了（比如从 ?id=1 变成 ?id=2），
// 默认情况下组件不会重新加载。你需要知道怎么响应这个变化：
import { useRoute } from 'vue-router';
import { watch } from 'vue';
const route = useRoute();
// 监听 query 的变化，触发数据重新加载
watch( () => route.query.id, (newId) => {
    console.log('id变了，最新的id是', newId)
})


*/




</script>
<template>
<div>
    <h1> query </h1>
    <h2>当前参数：{{ route.query.id }}</h2>
    <h3>这个 route.query 的内容是： {{ route.query }}</h3>
    <button @click="$router.back()">返回</button>
</div>


</template>
<style lang="css" scoped>

</style>