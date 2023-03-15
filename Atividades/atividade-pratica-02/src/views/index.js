import { Router } from "@/plugins";

import "./estados";

// main route
Router.addRoutes([
  {
    path: "/",
    redirect: "/estados",
    name: "home",
  },
]);
