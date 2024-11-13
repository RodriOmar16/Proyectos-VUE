<template>
  <h1 class="text-center">Pokemones</h1>
  <v-card
    class="mx-auto"
    max-width="300"
  >
    <v-list>
      <v-list-item 
        v-for="(item) in pokemons" :key="item.url"
      >
      <v-list-item-title>
        <RouterLink :to="`pokemons/${item.name}`">
          {{ item.name }}
        </RouterLink>
      </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-card>
</template>

<script setup>
  //imports
  import axios from 'axios'
  import { ref } from 'vue';
  import {RouterLink} from 'vue-router';

  //data
  const pokemons = ref([]);

  //methods
  const getData = async () => {
    try {
      const { data } = await axios.get('https://pokeapi.co/api/v2/pokemon')
      pokemons.value = data.results
    } catch (error) {
      console.log("Ocurrió un error al intentar obtener los datos: "+error.message)
    }
  };

  //created
  getData();

  //computeds

  //watch

</script>