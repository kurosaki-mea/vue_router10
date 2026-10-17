<script setup lang="ts">


</script>
<template>
    <h1>这里是商城主页</h1>
    <h2>goods 和 goods/:id 平级，
        这两个 RouterLink 的出口是 App.vue 的 RouterView 

    </h2>
    <nav>
        <RouterLink to="/goods/1001">展示 1001 号</RouterLink>
    </nav>

</template>
<style scoped></style>

<!-- 
传递参数的完整“接力赛”流程
第一棒：路由定义中的 :id（动态占位符）

在 path: '/goods/:id' 中，:id 就像函数的形参（占位符）。

它的作用是告诉 Vue Router：“凡是 /goods/ 后面跟的一串字符（比如 /goods/1111），都帮我把它捕获下来，命名为 id 变量”。

第二棒：用户触发 to="/goods/1111"（实参）

这里的 '1111' 就是实参（具体的值）。

此时 URL 变成了 /goods/1111，Vue Router 的内部对象 route.params 就会自动存入 { id: '1111' }。

第三棒：路由配置 props: true（解耦开关）

默认情况下，如果没有开启 props: true，组件必须通过 route.params.id 去取值（这样组件和路由绑定太紧）。

一旦开启了 props: true，Vue Router 就会把 route.params 里的所有属性（即 { id: '1111' }），自动转换并透传为组件的 props。

第四棒：组件内的 defineProps({ id: String })（接收与类型校验）

在 GoodsDetail.vue 中，你通过 defineProps({ id: String }) 声明：“我已经准备好接收一个名字叫 id、类型为 String 的属性了”。

Vue 监听到通过路由传进来的 props 包含 id，就顺利赋值给组件。

终点：在模板中用 {{ id }} 渲染

此时组件作用域里就有了 id 这个响应式变量，直接在 <template> 内部写 {{ id }}，页面上就会高亮显示出 1111。

-->