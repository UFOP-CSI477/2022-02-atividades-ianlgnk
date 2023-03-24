import { Router } from "@/plugins";

const LoginView = import(
  /* webpackChunkName: "login" */ "@/views/login/LoginView.vue"
);

Router.addRoutes([
  {
    path: "/login",
    name: "login",
    component: () => LoginView,
  },
]);
