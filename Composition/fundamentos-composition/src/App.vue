<template>
  <div class="container text-center mt-3">
    <button class="btn btn-success" @click="inc()" >Incrementar</button>
    <button class="btn btn-danger" @click="dec()" >Decrementar</button>
    <button class="btn btn-primary" @click="reset()" >Resetear</button>
    <button class="btn btn-secondary" @click="agregarFav()" :disabled="controlarLista"> Favorito </button>
    
    <h1 :style="'color: '+ (counter > 0 ? 'green;' : (counter < 0 ? 'red;' : 'black;'))">
      {{ counter }}
    </h1>

    <ul class="list-group">
      <li class="list-group-item" v-for="item in array">{{ item }}</li>
    </ul>
  </div>
</template>

<script setup>
  //imports
  import { ref, computed } from 'vue';
  
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

  //computed
  const controlarLista = computed(() => {
    return array.value.indexOf(counter.value) != -1
  });

</script>

<style>

</style>