<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const Logout = () => {
    // 清除本地保存的信息
    localStorage.removeItem('name')
    alert('已经退出账号')
    // 退出账号后，跳转到登录页（或首页 /）
    router.push('/Login')

}

</script>


<template>
    <h1>后台</h1>
    <h1>这里是 login DashBoard </h1>
    <nav>
        <button @click="Logout">退出登录</button>
    </nav>
</template>