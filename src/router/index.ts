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



    // ... 其他正常页面

    // 必须放在最底部！！
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      // component: () => import('../views/NotFound.vue'),
      component: () => import('@/views/NotFound.vue'),
    }

  ],
})

export default router
