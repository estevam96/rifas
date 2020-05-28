<template>
  <div>
    <b-navbar class="custom-bg" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand v-b-toggle.sidebar v-if="currentUser"
        ><font-awesome-icon :icon="['fa', 'bars']"
      /></b-navbar-brand>
      <b-navbar-brand to="/home">Rifas</b-navbar-brand>
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
            <b-dropdown-item to="/painel">Painel</b-dropdown-item>
            <b-dropdown-item @click="logout">Sair</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
    <b-sidebar id="sidebar" backdrop width="250px">
      <b-nav pills vertical class="pr-2 pl-2">
        <b-nav-item to="/painel/home">Home</b-nav-item>
        <b-nav-item to="/painel/raffle">Rifas</b-nav-item>
        <b-nav-item to="/painel/payment">Formas de pagamento</b-nav-item>
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
.navbar {
  min-height: 80px;
}
.custom-bg {
  background-color: black !important;
}
</style>