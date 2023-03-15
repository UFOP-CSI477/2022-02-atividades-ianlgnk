<template>
  <v-card class="fill-height">
    <v-card-title class="d-flex justify-space-between">
      <span>{{ $route.name }}</span>

      <div>
        <v-btn
          color="error"
          dark
          text
          :disabled="selected.length === 0"
          @click="onClickBtnDelete"
        >
          <v-icon dark> mdi-delete </v-icon>
        </v-btn>

        <v-btn color="success" dark text @click="onClickBtnAdd">
          <v-icon dark> mdi-plus-circle </v-icon>
        </v-btn>
      </div>
    </v-card-title>

    <v-data-table
      v-model="selected"
      :headers="$props.headers"
      :items="$props.list"
      :loading="$props.loading"
      show-select
      @click:row="clickRow"
    />
  </v-card>
</template>

<script>
export default {
  name: "List",

  props: {
    list: Array,
    headers: Array,
    loading: Boolean,
  },

  data: () => ({
    selected: [],
  }),

  methods: {
    clickRow(item) {
      this.$emit("onClickRow", item);
    },

    onClickBtnDelete() {
      this.$emit("onClickBtnDelete", [...this.selected]);
      this.selected = [];
    },

    onClickBtnAdd() {
      this.$emit("onClickBtnAdd");
    },
  },
};
</script>

<style></style>
