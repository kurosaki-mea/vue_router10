<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';

</script>
<template>
    <div>
        <h1>Vue Router - Query 查询参数</h1>
        <nav>
            <h2>方式1：通过 path 跳转，拼接url</h2>
            <RouterLink to="/d1_Query_Views?id=123&name=汉堡王"> Query 查询参数 </RouterLink>
            <h2>方式2：通过 name 跳转，用 path 也行，只要是对象形式</h2>
            <RouterLink :to="{
                name: 'd1QueryViews',
                query: {
                    id: 123,
                    name: '这是对象形式的'
                }
            }">前往 Views </RouterLink>
        </nav>
    </div>



</template>
<style lang="css" scoped></style>