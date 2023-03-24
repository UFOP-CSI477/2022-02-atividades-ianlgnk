import axios from "axios";
import { Store } from "@/plugins";

const instance = axios.create({
  baseURL: "http://localhost:4001",
});

export const Axios = {
  instance,

  onLogin() {
    const token = Store.instance.getters.getToken;
    instance.defaults.headers.common["Authorization"] = token;
  },

  onLogout() {
    delete instance.defaults.headers.common["Authorization"];
  },
};
