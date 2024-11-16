<template>
  <div class="text-center mt-4 pt-2">
    <p v-if="loading">Cargando, por favor espere...</p>
    <div v-else>
      <div class="text-h5" v-if="data">Hola mundo, soy {{ name }}</div>
      <div class="d-flex justify-center">
        <v-img
          v-if="data"
          :width="171"
          cover
          max-width="200"
          :src="data.sprites?.front_default"
        ></v-img>
        <div class="alert alert-danger d-flex flex-wrap" role="alert"  v-if="!data && errorMsj">
          <p><v-icon class="mr-2">fa-solid fa-triangle-exclamation</v-icon> {{ errorMsj }}</p>
        </div>
      </div>
      <v-btn color="secondary" @click="volver()" class="mt-2">
        Volver
      </v-btn>
    </div>
  </div>
</template>

<script setup>
  //imports
  import { useRoute, useRouter } from 'vue-router';
  import { useGetData } from '../composables/getData.js'

  //data
  const route  = useRoute();
  const router = useRouter();
  const name   = route.params.name;
  const { data, loading, errorMsj, getData } = useGetData();

  //methods
  const volver = () => {
    router.push('/pokemons');
  }

  //created
  getData(`https://pokeapi.co/api/v2/pokemon/${name}`);

  //computed

  //watch


</script>