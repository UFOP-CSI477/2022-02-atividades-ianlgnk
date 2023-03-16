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
                v-model="form.rua"
                label="Rua"
                :rules="[rules.notEmpty]"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.numero"
                label="Número"
                :rules="[rules.notEmpty]"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.complemento"
                label="Complemento"
                :rules="[rules.notEmpty]"
              />
            </v-col>

            <v-col cols="12">
              <v-text-field
                v-model="form.documento"
                label="Documento"
                :rules="[rules.notEmpty]"
              />
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="form.cidade"
                :items="cidadeCombo"
                item-value="id"
                label="Cidade"
                return-object
                :rules="[rules.objectNotEmpty]"
              >
                <template v-slot:item="{ item }">
                  {{ item.nome }}
                </template>

                <template v-slot:selection="{ item }">
                  {{ item.nome }}
                </template>
              </v-select>
            </v-col>

            <v-col cols="12">
              <v-select
                v-model="form.tipoSanguineo"
                :items="tipoSanguineoCombo"
                item-value="id"
                label="Tipo sanguíneo"
                return-object
                :rules="[rules.objectNotEmpty]"
              >
                <template v-slot:item="{ item }">
                  {{ item.tipo }}{{ item.fator }}
                </template>

                <template v-slot:selection="{ item }">
                  {{ item.tipo }}{{ item.fator }}
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

const baseApiRoute = "http://localhost:4001/pessoa";

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
    ],
    form: {
      valid: false,
      edit: false,
      id: "",
      nome: "",
      rua: "",
      numero: "",
      complemento: "",
      documento: "",
      cidade: {},
      tipoSanguineo: {},
    },
    rules: {
      notEmpty: (val) => (val || "").length > 0 || "Campo obrigatório!",
      objectNotEmpty: (val) => {
        if (Object.keys(val).length === 0) return "Campo obrigatório!";
        else return true;
      },
    },
    loading: true,
    cidadeCombo: [],
    tipoSanguineoCombo: [],
  }),

  methods: {
    onClickRow(opts) {
      this.resetItem();
      this.form.edit = true;
      Object.assign(this.form, opts);

      this.form.cidade = this.cidadeCombo.find(
        (x) => x.id === this.form.idCidade
      );
      this.form.tipoSanguineo = this.tipoSanguineoCombo.find(
        (x) => x.id === this.form.idTipoSanguineo
      );

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
        rua: this.form.rua,
        numero: this.form.numero,
        complemento: this.form.complemento,
        documento: this.form.documento,
        idCidade: this.form.cidade.id,
        idTipoSanguineo: this.form.tipoSanguineo.id,
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
        rua: "",
        numero: "",
        complemento: "",
        documento: "",
        cidade: {},
        tipoSanguineo: {},
      };
    },

    async fetch() {
      this.loading = true;

      this.list = await this.$axios.get(baseApiRoute).then(({ data }) => data);

      this.loading = false;
    },

    async combo() {
      this.cidadeCombo = await this.$axios
        .get("http://localhost:4001/cidade")
        .then(({ data }) => data);

      this.tipoSanguineoCombo = await this.$axios
        .get("http://localhost:4001/tipoSanguineo")
        .then(({ data }) => data);
    },
  },

  mounted() {
    this.fetch();
    this.combo();
  },
};
</script>
