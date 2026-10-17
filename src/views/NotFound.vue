<template>
    <div class="not-found-container">
      <div class="not-found-content">
        <!-- 大标题 -->
        <h1 class="error-code">404</h1>
        <p class="error-desc">抱歉，您访问的页面不存在或已被移除</p>
        
        <!-- 操作按钮 -->
        <div class="action-btns">
          <el-button type="primary" @click="goHome">返回首页</el-button>
          <el-button @click="goBack">返回上一页</el-button>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import { useRouter } from 'vue-router'
  
  const router = useRouter()
  
  const goHome = () => {
    router.push('/')
  }
  
  const goBack = () => {
    router.back()
  }
  </script>
  
  <style scoped>
  .not-found-container {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    text-align: center;
    background-color: #f8f9fa;
  }
  .error-code {
    font-size: 80px;
    font-weight: bold;
    color: #409eff;
    margin: 0;
  }
  .error-desc {
    font-size: 18px;
    color: #606266;
    margin: 16px 0 32px;
  }
  .action-btns {
    display: flex;
    gap: 12px;
    justify-content: center;
  }
  </style>