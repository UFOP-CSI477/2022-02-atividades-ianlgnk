<template>
  <v-main>
    <v-tabs v-model="tab" background-color="primary" dark fixed-tabs>
      <v-tab> Vagas </v-tab>

      <v-tab v-if="!isUserLoggedInCompany"> Candidaturas </v-tab>

      <v-tab> Perfil </v-tab>
    </v-tabs>

    <v-tabs-items v-model="tab">
      <v-tab-item class="tab-item">
        <Jobs ref="Jobs" />
      </v-tab-item>

      <v-tab-item v-if="!isUserLoggedInCompany" class="tab-item">
        <Applications ref="Applications" :currentTab="tab" />
      </v-tab-item>

      <v-tab-item class="tab-item">
        <Profile ref="Profile" />
      </v-tab-item>
    </v-tabs-items>
  </v-main>
</template>

<script>
import Profile from "@/components/Profile.vue";
import Jobs from "@/components/Jobs.vue";
import Applications from "@/components/Applications.vue";

export default {
  name: "HomeView",

  components: {
    Profile,
    Jobs,
    Applications,
  },

  data: () => ({
    tab: 0,
  }),

  computed: {
    resolveTabs() {
      const tabs = [];

      if (this.$store.getters.isUserLoggedInCompany) {
        tabs.push({ key: 1, tab: "Minhas vagas" });
      } else {
        tabs.push({ key: 1, tab: "Minhas candidaturas" });
        tabs.push({ key: 2, tab: "Buscar vagas" });
      }

      tabs.push({ key: 3, tab: "Perfil" });

      return tabs;
    },

    isUserLoggedInCompany() {
      return this.$store.getters.isUserLoggedInCompany;
    },
  },

  mounted() {
    if (this.$store.getters.getUser === undefined)
      this.$router.push({ name: "login" });

    this.tab = this.isUserLoggedInCompany ? 1 : 2;
  },
};
</script>

<style scoped>
.tab-item {
  min-height: calc(100vh - 48px);
}
</style>
