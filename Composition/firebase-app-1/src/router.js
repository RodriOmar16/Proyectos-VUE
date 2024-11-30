import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: '/',
    name: 'Home',
    component:  Home,
  },
  {
    path: '/login-register',
    name: 'Login - Registro',
    component:  () => import("./views/LoginRegister.vue"),
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
}); 

export default router;