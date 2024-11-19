<template>
  <div class="container text-center mt-4 pt-2">
    <p v-if="loading">Cargando, por favor espere...</p>
    <div v-else class="container">
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
          <p class="ma-0"><v-icon class="mr-2">fa-solid fa-triangle-exclamation</v-icon> {{ errorMsj }}</p>
        </div>
      </div>
      <div class="d-flex justify-content-center align-center">
        <v-btn color="secondary" @click="volver()" class="me-2">
          Volver
        </v-btn>
        <v-btn v-if="data" color="purple" @click="buscarFavorito(data.forms[0]) == -1 ? agregarFavorito(data.forms[0]) : quitarFavorito(data.forms[0]) ">
          {{ buscarFavorito(data.forms[0]) == -1 ? 'Agregar Favorito' : 'Quitar Favorito' }}
        </v-btn>
      </div>
    </div>
  </div>
</template>

<script setup>
  //imports
  import { useRoute, useRouter } from 'vue-router';
  import { useGetData } from '../composables/getData.js'
  import { useTiendaStore, useFavoritosStore } from '../store/tienda'

  //data
  const route                                               = useRoute();
  const router                                              = useRouter();
  const name                                                = route.params.name;
  const { data, loading, errorMsj, getData }                = useGetData();
  const useTiendalink                                       = useTiendaStore();
  const useFavoritos                                        = useFavoritosStore();
  const { agregarFavorito, quitarFavorito, buscarFavorito}  = useFavoritos;

  //methods
  const volver = () => {
    router.push(`/${useTiendalink.linkVolver}`);
  }

  //created
  getData(`https://pokeapi.co/api/v2/pokemon/${name}`);

  //computed

  //watch


</script>