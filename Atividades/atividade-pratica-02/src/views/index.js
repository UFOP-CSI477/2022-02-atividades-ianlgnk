import { Router } from "@/plugins";

import "./estados";
import "./cidades";
import "./pessoas";
import "./tiposSanguineos";

// main route
Router.addRoutes([
  {
    path: "/",
    redirect: "/estados",
    name: "home",
  },
]);
