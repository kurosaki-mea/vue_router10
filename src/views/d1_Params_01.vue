<script setup lang="ts">

// 3.2 编程式导航（在 JS / TS 代码中跳转传参）
// 导入引用 useRouter
import { useRouter } from 'vue-router';
const router = useRouter()

// 触发跳转函数
const goTo_d1_Params_Views = (Your_id: string) => {
    // 使用 命名路由 + params  
    router.push({
        name: 'd1ParamsId',
        params: {
            id: Your_id
        }
    })
}

// 3.3 params 注意：params 必须配合 name 使用
// 错误写法params 会被直接忽略，跳转后拿不到 id
/*
router.push({
  path: '/goods',
  params: { id: '1001' }
})

// 正确写法：使用 name
router.push({
  name: 'goodsDetail',
  params: { id: '1001' }
})

// 正确写法：或者直接写完整 path
router.push('/goods/1001')
*/


</script>
<template>
    <div>
        <h1>一、动态路由匹配与传参（重要）</h1>
        <h1>1、Params 路径动态参数</h1>
        <nav>
            <!-- 1. 路径传参 -->
            <RouterLink to="/d1_params/123">to 123</RouterLink>
            <!-- 对象形式写法1 -->
            <RouterLink :to="{ name: 'd1ParamsId', params: { id: '456' } }">to 456</RouterLink>
            <!-- 对象形式写法2：也可以这样写，更直观清晰 -->
            <RouterLink :to="{
                name: 'd1ParamsId',
                params: {
                    id: '八九十',
                }
            }">to 八九十</RouterLink>
        </nav>
    </div>
    <div>
        <nav>
            <h1>2、Params 路径传参的 3 种写法</h1>
            <h2>在实际开发中，从页面 A 跳转到页面 B 传 Params 参数，主要有以下 3 种表达方式：</h2>
            <h2>方式 1：直接写死字符串（最常用、最直观）</h2>
            <RouterLink to="/goods/1234">查看1234</RouterLink>
            <h2>方式 2：对象形式 + 动态拼接 path</h2>
            <!-- <RouterLink :to="{ path: `/goods/${goodsId}` }">查看商品</RouterLink> -->
            <h2>方式 3：对象形式 + name 命名路由（Vue Router 推荐的规范写法）
                如果你给路由起了 name，可以通过 params 对象来传参：</h2>
            <!-- 必须配合 name 使用，不能配合 path 使用！ -->
            <RouterLink :to="{ name: 'd1ParamsId', params: { id: '123456' } }">
                查看商品123456
            </RouterLink>
        </nav>
    </div>
    <div>
        <h1>3、1. 可选路径参数（参数可传可不传）</h1>
        <RouterLink to="/d1_paramsOPT/1234">可选参数 :id? </RouterLink>
        <p>
            访问 /goods/1001 ->> route.params.id 为 '1001' <br />
            访问 /goods ->> route.params.id 为 undefined
        </p>
        <h1>3、2. 编程式导航（在 JS / TS 代码中跳转传参）</h1>
        <p>除了使用 < RouterLink> 标签，真实业务中大量跳转是在函数中触发的（如点击按钮、请求接口成功后）：</p>
        <button @click="goTo_d1_Params_Views('123 这是编程式导航')" type="button">
            点我去1234 这是编程式导航 在js中跳转传参</button>

        <h1>3、3. 注意：params 必须配合 name 使用</h1>
        <p>如果使用 path + params，那么，params 会被直接忽略，跳转后拿不到 id</p>
        <p>正确：router.push({ name: 'goods', params: { id: '1001' } }) </p>
        <p>错误：router.push({ path: '/goods', params: { id: '1001' } }) </p>
    </div>
    <!-- 

一、 怎样才算“Params 路径传参”？（3 个核心特征）
只要代码符合下面这三个特征，就已经在使用 Params 路径传参 了：

1. 路由规则里带有冒号 :参数名（占位符）
路由规则中使用了 :key 来声明这是一个动态位置。

例如：path: '/goods/:id' 或 path: '/user/:userId/post/:postId'

含义：这里的 :id 就像一个变量名，告诉 Vue Router：“/goods/ 后面不管接什么字符串，都把它当作 id 提出来”。

2. 跳转路径时，把参数直接拼在 URL 路径里
在页面跳转时，参数是URL 路径的一部分，而不是在问号 ? 后面。

正确（Params）：<RouterLink to="/goods/1001"> 或 router.push('/goods/1001')

地址栏显示：http://localhost:5173/goods/1001（就像访问一个真实的文件路径）

3. 目标页面能拿到对应参数
无论是通过 props 接收（props: true），还是通过 route.params.id 提取，目标页面成功获取到了 1001 这个值。 
 
 
-->
</template>
<style scoped>
nav a {
    margin: 5px 10px;
}
</style>