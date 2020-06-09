<template>
  <div>
    <b-navbar toggleable="lg" type="dark">
      <b-navbar-brand v-b-toggle.sidebar v-if="currentUser"
        ><font-awesome-icon :icon="['fa', 'bars']"
      /></b-navbar-brand>
      <b-navbar-brand to="/home">Rifas Nordeste</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-item to="/home"><b class="text-light">Inicio</b></b-nav-item>
          <b-nav-item to="/draw"><b class="text-light">Sorteios</b></b-nav-item>
          <b-nav-item to="/payment"
            ><b class="text-light">Como Pagar</b></b-nav-item
          >
          <b-nav-item to="/contact"
            ><b class="text-light">Fale conosco</b></b-nav-item
          >
          <b-nav-item-dropdown right v-if="currentUser">
            <!-- Using 'button-content' slot -->
            <template v-slot:button-content>
              {{ currentUser.name }}
            </template>
            <b-dropdown-item to="/painel" exact >Painel</b-dropdown-item>
            <b-dropdown-item @click="logout">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-sidebar id="sidebar" backdrop width="250px">
      <b-nav pills vertical class="pr-2 pl-2">
        <b-nav-item to="/painel/home"
          ><font-awesome-icon
            :icon="['fa', 'home']"
            size="lg"
            class="mr-2"
          />Home</b-nav-item
        >
        <b-nav-item to="/painel/raffle"
          ><font-awesome-icon
            :icon="['fa', 'dollar-sign']"
            size="lg"
            class="mr-2"
          />Rifas</b-nav-item
        >
        <b-nav-item to="/painel/payment"
          ><font-awesome-icon
            :icon="['fa', 'wallet']"
            size="lg"
            class="mr-2"
          />Formas de pagamento</b-nav-item
        >

        <b-nav-item to="/painel/contact"
          ><font-awesome-icon
            :icon="['fa', 'users']"
            size="lg"
            class="mr-2"
          />Rede sociais/contatos</b-nav-item
        >
      </b-nav>
    </b-sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  computed: {
    ...mapGetters(["currentUser"])
  },
  methods: {
    ...mapActions(["signOut"]),
    logout() {
      this.signOut().then(() => {
        this.$router.push("/login");
      });
    }
  }
};
</script>

<style>
</style>