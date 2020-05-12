<template>
  <div>
    <b-navbar class="custom-bg" toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand to="/home">Rifas</b-navbar-brand>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item to="/home"><b class="text-light">Inicio</b></b-nav-item>
            <b-nav-item to="/draw"><b class="text-light">Sorteios</b></b-nav-item>
            <b-nav-item to="/payment"><b class="text-light">Como Pagar</b></b-nav-item>
            <b-nav-item to="/contact"><b class="text-light">Fale conosco</b></b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
export default {};
</script>

<style>
.navbar {
    min-height: 80px;
}
.custom-bg{
    background-color: black !important;
}
</style>