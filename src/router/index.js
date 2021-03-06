import Vue from 'vue'
import Router from 'vue-router'
import routes from './routers'
import store from '@/store'
import iView from 'iview'
import {  getToken } from '@/libs/util'
import config from '@/config'
const { homeName } = config

Vue.use(Router)
const router = new Router({
  routes,
  mode: 'history'
})
const LOGIN_PAGE_NAME = 'login'


// 路由跳转之前
router.beforeEach((to, from, next) => {
  iView.LoadingBar.start()
  const token = getToken()
  if (!token && to.name !== LOGIN_PAGE_NAME) {
    // 未登录且要跳转的页面不是登录页
    next({
      name: LOGIN_PAGE_NAME // 跳转到登录页
    })
  } else if (!token && to.name === LOGIN_PAGE_NAME) {
    // 未登陆且要跳转的页面是登录页
    next() // 跳转到登录页
  } else if (token && to.name === LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是登录页
    next({
      name: homeName // 跳转到homeName页
    })
  } else if(token && to.name !== LOGIN_PAGE_NAME) {
    // 已登录且要跳转的页面是不是登录页-做权限判断
    const isNext = true
    if (isNext) {
      next()
    } else {
      next({ replace: true, name: 'error_401' })
    }
  }
})
// 路由跳转后
router.afterEach(to => {
  window.document.title = to.meta.title || ''
  iView.LoadingBar.finish()
  window.scrollTo(0, 0)
})

export default router
