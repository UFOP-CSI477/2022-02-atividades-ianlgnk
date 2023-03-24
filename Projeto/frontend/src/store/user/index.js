import { states } from "./states";
import { getters } from "./getters";
import { mutations } from "./mutations";
import { actions } from "./actions";

import { Store } from "@/plugins";

const userModule = {
  state: states,
  getters,
  mutations,
  actions,
};

Store.registerModule("user", userModule);
