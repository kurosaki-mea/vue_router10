<script setup lang="ts">


// 直接像普通组件一样用 defineProps 接收, 不需要再写 useRoute() 了
defineProps<{
    id: number,
    name?: string,
    age?: number
}>()


// 批量声明：允许传入任意 key-value 键值对
// const props = defineProps<Record<string, any>>();

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