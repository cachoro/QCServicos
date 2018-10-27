<template>
  <b-container>
    <select v-model="profissao">
        <option :value="item" v-for="item in items">{{item}}</option>
      </select>
      <br />
      <b-alert variant="danger" :show="resultado.length==0" >Resultado Não Encontrado</b-alert>
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
        items: [
          'Costureira',
          'Pedreiro',
          'Mecânico',
          'Carpinteiro',
          'Eletricista',
          'Pintor',
          'Jardineiro',
        ],
        dados: dados,
          
      }    
    },
    watch: {
      profissao() {
        if (this.profissao){
          this.filtrar();
        }
      }
    },
    methods:{
      filtrar() {
        this.resultado = [];
        this.dados.map((dado) => {
          if (dado.profissao == this.profissao){
            this.resultado.push(dado)
          }
        })
      }
    }
  }
</script>
