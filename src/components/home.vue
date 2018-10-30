<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-blue">
        <img src="../assets/logo_qc.png" class="imglogo" height="75px" width="150px">
</nav>
<div class="container">
    <div class="row">
        <div class="col-md-4">
            <router-link to="/Pedreiro">
              <img src="https://uploads.metropoles.com/wp-content/uploads/2018/04/10113058/WhatsApp-Image-2018-04-10-at-11.28.16-840x560.jpeg" class="img-fluid img-thumbnail border" id="borda" height="350px" width="400px">
              <h1 class="textoimg">Pedreiro</h1>
            </router-link>
        </div>
        <div class="col-md-4">
            <router-link to="/Costureira">
              <img src="../assets/costureira.jpg" class="img-fluid img-thumbnail border" id="borda" height="350px" width="400px">
              <h1 class="textoimg">Costura</h1>
            </router-link>
        </div>
        <div class="col-md-4">
            <router-link to="/Carpinteiro">
              <img src="../assets/carpinteiro.jpg" class="img-fluid img-thumbnail border" id="borda" height="350px" width="400px">
              <h1 class="textoimg">Carpintaria</h1>
            </router-link>
        </div>
        <div class="col-md-4 espaco">
            <router-link to="/Mecânico">
              <img src="../assets/mecanico.jpg" class="img-fluid img-thumbnail border" id="borda" height="350px" width="400px">
              <h1 class="textoimg">Mecânica</h1>
            </router-link>
        </div>
        <div class="col-md-4 espaco">
            <router-link to="/Eletricista">
              <img src="../assets/eletricista.jpg" class="img-fluid img-thumbnail border" id="borda" height="350px" width="400px">
              <h1 class="textoimg">Eletrica</h1>
            </router-link>
        </div>        
        <div class="col-md-4 espaco">
            <router-link to="/Pintor">
              <img src="../assets/pintor.jpg" class="img-fluid img-thumbnail border" id="borda" height="350px" width="400px">
              <h1 class="textoimg" align="left">Pintura</h1>
            </router-link>
        </div>
	
        </div>
    </div>
</div>
</body>
</template>
<script>
import Rating from 'v-rating';

export default {
  name: "Home",
};
</script>

