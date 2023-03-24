<template>
  <div class="jobs-wrapper d-flex flex-column align-center">
    <h1 v-if="isUserLoggedInCompany" class="mb-4">
      {{ $store.getters.getUser.name }}
    </h1>
    <h1 v-else class="mb-4">Vagas disponíveis</h1>

    <div
      v-if="isUserLoggedInCompany"
      class="d-flex justify-end"
      style="width: 600px"
    >
      <v-btn
        color="success"
        class="mb-6"
        outlined
        @click="handleBtnAdicionarVaga"
      >
        Adicionar vaga
      </v-btn>
    </div>

    <Job
      v-for="item in list"
      :key="item.id"
      :job="item"
      @onClickBtnCandidatos="onClickBtnCandidatos"
      @onClickBtnEditar="onClickBtnEditar"
      @onDelete="fetch"
      class="mb-8"
    />

    <JobForm ref="JobForm" @onCreated="fetch" @onUpdated="fetch" />

    <JobApplications ref="JobApplications" />
  </div>
</template>

<script>
import Job from "@/components/Job.vue";
import JobForm from "@/components/JobForm.vue";
import JobApplications from "@/components/JobApplications.vue";

export default {
  name: "Jobs",

  components: {
    Job,
    JobForm,
    JobApplications,
  },

  data: () => ({
    list: [],
  }),

  computed: {
    isUserLoggedInCompany() {
      return this.$store.getters.isUserLoggedInCompany;
    },
  },

  methods: {
    async fetch() {
      const url = this.isUserLoggedInCompany
        ? "jobPost/byCompany/" + this.$store.getters.getUser.id
        : "jobPost";

      this.list = await this.$axios
        .get(url)
        .then((res) => res.data)
        .catch((err) => {
          this.$store.commit("setError", err.response.data);
          return [];
        });
    },

    handleBtnAdicionarVaga() {
      this.$refs.JobForm.addForm();
    },

    onClickBtnEditar(job) {
      this.$refs.JobForm.editForm(job);
    },

    onClickBtnCandidatos(id) {
      this.$refs.JobApplications.open(id);
    },
  },

  mounted() {
    this.fetch();
  },
};
</script>

<style scoped>
.jobs-wrapper {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
}
</style>
