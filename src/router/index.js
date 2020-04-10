import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import LoginView from "../views/LoginView.vue";
import SignupView from "../views/SignupView.vue";
import SearchView from "@/views/SearchView.vue";
import Ropa from "@/views/Ropa.vue";
import Accesorios from "@/views/Accesorios.vue";
import Deporte from "@/views/Deporte.vue";
import CartView from "@/views/CartView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/login",
    name: "Login",
    component: LoginView
  },
  {
    path: "/signup",
    name: "Signup",
    component: SignupView
  },
  {
    path: "/search/:mySearch",
    name: "Search",
    component: SearchView
  },
  {
    path: "/ropa",
    name: "Ropa",
    component: Ropa
  },
  {
    path: "/accesorios",
    name: "Accesorios",
    component: Accesorios
  },
  {
    path: "/deporte",
    name: "Deporte",
    component: Deporte
  },
  {
    path: "/cart",
    name: "Cart",
    component: CartView,
    beforeEnter(to, from, next) {
      if (!localStorage.getItem("token")) {
        next({ name: "Login" });
      }
      next();
    }
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
