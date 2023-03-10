import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
    meta: {
      title: 'Web_Blog'
    }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('../views/FirstView/FirstView.vue'),
    meta: {
      title: '首页'
    }
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView/BlogView.vue'),
    meta: {
      title: '博客'
    }
  },
  {
    path: '/back',
    name: 'back',
    component: () => import('../views/BackView/BackView.vue'),
    meta: {
      title: '写博客'
    }
  },
  {
    path: '/404',
    name: '404',
    component: () => import('../views/404View.vue'),
    meta: {
      title: '404'
    }
  },

  { path: '*', redirect: '/404', hidden: true }
]

const router = new VueRouter({
  routes
})

router.beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title
  }
  next()
})

export default router