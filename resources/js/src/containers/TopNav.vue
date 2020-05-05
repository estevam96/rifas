<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="#">Rifas</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
            <b-nav-item href="#"><b>Inicio</b></b-nav-item>
            <b-nav-item href="#"><b>Sorteios</b></b-nav-item>
            <b-nav-item href="#"><b>Como Pagar</b></b-nav-item>
            <b-nav-item href="#"><b>Fale conosco</b></b-nav-item>
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
</style>