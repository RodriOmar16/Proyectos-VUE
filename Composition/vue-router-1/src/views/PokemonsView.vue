<template>
  <v-card
    class="container mt-4"
    width="700"
  >
    <v-card-title>
      Lista de pokemones
    </v-card-title>
    <v-divider class="pa-0 ma-0"></v-divider>
    <v-card-text>
      <v-row>
        <v-col cols="12" class="d-flex justify-center">
          <v-btn class="mr-2" @click="previous(data)" color="primary" :disabled="!(data?.previous)">
            Prev
          </v-btn>
          <v-btn @click="next(data)" color="primary" :disabled="!(data?.next)">
            Next
          </v-btn>
        </v-col>
        <v-col cols="12">
          <p v-if="loading">Cargando, por favor espere...</p>
          <div v-else>
            <v-list v-if="data && !errorMsj" class="">
              <v-list-item v-for="(item) in data.results" :key="item.url" class="border cebra">
                <div class=" d-flex justify-content-between align-center">
                  <p class="ma-0 pa-0">{{ item.name }}</p>
                  <div>
                    <v-icon class="ml-2" color="primary" size="small" title="Ver"@click="ver(item)">fa-solid fa-eye</v-icon>
                    <v-icon v-if="buscarFavorito(item) == -1"
                      class="ml-2" color="error" size="small" title="Marcar como favorito" @click="agregarFavorito(item)">fa-solid fa-heart</v-icon>
                    <v-icon v-else
                      class="ml-2" color="orange" size="small" title="Desmarcar" @click="quitarFavorito(item)">fa-solid fa-heart-circle-xmark</v-icon>
                  </div>
                </div>
              </v-list-item>
            </v-list>
            <v-alert  v-if="!data && errorMsj"
              density="compact"
              :text="errorMsj"
              title="Error al cargar los pokemons"
              type="warning"
            ></v-alert>
          </div>
        </v-col>
      </v-row>
      {{  }}
    </v-card-text>
  </v-card>
</template>

<script setup>
  //imports
  import { ref } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import { useGetData } from '../composables/getData.js'
  import { useTiendaStore, useFavoritosStore } from '@/store/tienda.js';

  //data
  const { data, loading, errorMsj,  getData } = useGetData();
  const url                                   = ref('https://pokeapi.co/api/v2/pokemon');
  const { guardarLink }                       = useTiendaStore();
  const route                                 = useRoute();
  const router                                = useRouter();
  const useFavoritos                          = useFavoritosStore();
  const { agregarFavorito, quitarFavorito, 
          buscarFavorito, getFavoritos }      = useFavoritosStore();
  
  //created
  getData(url.value);
  getFavoritos();
  
  //methods
  const previous = (data) => {
    url.value = data?.previous
    getData(url.value);
  };
  const next = (data) => {
    url.value = data.next
    getData(url.value);
  };
  const ver = (item) => {
    guardarLink('pokemons');
    router.push(`/pokemons/${item.name}`)
  };

  //computeds

  //watch

</script>

<style scoped>
.cebra:nth-child(odd) {
  background-color: #d5d5d5; /* Color para filas impares */
}
.cebra:nth-child(even) {
  background-color: #fff; /* Color para filas pares */
}
</style>