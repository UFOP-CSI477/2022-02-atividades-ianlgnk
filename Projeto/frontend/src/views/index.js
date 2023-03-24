import "./home";
import "./login";
import "./register";
import { Router } from "@/plugins";

// base route
Router.addRoutes([
  {
    path: "/",
    redirect: "/login",
    name: "app",
  },
]);
