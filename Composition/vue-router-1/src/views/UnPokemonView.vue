<template>
  <div class="text-center">
    <div class="text-h5" v-if="pokemon">Hola mundo, soy {{ name }}</div>
    <v-divider class="pa-0 ma-0"></v-divider>
    <div class="d-flex justify-center ma-2">
      <v-img
        v-if="pokemon"
        :width="171"
        cover
        max-width="200"
        :src="pokemon.sprites?.front_default"
      ></v-img>
      <v-alert  v-else
        density="compact"
        text="No se encontró el pokemon solicitado. Ocurrió un error al traer la información del pokemon !"
        title="Pokemón no encontrado"
        type="warning"
      ></v-alert>
    </div>
    <v-btn color="secondary" @click="volver()">
      Volver
    </v-btn>
  </div>
</template>

<script setup>
  //imports
  import { useRoute, useRouter } from 'vue-router';
  import axios from 'axios';
  import { ref } from 'vue';

  //data
  const route = useRoute();
  const router = useRouter();
  const name = route.params.name;
  const pokemon = ref({}); 

  //methods
  const getData = async () => {
    try {
      const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      pokemon.value = data
      //console.log("date: ", data)
    } catch (error) {
      pokemon.value = null;
      console.log("Ocurrió un error al traer la información del pokemon: "+error.message)
    }
  };
  const volver = () => {
    router.push('/pokemons');
  }

  //created
  getData();

  //computed

  //watch


</script>