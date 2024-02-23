import { createRouter, createWebHistory } from "vue-router";
import { auth } from "@/configs/firebase";

const requireAuth = (to, from, next) => {
  const user = auth.currentUser;
  const loggedIn = localStorage.getItem("loggedIn");
  if (!user && !loggedIn) next({ name: "SignIn", params: {} });
  else next();
};

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/HomeView.vue"),
    beforeEnter: requireAuth,
  },
  {
    path: "/signin",
    name: "SignIn",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignIn.vue"),
  },
  {
    path: "/signup",
    name: "SignUp",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SignUp.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
