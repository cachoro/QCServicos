<template>
  <div>
    <logo />
    <br />
   <div class="container text-right" >
       <router-link to="/">
       <img src="../assets/Home-Icon.png" style="max-height:32px" >
       </router-link>
   </div>
    <listar :profissao="propProfissao" />
    <br />
    <rodape />
  </div>
</template>

<script>
import logo from "./logo.vue";
import listar from "./listar.vue";
import rodape from "./rodape.vue";

export default {
  name: "Profissao",
  components: {
    listar,
    logo,
    rodape

  },
  data(){
      return{
          propProfissao: null
      }
  },
  mounted(){
      this.propProfissao = this.$route.params.profissao
  }
};
</script>