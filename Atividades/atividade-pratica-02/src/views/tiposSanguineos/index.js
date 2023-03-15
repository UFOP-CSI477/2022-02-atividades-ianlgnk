import { Router } from "@/plugins";

const TiposSanguineosView = import(
  /* webpackChunkName: "tiposSanguineos" */ "@/views/tiposSanguineos/TiposSanguineosView.vue"
);

Router.addRoutes([
  {
    path: "/tiposSanguineos",
    name: "Tipos sanguíneos",
    component: () => TiposSanguineosView,
  },
]);
