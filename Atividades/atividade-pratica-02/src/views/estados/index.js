import { Router } from "@/plugins";

const EstadosView = import(
  /* webpackChunkName: "estados" */ "@/views/estados/EstadosView.vue"
);

Router.addRoutes([
  {
    path: "/estados",
    name: "Estados",
    component: () => EstadosView,
  },
]);
