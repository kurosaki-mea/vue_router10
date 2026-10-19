<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const Logout = () => {
    if( localStorage.getItem('name') ) {
        localStorage.removeItem('name')
        alert('已经退出账号')
        // 1. 退出账号后，重定向到登录页 或者 主页
        router.push('/Login')
    }
}

</script>


<template>
    <h1>后台</h1>
    <h1>这里是 login DashBoard </h1>
    <nav>
        <button @click="Logout">退出登录</button>
    </nav>
</template>