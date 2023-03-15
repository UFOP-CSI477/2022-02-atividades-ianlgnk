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
              <v-select
                v-model="form.estado"
                :items="estados"
                label="Estado"
                return-object
                persistent-hint
                :rules="[rules.objectNotEmpty]"
              >
                <template v-slot:item="{ item }">
                  {{ item.nome }}, {{ item.sigla }}
                </template>

                <template v-slot:selection="{ item }">
                  {{ item.nome }}, {{ item.sigla }}
                </template>
              </v-select>
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
      {
        text: "Nome",
        value: "nome",
      },
      {
        text: "Estado",
        value: "estado",
      },
    ],
    form: {
      valid: false,
      edit: false,
      id: "",
      nome: "",
      estado: {},
    },
    rules: {
      notEmpty: (val) => (val || "").length > 0 || "Campo obrigatório!",
      objectNotEmpty: (val) => {
        if (!val) return "Campo obrigatório!";
        else return true;
      },
    },
    loading: true,
    estados: [
      {
        id: 1,
        nome: "São Paulo",
        sigla: "SP",
      },
      {
        id: 2,
        nome: "Rio de Janeiro",
        sigla: "RJ",
      },
    ],
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
        estado: {},
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
