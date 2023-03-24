import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const store = new Vuex.Store();

export const Store = {
  instance: store,

  registerModule(moduleName, module) {
    store.registerModule(moduleName, module);
  },
};
