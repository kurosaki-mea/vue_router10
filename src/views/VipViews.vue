<script setup lang="ts">
import { useRouter } from 'vue-router';
const router = useRouter()

const Logout = () => {
    // 清除本地保存的信息
    const vipName = localStorage.getItem('vip')
    localStorage.removeItem('vip')
    alert(`已经退出账号：${vipName}`)
    // 退出账号后，跳转到登录页（或首页 /）
    router.push('/login')

}

</script>

<template>
<div>
    <h1> VIP page</h1>
    <nav>
        <button @click="Logout">退出登录</button>
    </nav>
</div>
</template>