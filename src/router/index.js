import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Contents from '../views/jobs/Contents.vue'
import Default from '../views/jobs/Default.vue'
import ContentOne from '../views/jobs/ContentOne.vue'
import ContentTwo from '../views/jobs/ContentTwo.vue'

import NotFound from '../views/NotFound.vue'
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/About',
    name: 'About',
    component: About,
  },
  {
    path: '/Contents',
    name: 'Contents',
    component: Contents,
    children: [
      {
        path: '',
        name: 'Default',
        component: Default,
        alias: '/Contents',
      },
      {
        path: 'ContentOne',
        name: 'ContentTwo',
        component: ContentTwo,
      },
      {
        path: 'ContentTwo',
        name: 'ContentOne',
        component: ContentOne,
      },
    ],
  },
  //catch all 404
  { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
]
const scrollBehavior = (to, from, savedPosition) => {
  if (from.name === null) {
    return { top: 0, left: 0 }
  } else {
    return (
      savedPosition || {
        top: to.meta?.scrollTop || 782,
        left: 0,
        behavior: 'smooth',
      }
    )
  }
}
const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior,
})
router.beforeEach((to, from, next) => {
  from.meta?.scrollTop && (from.meta.scrollTop = window.scrollY)

  return next()
})
export default router
