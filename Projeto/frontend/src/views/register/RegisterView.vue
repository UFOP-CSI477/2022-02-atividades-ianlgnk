<template>
  <v-main>
    <div class="register-wrapper d-flex align-center justify-center">
      <v-card class="register-card" elevation="2" outlined>
        <div class="d-flex justify-center mb-2">
          <h1>Registro</h1>
        </div>

        <v-form ref="Form" v-model="valid">
          <v-text-field
            v-model="name"
            :rules="[rules.notEmpty]"
            label="Nome"
            required
          />

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

          <v-switch
            v-model="isCompany"
            inset
            :label="isCompany ? 'Empresa' : 'Estudante'"
          />

          <v-btn
            color="success"
            class="register-btn mb-4"
            text
            @click="handleBtnCadastrar"
          >
            Cadastrar
          </v-btn>

          <v-btn
            color="warning"
            class="register-btn"
            text
            @click="handleBtnVoltar"
          >
            Voltar
          </v-btn>
        </v-form>
      </v-card>
    </div>
  </v-main>
</template>

<script>
export default {
  name: "RegisterView",

  data: () => ({
    valid: false,
    name: "",
    email: "",
    password: "",
    isCompany: false,
    rules: {
      notEmpty: (v) => !!v || "Campo obrigatório!",
      regexEmail: (v) =>
        /.+@.+/.test(v) || "E-mail inválido! Ex.: estagio@now.com",
      minSize: (v) =>
        (v.length >= 5 && v.length <= 20) || "Informe de 5 a 20 caractéres!",
    },
  }),

  methods: {
    handleBtnVoltar() {
      this.$router.push({ name: "login" });
    },

    handleBtnCadastrar() {
      const isFormValidate = this.$refs.Form.validate();

      if (isFormValidate) this.register();
    },

    register() {
      const registerData = {
        email: this.email,
        password: this.password,
        name: this.name,
        isCompany: this.isCompany,
      };

      this.$store.dispatch("register", registerData);
    },
  },
};
</script>

<style scoped>
.register-wrapper {
  height: 100vh;
}

.register-card {
  width: 500px;
  height: 500px;
  padding-right: 80px;
  padding-left: 80px;
  padding-top: 40px;
}

.card-logo {
  max-width: 180px;
  height: auto;
}

.register-btn {
  width: 100%;
}
</style>
