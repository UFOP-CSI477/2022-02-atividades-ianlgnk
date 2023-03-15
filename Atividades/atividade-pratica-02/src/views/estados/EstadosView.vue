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

            <v-col cols="12">
              <v-text-field
                v-model="form.nome"
                label="Nome"
                :rules="[rules.notEmpty]"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.sigla"
                label="Sigla"
                :rules="[rules.notEmpty]"
              />
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
    list: [{ id: 1, nome: "Minas Gerais", sigla: "MG" }],
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
    form: {
      valid: false,
      edit: false,
      id: "",
      nome: "",
      sigla: "",
    },
    rules: {
      notEmpty: (val) => (val || "").length > 0 || "Campo obrigatório!",
      notEmptyObject: (val) => {
        if (!val) return "Campo Obrigatório!";
        return true;
      },
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
        nome: "",
        sigla: "",
      };
    },
  },
};
</script>
