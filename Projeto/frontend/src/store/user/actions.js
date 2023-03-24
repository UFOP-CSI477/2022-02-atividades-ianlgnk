import { Axios, Router } from "@/plugins";

const axios = Axios.instance;

export const actions = {
  async login({ commit }, payload) {
    await axios
      .post("user/login", payload)
      .then((res) => {
        commit("setUser", res.data);
        Axios.onLogin();
        Router.instance.push({ name: "home" });
        commit("setSuccess", {
          msg: `Bem-vindo ao Estágio Now, ${res.data.name}!`,
        });
      })
      .catch((err) => {
        commit("setError", err.response.data);
      });
  },

  async register({ commit }, payload) {
    await axios
      .post("user", payload)
      .then((res) => {
        commit("setUser", res.data);
        Axios.onLogin();
        Router.instance.push({ name: "home" });
        commit("setSuccess", {
          msg: `Bem-vindo ao Estágio Now, ${res.data.name}!`,
        });
      })
      .catch((err) => {
        commit("setError", err.response.data);
      });
  },

  async logout({ commit }) {
    commit("setUser", undefined);
    Axios.onLogout();
    Router.instance.push({ name: "login" });
    commit("setSuccess", {
      msg: `Até a próxima!`,
    });
  },

  async update({ commit }, payload) {
    await axios
      .put(`user/${payload.id}`, payload)
      .then((res) => {
        commit("setUser", res.data);
        Axios.onLogin();
        commit("setSuccess", {
          msg: `Dados editados com sucesso!`,
        });
      })
      .catch((err) => commit("setError", err.response.data));
  },
};
