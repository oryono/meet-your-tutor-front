<template>
  <div id="app">
    <Header />
    <b-container>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
export default {
  name: "app",
  components: {
    Header
  }
};
</script>
