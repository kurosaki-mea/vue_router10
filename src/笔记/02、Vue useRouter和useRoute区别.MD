# Vue Router 中 useRouter 与 useRoute 的区别

在 Vue 3 中，useRouter 和 useRoute 名字只相差一个字母 "r"，但功能完全不同。

## 1. 一句话速记

* useRouter (带 r)：路由器控制器。负责【动作】（比如：跳转、前进、后退）。

* useRoute (无 r)：当前路由对象。负责【数据】（比如：获取路径、获取参数）。

## 2. 详细对比

| **特性** | **useRouter()** | **useRoute()** | 
| 概念 | 路由器实例 | 当前路由信息对象 | 
| 对应 Vue 2 | this.\$router | this.$route |  | 
| 作用 | 执行导航与页面跳转 | 读取 URL 中的数据和状态 | 
| 常见属性/方法 | push(), replace(), back() | params, query, path, meta | 

## 3. useRouter 详细说明

### 作用

用在需要【控制页面导航】的地方，例如点击按钮跳转页面或返回上一页。

### 代码示例

```
<script setup>
import { useRouter } from 'vue-router'

const router = useRouter()

// 页面跳转
const goToHome = () => {
  router.push('/home')
}

// 带参数跳转
const goToDetail = (id) => {
  router.push(`/detail/${id}`)
}

// 返回上一页
const goBack = () => {
  router.back()
}
</script>

```

## 4. useRoute 详细说明

### 作用

用在需要【读取当前页面信息】的地方，例如获取 URL 里的 ID 或查询参数。

### 代码示例

```
<script setup>
import { useRoute } from 'vue-router'

const route = useRoute()

// 假设当前 URL: /user/123?type=admin

// 获取路径参数 (/user/:id)
console.log(route.params.id) // 输出: '123'

// 获取查询参数 (?type=admin)
console.log(route.query.type) // 输出: 'admin'

// 获取当前路径
console.log(route.path) // 输出: '/user/123'
</script>

```

## 5. 记忆技巧

* useRouter：就像驾驶员手里的【导航仪】，用来控制车辆去哪里（跳转）。

* useRoute：就像你手里的【门票】，上面写着座位号和信息（参数）。