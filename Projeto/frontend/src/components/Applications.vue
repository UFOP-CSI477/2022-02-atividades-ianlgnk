<template>
  <div class="apllications-wrapper d-flex flex-column align-center">
    <h1 class="mb-4 mt-4">Minhas candidaturas</h1>

    <Job
      v-for="item in list"
      :key="item.id"
      :job="item.jobPost"
      @onClickBtnCancelarInscricao="onClickBtnCancelarInscricao(item.id)"
      class="mb-8"
      applicationsSon
    />
  </div>
</template>

<script>
import Job from "@/components/Job.vue";

export default {
  name: "Applications",

  components: {
    Job,
  },

  props: {
    currentTab: Number,
  },

  data: () => ({
    list: [],
  }),

  methods: {
    async fetch() {
      this.list = await this.$axios
        .get(`jobApplication/byUser/${this.$store.getters.getUser.id}`)
        .then((res) => res.data)
        .catch((err) => {
          this.$store.commit("setError", err.response.data);
          return [];
        });
    },

    async onClickBtnCancelarInscricao(jobApplicationId) {
      await this.$axios
        .delete("jobApplication/" + jobApplicationId)
        .then((res) => {
          this.$emit("onDelete", res.data);
          this.$store.commit("setSuccess", {
            msg: "Inscrição cancelada com sucesso!",
          });
          this.fetch();
        })
        .catch((err) => this.$store.commit("setError", err.response.data));
    },
  },

  watch: {
    currentTab(val) {
      if (val === 1) this.fetch();
    },
  },

  mounted() {
    this.fetch();
  },
};
</script>
