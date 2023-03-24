<template>
  <v-dialog v-model="dialog" max-width="600px">
    <v-card>
      <v-card-title class="headline">Candidatos</v-card-title>

      <v-card-text>
        <div
          v-for="item in list"
          :key="item.id"
          class="mb-4 d-flex align-center"
        >
          <v-avatar color="indigo" class="mr-4">
            <v-icon dark> mdi-account-circle </v-icon>
          </v-avatar>

          <span>{{ item.user.name }} / {{ item.user.email }}</span>
        </div>
      </v-card-text>

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue darken-1" text @click="handleBtnVoltar">
          Voltar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "JobApplications",

  data: () => ({
    dialog: false,
    list: [],
    jobPostId: "",
  }),

  methods: {
    async open(id) {
      this.jobPostId = id;
      await this.fetch();
      this.dialog = true;
    },

    async fetch() {
      this.list = await this.$axios
        .get(`jobApplication/byJobPost/${this.jobPostId}`)
        .then((res) => res.data)
        .catch((err) => {
          this.$store.commit("setError", err.response.data);
          return [];
        });
    },

    handleBtnVoltar() {
      this.list = [];
      this.jobPostId = "";
      this.dialog = false;
    },
  },
};
</script>
