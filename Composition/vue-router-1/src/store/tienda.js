import { defineStore } from "pinia";
import { ref } from "vue";

export const useTiendaStore = defineStore('tiendaStore', () => {
  const linkVolver = ref('');

  const guardarLink = (link) => { 
    linkVolver.value = link 
  };

  return{
    linkVolver, guardarLink
  }
});

export const useFavoritosStore = defineStore('favoritosStore', () => {
  const favoritos = ref([]);

  const agregarFavorito = (item) => { 
    let pos = favoritos.value.map(e => e.name).indexOf(item.name)
    if(pos == -1){
      favoritos.value.push(item);
      localStorage.setItem('favoritos', JSON.stringify( favoritos.value));
    }else console.log("Ya existe en la lista")
  };  

  const quitarFavorito  = (item) => {
    let pos = favoritos.value.map(e => e.name).indexOf(item.name)
    if(pos != -1){
      favoritos.value.splice(pos,1)
      localStorage.setItem('favoritos', JSON.stringify( favoritos.value));
    }else console.log("Error, el pokemon no está en favoritos")
  }

  const buscarFavorito = (busItem) => {
    return favoritos.value.map(e => e.name).indexOf(busItem.name)
  }

  const getFavoritos = () =>{
    favoritos.value = JSON.parse(localStorage.getItem('favoritos'))
  }

  return{
    favoritos, agregarFavorito, quitarFavorito, buscarFavorito, getFavoritos
  }
});