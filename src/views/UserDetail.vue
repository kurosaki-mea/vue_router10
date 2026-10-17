<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

</script>
<template>
<div>
    <h1>这是用户页面：</h1>
    <h1>动态路由匹配与传参：1. Params 传参（路径参数）</h1>
    <h1>当前用户 id 是：{{ route.params.id }}</h1>

    <p>
        1、动态路由匹配与传参（重要）
        2、编程式导航
        3、路由守卫（导航守卫）
    </p>
</div>



</template>
<style escoped>

</style>