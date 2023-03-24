<template>
  <v-app>
    <router-view />

    <v-snackbar v-model="errorSnackbar" absolute centered top tile color="red">
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="errorSnackbar = false"> X </v-btn>
      </template>
    </v-snackbar>

    <v-snackbar
      v-model="successSnackbar"
      absolute
      centered
      top
      tile
      color="green"
    >
      {{ text }}

      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="successSnackbar = false"> X </v-btn>
      </template>
    </v-snackbar>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    errorSnackbar: false,
    successSnackbar: false,
    text: "",
  }),

  computed: {
    error() {
      return this.$store.getters.getError;
    },

    success() {
      return this.$store.getters.getSuccess;
    },
  },

  watch: {
    error(val) {
      if (val === undefined || val === "") return;
      this.errorSnackbar = true;
      this.text = val.msg;
    },

    success(val) {
      if (val === undefined || val === "") return;
      this.successSnackbar = true;
      this.text = val.msg;
    },
  },
};
</script>
