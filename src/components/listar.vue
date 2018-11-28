<template>
  <b-container>
    <form>
    <b-form-select v-model="cidade" id="municipio">  
        <option :value="item" v-for="item in cidades">{{item}}</option>
        <option slot="first" :value="null">Escolha uma cidade</option>
      </b-form-select>
      </form>
      <b-alert variant="danger" :show="resultado.length==0" >Resultado Não Encontrado</b-alert>
    <b-card-group deck v-for="profissional in resultado" >
               <b-card :header="profissional.profissao" bg-variant="secondary" class="negrito">
                    <div class="posição">
                    {{profissional.nome}}<br>
                    {{profissional.fone}}<br>
                    {{profissional.local}}
                    </div>
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
