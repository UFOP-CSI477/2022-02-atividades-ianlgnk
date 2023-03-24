import { Router } from "@/plugins";

const RegisterView = import(
  /* webpackChunkName: "register" */ "@/views/register/RegisterView.vue"
);

Router.addRoutes([
  {
    path: "/register",
    name: "register",
    component: () => RegisterView,
  },
]);
