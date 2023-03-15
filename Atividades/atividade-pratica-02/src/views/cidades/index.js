import { Router } from "@/plugins";

const CidadesView = import(
  /* webpackChunkName: "cidades" */ "@/views/cidades/CidadesView.vue"
);

Router.addRoutes([
  {
    path: "/cidades",
    name: "Cidades",
    component: () => CidadesView,
  },
]);
