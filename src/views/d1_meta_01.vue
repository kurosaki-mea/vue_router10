<script setup lang="ts">

console.log('这是 meta 页面')


import { computed } from 'vue'
import { useRoute } from 'vue-router'

// 1. 调用 useRoute() 获取当前路由实例
const route = useRoute()

// 2. 直接从 route.meta 中读取你刚才定义的字段
const page_vipNumber = route.meta.vipNumber // 结果会是 999
const page_title = route.meta.title     // 结果会是 'meta测试页面用'
</script>

<template>
    <h1>这是 meta 页面</h1>
    <!-- 直接在模板中渲染获取到的 meta 数据 -->
    <h1>直接在模板中渲染获取到的 meta 数据</h1>
    <h1> route.meta.xxx </h1>
    <h3>当前页面的 VIP 要求级别是：{{ page_vipNumber }}</h3>
    <h3>当前页面的标题是：{{ page_title }}</h3>
</template>