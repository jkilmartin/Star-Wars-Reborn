<template>
  <div id="app">
    <MyNav />
    <router-view></router-view>
  </div>
</template>

<script>
import MyNav from "./components/MyNav";

export default {
  name: "App",
  components: {
    MyNav
  }
};
</script>

<style>
</style>
