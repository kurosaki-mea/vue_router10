<script setup lang="ts">
// 自动接收路由传过来的 id 参数
defineProps({
    id: String
})

</script>
<template>
    <h1>这里是商品的单独页面</h1>
    <div class="page">
        <h1>商品详情页</h1>
        <p>当前商品 ID 是：{{ id }}</p>
        <button @click="$router.back()">返回商城页</button>
    </div>

</template>
<style scoped></style>