import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
//import Auth from "../views/Auth.vue";
import SearchView from "@/views/SearchView.vue";
import Ropa from "@/views/Ropa.vue";

Vue.use(VueRouter);

const routes = [
  // {
  //   path: "/",
  //   name: "Auth",
  //   component: Auth
  // },
  {
    path: "/",
    name: "Home",
    component: Home
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
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
