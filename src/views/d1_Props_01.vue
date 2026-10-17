<script setup lang="ts">


</script>
<template>
    <div>
        <h1> Vue Router Props 解耦</h1>
        <div>
            第一步：路由配置文件 <br />
            第二步：接收端组件 <br />
        </div>
        <nav>
            <!-- 只传 1 个参数 (id=123, name 为 undefined) -->
            传 1 个参数【path: '/d1_Props/:id'】：
            <RouterLink to="/d1_Props/123"> to="/d1Props/123" </RouterLink>
        </nav>
        <nav>
            <!-- 传 2 个参数 (id=123, name=abc) -->
            传 2 个参数【path: '/d1_PropsV2/:id/:name?'】：
            <RouterLink to="/d1_PropsV2/123/abc"> to="/d1PropsV2/123/abc" </RouterLink>
        </nav>
        <nav>
            <!-- 对象形式写法（推荐，最不容易出错） -->
            传 多个参数【】：
            <RouterLink :to="{
                name: 'd1PropsIdV3',
                params: {
                    id: 123,
                    name: 'abc',
                    age: 20
                }
            }">对象形式写法</RouterLink>
        </nav>
        <nav>
            <h1>参数较多可以用 query 查询参数</h1>
            <p>Query 参数不需要在路由的 path 里定义任何 :占位符
                路由配置 path: '/d1Props' 保持不变，
                参数会自动拼在 URL 问号 ? 后面（如 /d1Props?id=123&name=abc&age=20...）。
            </p>
            <RouterLink :to="{
                name: 'd1PropsQuery',
                query: {
                    id: 890,
                    name: '解耦 qeury',
                    age: 20,
                    game: '1111111'
                }
            }"> Query 查询参数 </RouterLink>
        </nav>



    </div>


</template>
<style></style>