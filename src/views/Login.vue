<script setup lang="ts">
import { useRouter } from 'vue-router'
import { ref } from 'vue';

const router = useRouter() // 1. 获取路由实例
const userName = ref('');
const userVip = ref('')

const Login = () => {
    if( userName.value === '111') {
        // 模拟登录，写入数据到 localStorage
        // 写入 setItem; 读取 getItem; 删除 removeItem;
        localStorage.setItem('name',userName.value)
        // es6 反引号（` `）包裹整个字符串，并通过 ${...} 插入变量
        alert(`登录成功，已存入 localStorage，欢迎：${userName.value}！！！`)
        // 2. 自动跳转到后台页面
        router.push('/dashboard')
    } else {
        alert('请输入正确的信息')
    }
}

const LoginVip = () => {
    if( userVip.value === 'vip999') {
        // 模拟登录，写入数据到 localStorage
        // 写入 setItem; 读取 getItem; 删除 removeItem;
        localStorage.setItem('vip',userVip.value)
        alert(`登录成功，已存入 localStorage，欢迎：${userVip.value}！！！`)
        // 2. 自动跳转到后台页面
        router.push('/vip')
    } else {
        alert('请输入正确的信息')
    }
}

</script>

<template>
    <h1>这里是登录页面，请先登录账号login</h1>
    <div>
        <input v-model="userName" placeholder="请输入用户名" />
        <button @click="Login">登录</button>
        <p> 例如 name : 111 </p>
    </div>
    <h1>这里是 VIP 登录页面，请先登录账号login</h1>
    <div>
        <input v-model="userVip" placeholder="请输入用户名" />
        <button @click="LoginVip">登录</button>
        <p> 例如 name : vip999 </p>
    </div>
    
</template>