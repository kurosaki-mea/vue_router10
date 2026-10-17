<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router';
import AppR_01 from './components/AppRouter_01.vue'

</script>

<template>
  <h1>router </h1>
  <AppR_01 />
  <nav>
    <RouterLink to="/">主页</RouterLink>
    <RouterLink to="/about">关于</RouterLink>
    <RouterLink :to="{ name: 'd1Params'}">d1 看看 Params</RouterLink>
    <RouterLink :to="{ name: 'd1Query'}">d1 看看 Query</RouterLink>

    <RouterLink to="/goods">去商城看看</RouterLink>
    <!-- 方式 1：直接拼接路径 -->
    <RouterLink to="/user/123">查看用户 123</RouterLink>
    <!-- 方式 2：使用命名路由 + params 属性（推荐） -->
    <!-- <RouterLink :to="{ name: 'userDetail', params: { id: '123' } }">查看用户123</RouterLink> -->
    <RouterLink :to="{ 
      name: 'userDetail',
      params: {
        id: '八九十'
      }
    }">查看用户 123八九十</RouterLink>

  

  </nav>

  <div>
    <RouterView />
  </div>
</template>

<style scoped>
nav a {
  margin: 5px 10px;
}
</style>
