import Vue from "vue";
import VueRouter from "vue-router";
import HomePage from "./view/HomePage.vue";
import AboutUs from "./view/AboutUs.vue";
import ContactUs from "./view/ContactUs.vue";

Vue.use(VueRouter);
const router = new VueRouter({
  mode: "history",
  routes: [
    { path: "/", redirect: "/home" },
    { path: "/home", component: HomePage },
    { path: "/about", component: AboutUs },
    { path: "/contact", component: ContactUs },
  ],
});

export default router;
