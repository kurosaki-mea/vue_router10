<script setup lang="ts">
// 引入 RouterLink
import { RouterLink } from 'vue-router';

// js ts 编程式导航，点击按钮跳转
import { useRouter } from 'vue-router'
const router = useRouter();

// 定义事件 调用执行即可跳转
const goToViews = () => {
    // 代码发起跳转
    router.push({
        name: 'd1QueryViews',
        query: {
            id: 123,
            name: '这个是JS TS编程式导航 路由跳转'
        }
    })
}
// 可选传参?，id必传，name可传可不传
const goToViewsV2 = (YouId: number,YourName?: string) => {
    // 代码发起跳转
    router.push({
        name: 'd1QueryViews',
        query: {
            id: YouId,
            name: YourName
        }
    })
}




</script>
<template>
    <div>
        <h1>Vue Router - Query 查询参数</h1>
        <nav>
            <h2>方式1：普通属性赋值，通过 path 跳转，拼接url</h2>
            <RouterLink to="/d1_Query_Views?id=123&name=汉堡王">Query 查询参数 to="/d1_Query_Views?id=123</RouterLink>
            <h2>方式2：动态属性绑定，通过 name 跳转，用 path 也行，只要是对象形式</h2>
            <RouterLink :to="{
                name: 'd1QueryViews',
                query: {
                    id: 123,
                    name: '这是对象形式的'
                }
            }">对象形式的query参数 :to="{name:'xxxVue', query:{id:123 }}"</RouterLink>
            <p>
                to="xxxxx"（普通属性赋值）：
                Vue 会把它当作纯字符串处理。里面写什么，路由就跳转到什么字符串路径。
                例如：to="/d1_Query_Views?id=123" 传过去的就是这一整串文本。
                <br/>
                :to="{ ... }"（动态属性绑定）：
                :to 是 v-bind:to 的缩写。加上冒号 : 后，引号内部就不再是纯字符串，而是 JS/TS 表达式。
                <br/>
                在 :to="{ path: '/xxx', query: { id: myId } }" 中，大括号 {} 代表一个 JS 对象，myId 可以是变量。它被称为“动态对象绑定”，因为可以把响应式变量、数字、复杂对象放进去，Vue 会自动解析并拼装 URL。
            </p>
        </nav>
    </div>
    <div>
        <h1>2、JS / TS 代码编程式导航</h1>
        <nav>
            <button @click="goToViews" type="button">点击跳转并传参</button>
        </nav>
        <nav>
            1、可选传参，只传id，name可传可不传（name?）：567
            <button @click="goToViewsV2(567)" type="button">可选传参</button><br/>
            2、可选传参，只传id，name可传可不传（name?）：567,'这是一段话'
            <button @click="goToViewsV2(8910,'这是一段话')" type="button">点击跳转并传参</button>
        </nav>
    </div>



</template>
<style lang="css" scoped></style>