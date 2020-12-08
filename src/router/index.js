import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from "../views/Admin";
import Calculator from "../views/Calculator";
import Start from "../views/Start";

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin
  },
  {
    path: '/calculator',
    name: 'calculator',
    component: Calculator
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
