import { createRouter, createWebHistory } from "vue-router";
import Home from "./views/Home.vue";

const routes = [
  {
    path: '/',
    component:  Home,
  },
  {
    path: '/login',
    component:  () => import("./views/Login.vue"),
  },
  {
    path: '/register',
    component:  () => import("./views/Register.vue"),
  }
];

const router = createRouter({
  routes,
  history: createWebHistory()
});

export default router;