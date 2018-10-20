<template>
  <div>
    <logo />
    <br />
    <listar />
    <br />
    <rodape />
  </div>
</template>

<script>
import logo from "./components/logo.vue";
import listar from "./components/listar.vue";
import rodape from "./components/rodape.vue";

export default {
  name: "app",
  components: {
    listar,
    logo,
    rodape

  }
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>