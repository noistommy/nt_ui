import { createRouter, createWebHashHistory } from 'vue-router'
import MainView from '../views/MainView';
// import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import NotFound from '../components/404.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    // component: () => { return import(`../views/pages/TypographyTemp`) },
    component: MainView,
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
    path: '/designToken',
    name: 'DesignToken',
    component: () => { return import(`../views/pages/DesignTokenTemp`) },
    props: true
  },
  {
    path: '/foundation/typography',
    name: 'typography',
    component: () => { return import(`../views/pages/TypographyTemp`) },
    props: true
  },
  {
    path: '/foundation/color',
    name: 'color',
    component: () => { return import(`../views/pages/ColorTemp`) },
    props: true
  },
  {
    path: '/foundation/grid',
    name: 'grid',
    component: () => { return import(`../views/pages/GridTemp`) },
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
    path: '/element/message',
    name: 'message',
    component: () => { return import(`../views/pages/MessageTemp`) },
    props: true
  },
  {
    path: '/element/list',
    name: 'list',
    component: () => { return import(`../views/pages/ListTemp`) },
    props: true
  },
  {
    path: '/element/table',
    name: 'table',
    component: () => { return import(`../views/pages/TableTemp`) },
    props: true
  },
  {
    path: '/element/panel',
    name: 'panel',
    component: () => { return import(`../views/pages/PanelTemp`) },
    props: true
  },
  {
    path: '/element/progress',
    name: 'progress',
    component: () => { return import(`../views/pages/ProgressTemp`) },
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
    path: '/module/slider',
    name: 'slider',
    component: () => { return import(`../views/pages/SliderTemp`) },
    props: true
  },
  {
    path: '/module/tab',
    name: 'tab',
    component: () => { return import(`../views/pages/TabTemp`) },
    props: true
  },
  {
    path: '/module/calendar',
    name: 'calendar',
    component: () => { return import(`../views/pages/CalendarTemp`) },
    props: true
  },
  {
    path: '/module/datePicker',
    name: 'datePicker',
    component: () => { return import(`../views/pages/DatePickerTemp`) },
    props: true
  },
  {
    path: '/module/treeList',
    name: 'treeList',
    component: () => { return import(`../views/pages/TreeListTemp`) },
    props: true
  },
  {
    path: '/plugin/modal',
    name: 'modal',
    component: () => { return import(`../views/pages/ModalTemp`) },
    props: true
  },
  {
    path: '/plugin/tooltip',
    name: 'tooltip',
    component: () => { return import(`../views/pages/TooltipTemp`) },
    props: true
  },
  {
    path: '/plugin/toast',
    name: 'toast',
    component: () => { return import(`../views/pages/ToastTemp`) },
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
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  scrollBehavior () {
    return { x: 0, y: 0 }
  },
  routes,
})

export default router
