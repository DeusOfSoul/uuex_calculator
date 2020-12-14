import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from "../views/Admin";
import Calculator from "../views/Calculator";
import Start from "../views/Start";
import Login from "../views/Login";

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
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
