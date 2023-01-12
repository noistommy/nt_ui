import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../components/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/page',
    name: 'page',
    component: () => { return import(`../views/PageView`) },
    props: true
  },
  {
    path: '/foundation/typography',
    name: 'typography',
    component: () => { return import(`../views/pages/TypographyTemp`) },
    props: true
  },
  {
    path: '/element/button',
    name: 'button',
    component: () => { return import(`../views/pages/ButtonTemp`) },
    props: true
  },
  {
    path: '/element/tag',
    name: 'tag',
    component: () => { return import(`../views/pages/TagTemp`) },
    props: true
  },
  {
    path: '/element/badge',
    name: 'badge',
    component: () => { return import(`../views/pages/BadgeTemp`) },
    props: true
  },
  {
    path: '/element/checkbox',
    name: 'checkbox',
    component: () => { return import(`../views/pages/CheckBoxTemp`) },
    props: true
  },
  {
    path: '/element/switch',
    name: 'switch',
    component: () => { return import(`../views/pages/SwitchTemp`) },
    props: true
  },
  {
    path: '/element/input',
    name: 'input',
    component: () => { return import(`../views/pages/InputTemp`) },
    props: true
  },
  {
    path: '/element/list',
    name: 'list',
    component: () => { return import(`../views/pages/ListTemp`) },
    props: true
  },
  {
    path: '/module/selectBox',
    name: 'selectBox',
    component: () => { return import(`../views/pages/SelectBoxTemp`) },
    props: true
  },
  {
    path: '/module/pagination',
    name: 'pagination',
    component: () => { return import(`../views/pages/PaginationTemp`) },
    props: true
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NotFound
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/404'
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
