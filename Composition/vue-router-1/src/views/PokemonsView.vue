<template>
  <v-card
    class="mx-auto"
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
                <RouterLink :to="`pokemons/${item.name}`" class="text-decoration-none text-dark">
                  {{ item.name }}
                </RouterLink>
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
    </v-card-text>
  </v-card>
</template>

<script setup>
  //imports
  import { ref } from 'vue';
  import {RouterLink} from 'vue-router';
  import { useGetData } from '../composables/getData.js'

  //data
  const { data, loading, errorMsj,  getData } = useGetData();
  const url = ref('https://pokeapi.co/api/v2/pokemon');
  
  //created
  getData(url.value);
  
  //methods
  const previous = (data) => {
    url.value = data?.previous
    getData(url.value);
  };
  const next = (data) => {
    url.value = data.next
    getData(url.value);
  }



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