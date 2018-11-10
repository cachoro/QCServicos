<template>    
        <div class="rodape">
            <!-- Modal -->         
            <b-btn v-b-modal.modal1 class="center">Quero anunciar</b-btn>
            <b-modal id="modal1" title="Realize seu cadastro!">
                <p class="my-4"> <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdRk3G3V33BtmBkMsFJzNx4TwADuiFl67C_O0bPd0xJSkYPKg/viewform?embedded=true" width="450" height="520" frameborder="0" marginheight="0" marginwidth="0">Carregando…</iframe></p>
            </b-modal>
        </div>
</template>

<script>
export default {
  name: "rodape"
};
</script>