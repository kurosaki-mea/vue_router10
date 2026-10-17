<script setup lang="ts">
import { RouterLink,RouterView } from 'vue-router';

</script>
<template>
    <div>
        <h1>这个是 views 下的 ViewsAbout.vue 关于</h1>
    </div>

    <nav>
        <RouterLink to="/about/ex1">前往 Ex1</RouterLink>
    </nav>
    <nav>
        <RouterView />
    </nav>


</template>
<style scoped></style>