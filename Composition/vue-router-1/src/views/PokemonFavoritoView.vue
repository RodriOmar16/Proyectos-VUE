<template>
  <v-card
    class="container mt-4"
    width="700"
  >
    <v-card-title>
      Mis Pokemones
    </v-card-title>
    <v-divider class="pa-0 ma-0"></v-divider>
    <v-card-text>
      <v-row>
        <v-col>
          <v-data-table
            :headers="headers"
            :items="useFavoritos.favoritos"
            item-key="name"
            items-per-page="10"
            no-data-text="No hay datos para mostrar"
            class=""
          >
            <template v-slot:[`item.acciones`]="{item}">
              <v-icon class="ml-2" color="primary" size="small" title="Ver"@click="ver(item)">fa-solid fa-eye</v-icon>
              <v-icon class="ml-2" color="purple" size="small" title="Desmarcar" @click="quitarFavorito(item)">fa-solid fa-heart-circle-xmark</v-icon>
            </template>
            <template v-slot:no-data>
              <div class="alert alert-warning d-flex flex-wrap ma-0" role="alert">
                <p class="ma-0 pa-0"><v-icon class="mr-2">fa-solid fa-triangle-exclamation</v-icon> No hay favoritos</p>
              </div>
            </template>
          </v-data-table>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script setup>
  //imports
  import { ref } from 'vue';
  import { useRoute, useRouter} from 'vue-router';
  import { useTiendaStore, useFavoritosStore } from '@/store/tienda.js';

  //data
  const headers = [
    { title: 'Nombre', key: 'name' },
    { title: 'Acciones', key: 'acciones', align: 'end' },
  ];
  const route  = useRoute();
  const router = useRouter();
  const { guardarLink } = useTiendaStore();
  const useFavoritos = useFavoritosStore();
  const { agregarFavorito, quitarFavorito }   = useFavoritosStore();

  //created
  
  //methods
  const ver = (item) => {
    guardarLink('pokemons-favoritos');
    router.push(`/pokemons/${item.name}`)
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