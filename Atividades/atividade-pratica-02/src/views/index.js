import { Router } from "@/plugins";

import "./home";
import "./list";

// main route
Router.addRoutes([
  {
    path: "/",
    redirect: "/estados",
    name: "home",
  },
]);
