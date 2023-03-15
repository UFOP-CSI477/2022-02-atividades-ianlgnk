<template>
  <v-container>
    <List
      ref="List"
      :list="list"
      :headers="headers"
      :loading="loading"
      @onClickRow="onClickRow"
      @onClickBtnAdd="onClickBtnAdd"
      @onClickBtnDelete="onClickBtnDelete"
    />

    <Form
      ref="Form"
      :formItem="form"
      @onCancelDialog="onCancelDialog"
      @onSubmitForm="onSubmitForm"
    >
      <template slot="form">
        <v-form ref="form" v-model="form.valid">
          <v-row>
            <v-col v-if="form.edit" cols="12">
              <v-text-field v-model="form.id" label="Código" disabled />
            </v-col>
          </v-row>
        </v-form>
      </template>
    </Form>
  </v-container>
</template>

<script>
import List from "@/components/List.vue";
import Form from "@/components/Form.vue";

export default {
  name: "EstadosView",

  components: {
    List,
    Form,
  },

  data: () => ({
    list: [],
    headers: [
      {
        text: "Cód",
        value: "id",
      },
    ],
    form: {
      valid: false,
      edit: false,
      id: "",
    },
    rules: {
      notEmpty: (val) => (val || "").length > 0 || "Campo obrigatório!",
    },
    loading: true,
  }),

  methods: {
    onClickRow(opts) {
      this.resetItem();
      this.form.edit = true;
      Object.assign(this.form, opts);

      this.$refs.Form.dialog = true;

      this.$nextTick(() => this.$refs.form.resetValidation());
    },

    onClickBtnAdd() {
      this.resetItem();

      this.$refs.Form.dialog = true;

      this.$nextTick(() => this.$refs.form.resetValidation());
    },

    onClickBtnDelete(selected) {
      selected.forEach((item) => {
        console.log("delete item id: " + item.id);
      });
    },

    onCancelDialog() {
      this.resetItem();
    },

    onSubmitForm() {
      if (!this.$refs.form.validate()) return;
      this.resetItem();
    },

    resetItem() {
      this.form = {
        valid: false,
        edit: false,
        id: "",
      };
    },

    fetch() {
      this.loading = true;

      this.loading = false;
    },
  },

  mounted() {
    this.fetch();
  },
};
</script>
