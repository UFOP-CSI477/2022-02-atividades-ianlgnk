<template>
  <v-card class="card" outlined>
    <div class="d-flex flex-column align-center justify-center mb-4">
      <h2>Empresa: {{ $props.job.company.name }}</h2>
      <h2>Vaga: {{ $props.job.title }}</h2>
      <h4 class="mt-1">Descrição: {{ $props.job.description }}</h4>
    </div>

    <div v-if="isUserLoggedInCompany" class="d-flex justify-space-around">
      <v-btn color="primary" text @click="handleBtnEditar"> Editar </v-btn>
      <v-btn color="warning" text @click="handleBtnCandidatos">
        Candidatos
      </v-btn>
      <v-btn color="error" text @click="handleBtnExcluir"> Excluir </v-btn>
    </div>

    <div
      v-if="!isUserLoggedInCompany && !applicationsSon"
      class="d-flex justify-space-around"
    >
      <v-btn color="primary" text @click="handleBtnInscrever">
        Inscrever-se!
      </v-btn>
    </div>

    <div v-if="applicationsSon" class="d-flex justify-space-around">
      <v-btn color="error" text @click="$emit('onClickBtnCancelarInscricao')">
        Cancelar inscrição!
      </v-btn>
    </div>
  </v-card>
</template>

<script>
export default {
  name: "Job",

  props: {
    job: Object,
    applicationsSon: {
      type: Boolean,
      required: false,
      default: false,
    },
  },

  computed: {
    isUserLoggedInCompany() {
      return this.$store.getters.isUserLoggedInCompany;
    },
  },

  methods: {
    handleBtnEditar() {
      this.$emit("onClickBtnEditar", { ...this.$props.job });
    },

    handleBtnCandidatos() {
      this.$emit("onClickBtnCandidatos", this.$props.job.id);
    },

    async handleBtnExcluir() {
      await this.$axios
        .delete("jobPost/" + this.$props.job.id)
        .then((res) => {
          this.$emit("onDelete", res.data);
          this.$store.commit("setSuccess", {
            msg: "Vaga excluída com sucesso!",
          });
        })
        .catch((err) => this.$store.commit("setError", err.response.data));
    },

    async handleBtnInscrever() {
      const jobApplication = {
        jobPostId: this.$props.job.id,
        userId: this.$store.getters.getUser.id,
      };

      await this.$axios
        .post("jobApplication/", jobApplication)
        .then((res) => {
          this.$emit("onApllication", res.data);
          this.$store.commit("setSuccess", {
            msg: "Inscrição feita com sucesso!",
          });
        })
        .catch((err) => this.$store.commit("setError", err.response.data));
    },
  },
};
</script>

<style scoped>
.card {
  width: 600px;
  padding: 10px 15px;
}
</style>
