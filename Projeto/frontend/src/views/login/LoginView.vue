<template>
  <v-main>
    <div class="login-wrapper d-flex align-center justify-center">
      <v-card class="login-card" elevation="2" outlined>
        <div class="d-flex justify-center mb-12">
          <v-img class="card-logo" :src="logo" />
        </div>

        <v-form ref="Form" v-model="valid">
          <v-text-field
            v-model="email"
            :rules="[rules.notEmpty, rules.regexEmail]"
            label="E-mail"
            required
          />

          <v-text-field
            v-model="password"
            :rules="[rules.notEmpty, rules.minSize]"
            :counter="20"
            label="Senha"
            required
            type="password"
          />

          <v-btn
            class="login-btn mb-4"
            color="success"
            text
            @click="handleBtnEntrar"
          >
            Entrar
          </v-btn>

          <v-btn
            color="primary"
            class="register-btn"
            text
            @click="handleBtnCadastrar"
          >
            Cadastrar
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-main>
</template>

<script>
const logo = require("@/assets/logo.png");

export default {
  name: "LoginView",

  data: () => ({
    logo,
    valid: false,
    email: "",
    password: "",
    rules: {
      notEmpty: (v) => !!v || "Campo obrigatório!",
      regexEmail: (v) =>
        /.+@.+/.test(v) || "E-mail inválido! Ex.: estagio@now.com",
      minSize: (v) =>
        (v.length >= 5 && v.length <= 20) || "Informe de 5 a 20 caractéres!",
    },
  }),

  methods: {
    handleBtnCadastrar() {
      this.$router.push("/register");
    },

    handleBtnEntrar() {
      const isFormValidate = this.$refs.Form.validate();

      if (isFormValidate) this.login();
    },

    login() {
      const loginData = {
        email: this.email,
        password: this.password,
      };

      this.$store.dispatch("login", loginData);
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  height: 100vh;
}

.login-card {
  width: 500px;
  height: 500px;
  padding-right: 80px;
  padding-left: 80px;
  padding-top: 70px;
}

.card-logo {
  max-width: 180px;
  height: auto;
}

.login-btn {
  width: 100%;
}

.register-btn {
  width: 100%;
}
</style>
