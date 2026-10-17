<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
</script>
<template>
    <div>
        <h1>这个是 ViewsAbout 下的 Ex1</h1>
        <h1>文件夹：pages / ViewsAboutEx1.vue</h1>
    </div>
    <nav>
        <RouterLink :to="{ name: 'ex1m1Page' }">前往ex1m1</RouterLink>
        <RouterLink :to="{ name: 'ex1m2Page' }">前往ex1m12</RouterLink>
    </nav>
    <RouterView />

</template>
<style scoped>
nav a {
    margin: 5px 10px;
}
</style>