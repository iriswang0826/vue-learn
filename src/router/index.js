import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home'
import Login from '@/pages/Login'
import Regin from '@/pages/Regin'
import Products from '@/pages/Products'
import FAQ from '@/pages/Faq'
import Manger from '@/pages/Manger'
import My from '@/pages/My'
import Send from '@/pages/Send'
import MyHistory from '@/pages/History'
import Page404 from '@/pages/404'

Vue.use(Router)

export default new Router({
  // 配置路由
  routes: [
    {
      path: '/',
      name: '首页',
      component: Home
    },
    {
      path: '/login',
      name: '',
      hidden: true,
      component: Login
    },
    {
      path: '/regin',
      name: '',
      hidden: true,
      component: Regin
    },
    {
      path: '/products',
      name: '商品',
      class: 'el-icon-goods',
      component: Products
    },
    {
      path: '/FAQ',
      name: 'FAQ使用文档',
      component: FAQ
    },
    {
      path: '/manger',
      name: '我的工作台',
      redirect: '/manger/my',
      component: Manger,
      hasChild: true,
      children: [
        {
          path: '/manger/my',
          name: '我的信息',
          component: My
        },
        {
          path: '/manger/send',
          name: '发货管理',
          component: Send
        },
        {
          path: '/manger/history',
          name: '发货记录',
          component: MyHistory
        }
      ]
    },
    {
      path: '*',
      hidden: true,
      component: Page404
    }
  ]
})
