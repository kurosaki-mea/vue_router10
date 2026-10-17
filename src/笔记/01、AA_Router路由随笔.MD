# Vue Router 中 useRouter 与 useRoute 的区别

在 Vue 3 中，useRouter 和 useRoute 名字只相差一个字母 "r"，但功能完全不同。

## 1. 一句话速记

* useRouter (带 r)：路由器控制器。负责【动作】（比如：跳转、前进、后退）。

* useRoute (无 r)：当前路由对象。负责【数据】（比如：获取路径、获取参数）。

### Route 是 路径/数据（拿参数，用 useRoute）
### Router 是 路由器/控制器（做跳转，用 useRouter）






