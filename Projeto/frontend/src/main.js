import Vue from "vue";
import App from "@/App.vue";

import { Router, Store, Axios, vuetify } from "@/plugins";

import "@/views";
import "@/store";

Vue.config.productionTip = false;
Vue.prototype.$axios = Axios.instance;

new Vue({
  router: Router.instance,
  store: Store.instance,
  vuetify,
  render: (h) => h(App),
}).$mount("#app");
