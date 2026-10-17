<script setup lang="ts">

// 直接像普通组件一样用 defineProps 接收, 不需要再写 useRoute() 了
defineProps<{
    id: number,
    name?: string,
    age?: number
}>()


</script>
<template>
<div>
    <h1>解耦</h1>
    <h2>当前用户id：{{ id }}</h2>
    <h2>当前用户name：{{ name }}</h2>
    <h2>当前用户age：{{ age }}</h2>

</div>

</template>
<style lang="css" scoped>


</style>