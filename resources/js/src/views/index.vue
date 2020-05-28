<template>
  <div id="app-container">
    <top-nav />
    <!--<sidebar />-->
    <main>
      <router-view />
    </main>
    <footer-component />
  </div>
</template>

<script>
import TopNav from "../containers/TopNav";
import Footer from "../containers/Footer";
export default {
  components: {
    "top-nav": TopNav,
    "footer-component": Footer
  }
};
</script>

<style>
</style>