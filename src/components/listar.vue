<template>
  <b-container class="aligner-item-2pagina">
    <select v-model="cidade">
        <option :value="item" v-for="item in cidades">{{item}}</option>
      </select>
      <br />
      <center>
         <b-alert class="col-md-5 text-center" variant="danger" :show="resultado.length==0" >Resultado Não Encontrado</b-alert>
      </center>    
    <b-card-group deck v-for="profissional in resultado">
               <b-card bg-variant="light" :header="profissional.profissao" class="text-bold">
                  <p class="card-text">
                    {{profissional.nome}}<br>
                    {{profissional.fone}}<br>
                    {{profissional.local}}</p>
              </b-card>
       </b-card-group>
  
   </b-container>
</template>

<script>
import dados from './dados/dados.js'
  export default {
    name: 'listar',
    props: {
      profissao:{
        type: String,
        required: false,
      }
    },
    data: function(){
      return{
        resultado:[],
        cidade:null,
        items: [
          'Costureira',
          'Pedreiro',
          'Mecânico',
          'Carpinteiro',
          'Eletricista',
          'Pintor',
          'Jardineiro',
        ],
        cidades:[
          'Agudo',
          'Restinga Sêca',
          'Santa Maria',
          'São João do Polesine',
          'Silveira Martins',
          'Faxinal do Sorturno',
        ],
        dados: dados,
          
      }    
    },
    watch: {
      profissao() {
        if (this.profissao){
          this.filtrar();
          this.$router.push({path:`/${this.profissao}`});
        }
      },
      cidade() {
        this.filtrar();
      }
    },
    methods:{
      filtrar() {
        this.resultado = [];
        this.dados.map((dado) => {
          if (dado.profissao == this.profissao && (this.cidade.length > 0 && dado.local == this.cidade)){
            this.resultado.push(dado)
          }
        })
      }
    }
  }
</script>
