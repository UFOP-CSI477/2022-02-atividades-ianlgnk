<template>
  <v-app>
    <div class="d-flex flex-row">
      <v-navigation-drawer permanent style="height: 100vh; width: 300px">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title class="text-h6"> Tabelas </v-list-item-title>
            <v-list-item-subtitle>
              Sistema de doação de sangue
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list dense nav>
          <v-list-item
            v-for="(item, index) in menuOptions"
            :key="index"
            link
            @click="onClickMenuOption(item.title)"
          >
            <v-list-item-content>
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <router-view />
    </div>
  </v-app>
</template>

<script>
export default {
  name: "App",

  data: () => ({
    menuOptions: [
      { title: "Estados" },
      { title: "Cidades" },
      { title: "Tipos sanguíneos" },
      { title: "Pessoas" },
    ],
  }),

  methods: {
    onClickMenuOption(title) {
      this.$router.push({ name: title });
    },
  },
};
</script>
