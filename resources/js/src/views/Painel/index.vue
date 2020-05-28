<template>
  <div>
    <top-nav />
    <side-bar></side-bar>
    <main>
      <div class="container mt-5">
        <router-view />
      </div>
    </main>
    <footer-component />
  </div>
</template>

<script>
import Sidebar from "../../containers/SideBar";
import TopBar from "../../containers/TopNav";
import Footer from "../../containers/Footer";
export default {
  components: {
    "side-bar": Sidebar,
    "top-nav": TopBar,
    "footer-component": Footer
  }
};
</script>

<style>
</style>