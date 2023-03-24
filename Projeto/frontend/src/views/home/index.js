import { Router } from "@/plugins";

const HomeView = import(
  /* webpackChunkName: "home" */ "@/views/home/HomeView.vue"
);

Router.addRoutes([
  {
    path: "/home",
    name: "home",
    component: () => HomeView,
  },
]);
