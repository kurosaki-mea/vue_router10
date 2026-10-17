# Vue Router 中 `useRouter` 与 `useRoute` 的区别与用法

在 Vue 3 (Composition API) 中，`useRouter` 和 `useRoute` 虽然名字只有一字之差（差了一个 **`r`**），但它们的功能和应用场景截然不同。

---

## 快速总结对比

| 特性 | `useRouter()` | `useRoute()` |
| :--- | :--- | :--- |
| **中文概念** | **路由器**（管理控制） | **路由信息**（当前状态） |
| ** Vue 2 对应** | `this.$router` | `this.$route` |
| **数据类型** | 路由器对象实例（包含导航方法） | 响应式数据对象（包含当前路径状态） |
| **核心职责** | **控制跳转**（动词：去哪里、怎么去） | **读取信息**（名词：我在哪、参数是什么） |
| **常用属性/方法** | `push()`, `replace()`, `back()`, `go()` | `params`, `query`, `path`, `meta`, `fullPath` |

---

## 1. `useRouter`（路由器控制器）

### 概念
`useRouter` 返回的是整个 Vue Router 的**全局路由器实例**。你可以把它想象成**驾驶员或导航仪**，专门用来控制页面的跳转与历史记录。

### 核心用途
- 页面导航跳转（如点击按钮跳转页面）
- 历史记录控制（前进、后退、刷新）

### 常用方法示例
```vue
<script setup>
import { useRouter } from 'vue-router';

// 获取路由器实例
const router = useRouter();

// 1. 普通跳转（追加历史记录）
const goToPage = () => {
  router.push('/home');
};

// 2. 带参数跳转
const goToDetail = (id) => {
  router.push({ path: `/detail/${id}`, query: { from: 'dashboard' } });
};

// 3. 替换当前页面（不保留历史记录，常用于登录/重定向）
const replaceToLogin = () => {
  router.replace('/login');
};

// 4. 返回上一页
const goBack = () => {
  router.back(); // 等价于 router.go(-1)
};
</script>
```

---

## 2. `useRoute`（当前路由状态对象）

### 概念
`useRoute` 返回的是**当前激活路由的信息对象**。你可以把它想象成**当前页面的身份证**，它是一个只读的响应式对象，记录了当前 URL 的所有数据。

### 核心用途
- 获取 URL 路径参数（`params`）
- 获取 URL 查询参数（`query`）
- 获取路由元信息（`meta`，如页面标题、权限等）
- 监听当前路由的变化

### 常用属性示例
```vue
<script setup>
import { useRoute, watch } from 'vue-router';

// 获取当前路由对象
const route = useRoute();

// 假设当前 URL 为: /user/123?type=admin#profile

// 1. 获取路径参数 (对应路由配置 /user/:id)
console.log(route.params.id); // 输出: '123'

// 2. 获取查询参数 (?type=admin)
console.log(route.query.type); // 输出: 'admin'

// 3. 获取基础路径与完整路径
console.log(route.path);     // 输出: '/user/123'
console.log(route.fullPath); // 输出: '/user/123?type=admin#profile'

// 4. 获取路由元信息 (meta)
console.log(route.meta.requiresAuth); // 输出配置好的元数据

// 5. 监听路由参数变化（如相同组件间切换参数）
watch(
  () => route.params.id,
  (newId) => {
    console.log('用户 ID 变更为:', newId);
  }
);
</script>
```

---

## 记忆小巧门 💡

- **带 `r` 的 `useRouter`**：**R**outer = **R**un（跑）/ **R**oute Control。负责**动作**，指挥页面“跑”起来（跳转）。
- **不带 `r` 的 `useRoute`**：**R**oute = **R**ead（读）。负责**读取**，拿来“读”当前页面的数据。