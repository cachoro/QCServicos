
<template>
   <div>
    <div>
        <img class="imglogo" alt="Vue logo" src="./assets/logo_qc.png" style="">
    </div>
    <br>
    <hello-world />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";

export default {
  name: "app",
  components: {
    HelloWorld
  }
};
</script>

<style lang="scss">
@import "./assets/scss/app.scss";
</style>

