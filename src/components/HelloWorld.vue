<template>
  <b-container>
    <select v-model="profissao">
        <option :value="item" v-for="item in items">{{item}}</option>
      </select>
      <button @click="filtrar">Filtrar</button>
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
  export default {
    name: 'HelloWorld',

    data: function(){
      return{
        profissao:"",
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
        dados:[
          {
            nome:'Diva',
            profissao:'Costureira',
            fone: '5599679-5198',
            local: 'Restinga Seca',
          },
        
          {
            nome: 'Daniel Bankow',
            profissao:'Pedreiro',
            fone: '5599628-2535',
            local: 'Agudo',
          },
        
          {
            nome: 'Pedro Gome',
            profissao:'Carpinteiro',
            fone: '5599999-5640',
            local: 'Restinga Sêca',
          },

          {
            nome: 'Dione Santos',
            profissao:'Pedreiro',
            fone: '5198057-2140',
            local: 'Restinga Sêca',
          },

          {
            nome: 'Leandro Carvalho',
            profissao:'Pedreiro',
            fone: '5599735-6171',
            local: 'São João do Polesine',
          },

          {
            nome: 'Osmar',
            profissao:'Eletricista',
            fone: '5599193-3974',
            local: 'Santa Maria',
          },

          {
            nome: 'Jonatan Santos',
            profissao:'Pedreiro',
            fone: '5599697-5039',
            local: 'Silveira Martins',
          },

          {
            nome: 'José Trindade',
            profissao:'Pintor',
            fone: '5599616-6920',
            local: 'Silveira Martins',
          },
          
          {
            nome: 'Eleandro Ferreira',
            profissao:'Jardineiro',
            fone: '5599713-2028',
            local: 'Faxinal do Sorturno',
          },
        ]
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

<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
