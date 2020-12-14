import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from "../views/Admin/Admin";
import Calculator from "../views/Calculator/Calculator";
import Start from "../views/Start";
import Login from "../views/Admin/Login";
import Home from "@/views/Admin/Home";
import Angebote from "@/views/Admin/Angebote";
import ListenEditor from "@/views/Admin/ListenEditor";

const routes = [
  {
    path: '/',
    name: 'start',
    component: Start
  },
  {
    path: '/admin',
    name: 'admin',
    component: Admin,
    children: [
      {
        path: 'home',
        name: 'start',
        component: Home
      },
      {
        path: 'angebote',
        name: 'angebote',
        component: Angebote
      },
      {
        path: 'listeneditor',
        name: 'listeneditor',
        component: ListenEditor
      }
    ]
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
