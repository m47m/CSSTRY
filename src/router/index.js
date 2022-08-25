import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/home.vue";
import About from "../pages/about.vue";
import Login1 from "../pages/login1.vue"

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/login1",
    name: "Login1",
    component: Login1,
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;