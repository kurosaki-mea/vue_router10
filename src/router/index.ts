import { createRouter, createWebHistory } from 'vue-router'

// 导入
import Home from '../views/HomeV.vue'
import About from '../views/ViewsAbout.vue'
// 下面的 ex1 以路由懒加载模式导入组件，不需要在顶部 import
// import About_Ex1 from '../pages/ViewsAboutEx1.vue'
// 404
// import NotFound from '@/views/NotFound.vue'

// 1. 导入商品路由模块 goods
import goodsRoutes from '@/router/modules/goods'

// 导入 user 路由模块
import userRoutes from '@/router/modules/user.ts'

// d1、导入 Params_Router 模块
import ParamsRoutes from '@/router/modules/d1_Params_Router.ts'
import QueryRouter from '@/router/modules/d1_Query_Router.ts'
import PropsRouter from '@/router/modules/d1_Props_Router.ts'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    // d1、导入 ParamsRouter.ts 路由规则 展开
    ...ParamsRoutes,

    // d1、导入 QueryRouter.ts 路由规则 展开
    ...QueryRouter,

    // d1、导入 PropsRouter.ts 路由规则，解耦模块展示
    ...PropsRouter,

    {
      path: '/about',
      name: 'about',
      component: About,
      children: [
        {
          // 注意：子路由的 path 如果不加斜杠 '/'，会自动拼接在父路径后面，即 '/a2/ex1'
          path: 'ex1',
          name: 'ex1Page',
          // component: About_Ex1,
          // 路由懒加载
          // 不需要提前 import，也不需要起变量名，直接写文件路径即可
          // component: () => import('../pages/ViewsAboutEx1.vue'),
          component: () => import('@/pages/ViewsAboutEx1.vue'),
          children: [
            {
              path: 'ex1m1',
              name: 'ex1m1Page',
              component: () => import('../pages/ViewsAboutEx1m1.vue')
            },
            {
              path: 'ex1m2',
              name: 'ex1m2Page',
              component: () => import('../pages/ViewsAboutEx1m2.vue')
            }
          ]
        }
      ]
    },

    // 2、导入 goods 路由规则数组
    // 使用 ... 展开数组
    ...goodsRoutes,    // 展开注入 /goods 和 /goods/:id

    // 导入 user 路由规则
    ...userRoutes,

    // redirect 重定向
    // 访问 to="/redirectGo2", 但是重定向到 主页/
    {
      path: '/redirectGo2',
      redirect: '/',
    },


    // 【路由守卫】
    // 【路由守卫】
    // 【1】全局守卫：对项目中所有路由跳转都生效。
    // 【2】路由独享守卫：只对某一个特定路由生效。
    // 【3】组件内守卫：定义在 Vue 组件内部，只针对该组件生效。
    // 1. 最常用的“全局前置守卫”（全站通用关卡）
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
    },
    {
      path: '/dashboard',
      component: () => import('../views/LoginDashboard.vue'),
      meta: { requiresAuth: true } // 标记：该页面需要登录
    },
    // 2. 路由独享守卫：只对某一个特定路由生效。
    {
      path: '/vip',
      component: () => import('@/views/VipViews.vue'),
      // 路由独享守卫：只有进这个页面前才会触发
      beforeEnter: (to, from) => {
        // const isVip = false // 假设从某处拿到 VIP 状态

        // 1. 从 localStorage 里读取刚才 LoginVip 存进去的值
        const vipToken = localStorage.getItem('vip')

        // 2. 判断是否是 vip999
        const isVip = vipToken === 'vip999'

        // 3. 如果不是 VIP，拦截并提示，重定向回登录页或首页
        if (!isVip) {
          alert('只有 VIP 才能进入该页面！')
          return '/'  // 拦截并重定向
        }
        // 4. 如果是 VIP，不需要写 return，或者 return true，就会顺利进入 /vip 页面

      }
    },



    // ... 其他正常页面

    // 404 NotFound模块 必须放在最底部！！
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // component: () => import('../views/NotFound.vue'),
      component: () => import('@/views/NotFound.vue'),
    }
  ],
})

// 
// 
// 全局前置守卫：跳转前触发
router.beforeEach((to, from) => {
  // to: 即将要进入的路由对象 / 即将要进入的目标
  // from: 当前正要离开的路由对象 / 当前导航正要离开的路由

  /* 
  // 当这两个条件同时满足（&&）时。
  // 说明“一个没登录的用户，正试图闯入需要权限的内部页面”。
  // 
  if (
    // 检查用户是否已登录；如果登录了就为false，没登录就为true真；
    // 用户没登录（ ! 取反，如果 isAuthenticated 是 false，整体就是 true）。
    !isAuthenticated &&
    // 避免无限重定向；要to去的地方不是 login 页面；目标页面不是登录页。
    to.name !== 'Login'
  ) {
    // 将用户重定向到登录页面
    return { name: 'Login' }
  }
  })
  */


// 假设从 localStorage 判断登录状态
// const isAuthenticated = Boolean(localStorage.getItem('token')) // 假设从 localStorage 判断登录状态

// 假设，从 localStorage 中获取 name ，判断登录信息
// const isAuthenticated = Boolean(localStorage.getItem('name'))
const isAuthenticated = Boolean(localStorage.getItem('name') === '111')


// 1. 未登录，试图访问需要权限的页面 -> 拦截到登录页
// 如果页面需要登录，但用户未登录 -> 重定向到登录页
// // 只有当目标页面明确需要登录，且用户确实未登录时，才拦截去 /login
if (to.meta.requiresAuth && !isAuthenticated) {
  return { path: '/login' } // 返回目标路径直接触发重定向
}

// 2. 已登录，试图访问登录页 -> 自动送到后台
if (to.path === '/login' && isAuthenticated) {
  alert('您已经登录了，如需登录其他账号，请先退出登录!')

  return { path: '/dashboard' }
}


  // // 允许正常通行
  // 返回 true 或不返回，表示允许正常跳转
})

export default router
