import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import Layout from "../components/Layout.vue";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Portfolio from "../views/Portfolio.vue";
import Contact from "../views/Contact.vue";
import Experience from "../views/Experience.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/portfolio",
    name: "Portfolio",
    component: Portfolio,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      layout: "default",
    },
  },
  {
    path: "/experience",
    name: "Experience",
    component: Experience,
    meta: {
      layout: "default",
    },
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  to.meta.layout = Layout;
  next();
});

export default router;
