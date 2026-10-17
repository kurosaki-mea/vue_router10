<script setup lang="ts">
import { useRoute } from 'vue-router';

const route = useRoute();

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