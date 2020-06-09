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
export default {
  components: {
    "top-nav": TopNav,
    "footer-component": () => import("../containers/Footer")
  }
};
</script>

<style>
</style>