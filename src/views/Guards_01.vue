<script lang="ts">
export default {
  name: 'AboutView',
  // 进入组件前 (拿不到 this)
  beforeRouteEnter(to, from) {
    console.log('【组件内守卫 beforeRouteEnter】')
  },
  // 路由参数改变、组件被复用时
  beforeRouteUpdate(to, from) {
    console.log('【组件内守卫 beforeRouteUpdate】')
  },
  // 离开组件时 (常用于未保存提示)
  beforeRouteLeave(to, from) {
    const answer = window.confirm('确定要离开吗？')
    if (!answer) return false // 阻止离开
  }
}
</script>
<template>
  <div>关于页面</div>
  <p>全局守卫（Global Guards）：beforeEach、beforeResolve、afterEach</p>
  <p>路由独享守卫（Per-Route Guard）：beforeEnter</p>
  <p>组件内的守卫（Component-In Guards）：beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave</p>
</template>
