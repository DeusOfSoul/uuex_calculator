import { createRouter, createWebHashHistory } from 'vue-router'
import Admin from "../views/Admin/Admin";
import Calculator from "../views/Calculator/Calculator";
import Start from "../views/Start";
import Login from "../views/Admin/Login";
import Home from "@/views/Admin/Home";
import Angebote from "@/views/Admin/Angebote";
import ListenEditor from "@/views/Admin/ListenEditor";
import CalculatorEditor from "../views/Admin/CalculatorEditor";

const routes = [
  {
    path: '/start',
    name: 'start',
    component: Start
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
  },
  {
    path: '/admin',
    component: Admin,
    redirect: 'angebote',
    children: [
      {
        path: '/home',
        component: Home
      },
      {
        path: '/angebote',
        component: Angebote
      },
      {
        path: '/listeneditor',
        component: ListenEditor
      },
      {
        path: '/calculatoreditor',
        component: CalculatorEditor
      }
    ]
  },
  {
    path: "/:catchAll(.*)",
    redirect: {name: "start"}
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
