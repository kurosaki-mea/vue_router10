<script setup lang="ts">

// 直接像普通组件一样用 defineProps 接收, 不需要再写 useRoute() 了
defineProps<{
    id: number,
    name?: string,
    age?: number,

    // 传递静态固定值
    JingTai: string,
}>()


</script>
<template>
<div>
    <h1>解耦</h1>
    <h2>当前用户id：{{ id }}</h2>
    <h2>当前用户name：{{ name }}</h2>
    <h2>当前用户age：{{ age }}</h2>
    <hr/>
    <h2>获取了静态固定值：{{ JingTai }}</h2>

</div>
<br/><br/><br/>
</template>
<style lang="css" scoped>


</style>