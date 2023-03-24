<template>
  <div class="card-wrapper d-flex justify-center align-center">
    <v-card class="card" outlined>
      <div class="d-flex flex-column align-center">
        <h1 class="mb-8">Dados da sua conta</h1>

        <v-avatar color="indigo">
          <v-icon dark> mdi-account-circle </v-icon>
        </v-avatar>
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

        <v-text-field
          :value="isCompany ? 'Conta de empresa' : 'Conta de estudante'"
          disabled
        />

        <v-btn
          color="success"
          class="register-btn mb-4"
          text
          @click="handleBtnCadastrar"
        >
          Atualizar meus dados
        </v-btn>

        <v-btn color="error" class="register-btn" text @click="handleBtnSair">
          Sair
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Profile",

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
    handleBtnSair() {
      this.$store.dispatch("logout");
    },

    handleBtnCadastrar() {
      const isFormValidate = this.$refs.Form.validate();

      if (isFormValidate) this.updateUser();
    },

    async updateUser() {
      const user = {
        id: this.$store.getters.getUser.id,
        name: this.name,
        email: this.email,
        password: this.password,
        isCompany: this.isCompany,
      };

      await this.$store.dispatch("update", user).then(() => this.loadUser());
    },

    loadUser() {
      const user = this.$store.getters.getUser;

      if (user !== undefined) {
        this.name = user.name;
        this.email = user.email;
        this.password = user.password;
        this.isCompany = user.isCompany;
      }
    },
  },

  mounted() {
    this.loadUser();
  },
};
</script>

<style scoped>
.card-wrapper {
  height: calc(100vh - 48px);
}

.card {
  width: 500px;
  padding: 20px 30px;
}

.register-btn {
  width: 100%;
}
</style>
