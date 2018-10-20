<template>
  <b-container>
    <b-card-group deck>
               <b-card bg-variant="light" header="Pedreiro" class="text-bold">
                  <p class="card-text">
                    Daniel Bankow<br>
                    (55) 99628-2535<br>
                    Agudo-RS</p>
              </b-card>
       </b-card-group>  
    </b-container>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
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
