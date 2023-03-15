<template>
  <v-container>
    <List
      ref="List"
      :list="list"
      :headers="headers"
      :loading="loading"
      @onClickRow="onClickRow"
    />
  </v-container>
</template>

<script>
import List from "@/components/List.vue";

export default {
  name: "EstadosView",

  components: {
    List,
  },

  data: () => ({
    list: [],
    headers: [
      {
        text: "Cód",
        value: "id",
      },
      {
        text: "Nome",
        value: "nome",
      },
      {
        text: "Sigla",
        value: "sigla",
      },
    ],
    loading: true,
  }),

  methods: {
    onClickRow(opts) {
      console.log(opts);
    },
  },
};
</script>
