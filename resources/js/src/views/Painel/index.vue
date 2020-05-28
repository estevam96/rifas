<template>
  <div>
    <top-nav />
    <main>
      <div class="container mt-5">
        <router-view />
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script>
import TopBar from "../../containers/TopNav";
import Footer from "../../containers/Footer";
export default {
  components: {
    "top-nav": TopBar,
    "footer-component": Footer
  }
};
</script>

<style>
</style>