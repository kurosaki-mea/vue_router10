# vue_router10

# 🧭 Vue Router 核心实战与进阶备忘录

> 这是一个全面系统学习和演练 **Vue Router (Vue 3 + Composition API)** 的实战项目。项目采用高内聚、低耦合的模块化设计，涵盖了从基础路由配置、三种传参方式、Props 解耦、嵌套路由、路由懒加载、Meta 元信息、导航守卫到真实登录权限拦截与 404 兜底的全套企业级解决方案。

---

## 📂 项目目录结构全览

项目源码组织清晰，按“路由配置中心”、“视图演练页”、“嵌套子页面”进行了规范化拆分：

```text
src/
├── main.ts                         # Vue 应用入口，挂载 Router 实例
├── App.vue                         # 根组件，提供全局导航与 <router-view> 挂载点
│
├── router/                         # 🧭 路由配置中心
│   ├── index.ts                    # 路由主入口：整合各模块、配置 HTML5 History、全局守卫、404兜底
│   └── modules/                    # 📦 业务/功能路由拆分模块 (全量采用路由懒加载)
│       ├── d1_Query_Router.ts      # Query 传参路由模块
│       ├── d1_Params_Router.ts     # Params 动态路径传参路由模块
│       ├── d1_Props_Router.ts      # Props 路由解耦传参模块
│       ├── goods.ts                # 商品业务模块 (列表->详情嵌套/关联路由)
│       └── user.ts                 # 用户业务模块
│
├── views/                          # 🖼️ 核心功能与页面级组件
│   ├── HomeV.vue                   # 首页 / 导航导航面板
│   ├── Login.vue                   # 模拟登录页 (写入 Token 并支持重定向)
│   ├── LoginDashboard.vue          # 登录后的受保护控制台
│   ├── VipViews.vue                # VIP 专属特权页 (测试路由鉴权)
│   ├── Guards_01.vue               # 导航守卫全家桶演练场
│   ├── NotFound.vue                # 404 错误兜底页面
│   │
│   ├── d1_Query_01.vue             # [Query] 传参发起端
│   ├── d1_Query_Views.vue          # [Query] 传参接收端 (`useRoute().query`)
│   ├── d1_Params_01.vue            # [Params] 动态路径发起端
│   ├── d1_Params_Views.vue         # [Params] 动态路径接收端 (`useRoute().params`)
│   ├── d1_Props_01.vue             # [Props] 传参发起端
│   ├── d1_Props_Views.vue          # [Props] 接收端 (Params 自动映射为组件 props)
│   ├── d1_Props_ViewsV2_Query.vue  # [Props] 接收端 (Query / 函数模式映射为 props)
│   ├── d1_meta_01.vue              # [Meta] 路由元信息读取演练
│   │
│   ├── Goods.vue                   # 商品列表页
│   ├── GoodsDetail.vue             # 商品详情页 (动态获取商品ID)
│   └── UserDetail.vue              # 用户详情页
│
├── pages/                          # 📂 嵌套路由子页面演示
│   ├── ViewsAbout.vue              # 嵌套路由父级容器组件
│   ├── ViewsAboutEx1.vue           # 嵌套子页面容器
│   ├── ViewsAboutEx1m1.vue         # 嵌套子路由页面 1 (`/about/ex1/m1`)
│   └── ViewsAboutEx1m2.vue         # 嵌套子路由页面 2 (`/about/ex1/m2`)
│
└── readme.md                            # 📝 学习笔记与核心组合式 API 总结
```

---

## ⚡ 核心技术点与模块详解

### 1. 路由模块化工程与按需懒加载 (`router/modules/`)
* **架构优势**：摒弃了将所有路由堆砌在单个 `index.ts` 中的坏习惯，按功能划分出 `d1_xxx` 模块及独立业务模块 (`goods.ts`, `user.ts`)。
* **性能优化**：全量使用 Vue 推荐的动态导入语法实现**路由懒加载 (Route Lazy Loading)**：
  ```typescript
  component: () => import('@/views/d1_Props_01.vue')
  ```
  每个页面独立打包成 Chunk，只有当用户切换到对应路由时才加载。

### 2. 三种路由传参模式全解与对比
项目中对 Vue 路由传参的三种形态做了完备的实战对比：

| 传参方式 | URL 表现形式 | 刷新是否丢失 | 接收方式 | 核心应用场景 |
| :--- | :--- | :--- | :--- | :--- |
| **Query** | `/path?id=1&name=vue` | ❌ 不丢失 | `useRoute().query` | 搜索筛选、列表分页参数 |
| **Params** | `/path/1/vue` (需配 `:id`) | ❌ 不丢失 | `useRoute().params` | 明确的资源定位、详情页 |
| **Props 解耦** | 结合 Params / Query | ❌ 不丢失 | `defineProps(['id'])` | **解耦组件与 Router，提升组件复用性** |

> **🌟 重点亮点：Props 路由解耦**
> 在 `d1_Props_Router.ts` 中通过开启 `props: true` 或编写适配函数 `props: route => ({ id: route.query.id })`，使目标组件不再强依赖 `useRoute()`。组件可以直接通过标准的 Vue `props` 接收参数，非常有利于编写单元测试和独立复用。

### 3. 嵌套路由与多级视图 (`pages/` & `goods.ts`)
* **嵌套结构**：在 `pages/ViewsAbout.vue` 中通过父级 `<router-view>` 容器嵌套子页面 (`ViewsAboutEx1m1.vue` 和 `ViewsAboutEx1m2.vue`)。
* **父子联动**：子路由路径定义在 `children` 属性中，展示了多级后台管理系统或选项卡切换的典型工程实现。

### 4. 路由元信息 (`meta`) 与登录权限校验
* **Meta 应用**：在路由表中通过 `meta: { requiresAuth: true, title: 'VIP专区' }` 附加业务标记。
* **守卫拦截**：在 `router/index.ts` 的全局前置守卫中统一拦截：
  ```typescript
  router.beforeEach((to, from, next) => {
    // 1. 动态改变网页标题
    if (to.meta.title) document.title = to.meta.title as string;
    
    // 2. 权限校验
    const token = localStorage.getItem('token');
    if (to.meta.requiresAuth && !token) {
      next({ path: '/login', query: { redirect: to.fullPath } });
    } else {
      next();
    }
  });
  ```

### 5. 导航守卫全家桶 (`Guards_01.vue`)
项目中对 Vue Router 的守卫进行了全方位演练：
1. **全局前置/后置守卫** (`router.beforeEach`, `router.afterEach`)：控制全局通行证与加载流转。
2. **路由独享守卫** (`beforeEnter`)：针对单条路由配置的进入前校验。
3. **组件内守卫** (`onBeforeRouteUpdate`, `onBeforeRouteLeave`)：
   * `onBeforeRouteUpdate`：解决在相同组件不同参数间切换（如 `/user/1` -> `/user/2`）时数据不刷新的问题。
   * `onBeforeRouteLeave`：实现离开未保存页面前的弹窗提醒。

### 6. 404 全局异常兜底
* 在路由表的最末尾配置正则通配符：
  ```typescript
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/views/NotFound.vue')
  }
  ```
  精准拦截所有非法输入路径，提供友好的容错提示页面。

---

## 🚀 常用编程式导航速查 (Cheat Sheet)

```typescript
import { useRouter, useRoute } from 'vue-router';

const router = useRouter();
const route = useRoute();

// 1. Query 跳转
router.push({ path: '/query-views', query: { id: 100 } });

// 2. 命名路由 + Params 跳转
router.push({ name: 'ParamsViews', params: { id: 100 } });

// 3. 替换当前历史记录 (不留历史栈)
router.replace('/login');

// 4. 浏览器历史回退
router.back(); // 或 router.go(-1)
```

---
*✨ 保持对技术的好奇心与工程化思维，Vue Router 游刃有余！*