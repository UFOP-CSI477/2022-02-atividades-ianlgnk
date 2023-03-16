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

const baseApiRoute = "http://localhost:4001/estado";

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

    async onClickBtnDelete(selected) {
      for (let index = 0; index < selected.length; index++) {
        const item = selected[index];
        await this.$axios.delete(baseApiRoute + "/" + item.id);
      }

      this.fetch();
    },

    onCancelDialog() {
      this.resetItem();
    },

    async onSubmitForm() {
      if (!this.$refs.form.validate()) return;

      const sendObj = {
        id: this.form.id,
        nome: this.form.nome,
        sigla: this.form.sigla,
      };

      if (sendObj.id === "") {
        delete sendObj.id;
        await this.$axios.post(baseApiRoute, sendObj);
      } else await this.$axios.put(baseApiRoute + "/" + sendObj.id, sendObj);

      this.$refs.Form.dialog = false;
      this.resetItem();
      this.fetch();
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

    async fetch() {
      this.loading = true;

      this.list = await this.$axios.get(baseApiRoute).then(({ data }) => data);

      this.loading = false;
    },
  },

  mounted() {
    this.fetch();
  },
};
</script>
