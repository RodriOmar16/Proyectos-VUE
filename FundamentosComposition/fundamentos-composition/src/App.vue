<template>
  <button @click="inc()" >Incrementar</button>
  <button @click="dec()" >Decrementar</button>
  <button @click="reset()" >Resetear</button>
  <button 
    @click="agregarFav()" 
    :disabled="array.indexOf(counter) != -1"
  >
    Favorito
  </button>
  <h1 :style="'color: '+ (counter > 0 ? 'green;' : (counter < 0 ? 'red;' : 'black;'))">
    {{ counter }}
  </h1>

  <ul v-for="item in array">
    <li>{{ item }}</li>
  </ul>

</template>

<script setup>
  //imports
  import { ref } from 'vue';
  
  //Data
  let counter = ref(0);
  let array   = ref([]);
  let pos     = ref(-1);

  //Methods
  const inc   = () => counter.value++;
  const dec   = () => counter.value--;
  const reset = () => counter.value = 0;
  function agregarFav(){
    array.value.push(counter.value);
  }


</script>

<style>

</style>