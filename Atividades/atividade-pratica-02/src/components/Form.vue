<template>
  <v-dialog v-model="dialog" persistent max-width="600">
    <v-card>
      <v-card-title class="text-h5">
        Formulário de {{ formTitle }}
      </v-card-title>

      <v-card-text>
        <slot name="form" />
      </v-card-text>

      <v-card-actions>
        <v-btn color="error darken-1" text @click="onCancelDialog">
          Cancelar
        </v-btn>

        <v-spacer />

        <v-btn color="primary darken-1" text @click="onSubmitForm">
          Confirmar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Form",

  props: {
    formItem: Object,
  },

  data: () => ({
    dialog: false,
  }),

  computed: {
    formTitle() {
      return this.$route.name.slice(0, -1);
    },
  },

  methods: {
    onCancelDialog() {
      this.dialog = false;
      this.$emit("onCancelDialog");
    },

    onSubmitForm() {
      this.$emit("onSubmitForm");
    },
  },
};
</script>
