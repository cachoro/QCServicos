<template>
  <div>
    <logo />
<div class="container">
    <div class="row aligner-item">
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
         <div class="anunciohome">
            <b-btn v-b-modal.modal1 class="center">Quero anunciar</b-btn>
            <b-modal id="modal1" title="Realize seu cadastro!">
                <p class="my-4"> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRk3G3V33BtmBkMsFJzNx4TwADuiFl67C_O0bPd0xJSkYPKg/viewform?embedded=true" width="450" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe></p>
            </b-modal>
    </div>
        </div>
    </div>
</div>
</body>
</template>
<script>
import Logo from './logo';
import Rating from 'v-rating';

export default {
  name: "Home",
  components:{
      Logo
  }
};
</script>

