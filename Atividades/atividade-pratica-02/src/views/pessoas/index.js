import { Router } from "@/plugins";

const PessoasView = import(
  /* webpackChunkName: "pessoas" */ "@/views/pessoas/PessoasView.vue"
);

Router.addRoutes([
  {
    path: "/pessoas",
    name: "Pessoas",
    component: () => PessoasView,
  },
]);
