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
import logo from "./logo.vue";
import listar from "./listar.vue";
import rodape from "./rodape.vue";

export default {
  name: "Home",
  components: {
    listar,
    logo,
    rodape

  }
};
</script>

