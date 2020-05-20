<template>
  <div>
    <top-nav/>
    <side-bar></side-bar>
    <main>
      <div class="container">
        <router-view />
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from "../../containers/SideBar";
import TopBar from "../../containers/TopNav";
export default {
  components: {
    "side-bar": Sidebar,
    "top-nav": TopBar
  }
};
</script>

<style>
</style>