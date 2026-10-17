export default [
    {
        path: '/goods',      // 商城主页 / 列表页
        name: 'goods',
        component: () => import('@/views/Goods.vue'),  // 对应商城页
    },
    {
      // :id 是动态路径参数，比如访问 /goods/1001、/goods/2002
      path: '/goods/:id',   // :id 是动态占位符，匹配 /goods/1001
      name: 'goodsDetail',
      // 对应具体的商品页 下面
      component: () => import('@/views/GoodsDetail.vue'), // 指向你的商品详情页面
      props: true // 开启 props，让组件能直接接收到 id 变量
    }
  ]