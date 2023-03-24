<template>
  <v-dialog v-model="dialog" persistent max-width="600px">
    <v-card>
      <v-card-title>
        <span class="text-h5">Cadastro de vaga</span>
      </v-card-title>

      <v-card-text>
        <v-form ref="Form" v-model="valid">
          <v-text-field
            v-model="form.title"
            :rules="[rules.notEmpty]"
            label="Título"
            required
          />

          <v-textarea
            v-model="form.description"
            :rules="[rules.notEmpty]"
            required
          >
            <template v-slot:label>
              <div>Descrição</div>
            </template>
          </v-textarea>
        </v-form>
      </v-card-text>

      <v-card-actions>
        <div class="d-flex justify-space-between" style="width: 100%">
          <v-btn color="red darken-1" text @click="handleBtnCancelar">
            Cancelar
          </v-btn>
          <v-btn color="green darken-1" text @click="handleBtnSalvar">
            Salvar
          </v-btn>
        </div>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  data: () => ({
    dialog: false,
    valid: false,
    edit: false,
    form: {
      id: "",
      title: "",
      description: "",
      companyId: "",
    },
    rules: {
      notEmpty: (v) => !!v || "Campo obrigatório!",
    },
  }),

  methods: {
    addForm() {
      if (this.$refs.Form) {
        this.$refs.Form.resetValidation();
        this.valid = false;
      }

      this.edit = false;
      this.dialog = true;
    },

    async editForm(entity) {
      this.form = {
        id: entity.id,
        title: entity.title,
        description: entity.description,
        companyId: entity.companyId,
      };

      this.valid = true;
      this.edit = true;
      this.dialog = true;
    },

    handleBtnCancelar() {
      this.form = {
        id: "",
        title: "",
        description: "",
        companyId: "",
      };
      this.valid = false;

      this.dialog = false;
    },

    handleBtnSalvar() {
      const isFormValid = this.$refs.Form.validate();

      if (isFormValid) {
        if (this.edit) this.updateJob();
        else this.createJob();
      }
    },

    async createJob() {
      const job = {
        title: this.form.title,
        description: this.form.description,
        companyId: this.$store.getters.getUser.id,
      };

      await this.$axios
        .post("jobPost", job)
        .then((res) => {
          this.$emit("onCreated", res.data);
          this.$store.commit("setSuccess", { msg: "Vaga criada com sucesso!" });
          this.handleBtnCancelar();
        })
        .catch((err) => this.$store.commit("setError", err.response.data));
    },

    async updateJob() {
      const job = {
        id: this.form.id,
        title: this.form.title,
        description: this.form.description,
        companyId: this.$store.getters.getUser.id,
      };

      await this.$axios
        .put(`jobPost/${job.id}`, job)
        .then((res) => {
          this.$emit("onUpdated", res.data);
          this.$store.commit("setSuccess", {
            msg: "Vaga editada com sucesso!",
          });
          this.handleBtnCancelar();
        })
        .catch((err) => this.$store.commit("setError", err.response.data));
    },
  },
};
</script>
