<template>
  <div class="container m-2">
    <h1>
      {{ counter }}
    </h1>
    <ButtonCounter
      :counterDato="counter"
      @actualizar="inc"
    />
    <hr>

    <h1 v-if="favorito">Mi componente Favorito es: {{ favorito }}</h1>

    <LoadingSpinner :mostrar="loading"/>
    <div  v-if="!loading">
      <div class="d-flex justify-content-center">
        <div class="btn-group mb-2" role="group" aria-label="example">
          <button type="button" class="btn btn-outline-primary" @click="anteriorPag()" :disabled="paginacion == 0">Previus</button>
          <button type="button" class="btn btn-outline-primary" @click="siguientePag()" :disabled=" paginacion >= (post.length - cantPag) ">Next</button>
        </div>
      </div>
      <div v-for="postItem in postPaginacion">
        <BlogPost
          :id="postItem.id"
          :title="postItem.title"
          :body="postItem.body"
          :colorBg="postItem.colorBg"
          @cambiarFavorito="cambiarFavorito"
        />
      </div>
    </div>
  </div>
  
</template>

<script setup>
  import { ref, onMounted } from 'vue';
  import ButtonCounter from './components/ButtonCounter.vue';
  import BlogPost from './components/BlogPost.vue';
  import LoadingSpinner from './components/LoadingSpinner.vue';

  //data
  const counter        = ref(0);
  const post           = ref([]);
  const postPaginacion = ref([]);
  const favorito       = ref('');
  const paginacion     = ref(0);
  const cantPag        = ref(5);
  const loading        = ref(false);

  const create = async () => {
    try {
      loading.value = true;
      const res     = await fetch('https://jsonplaceholder.typicode.com/posts')
      const data    = await res.json();
      loading.value = false;

      post.value           = data;
      postPaginacion.value = post.value.slice(paginacion.value, paginacion.value+cantPag.value);
    } catch (error) { 
      console.log("Error: ", error);
    }
  };
  create();

  //methods
  const inc = (valor) => {
    counter.value = valor;
  };
  const cambiarFavorito = (post) =>{
    favorito.value = post
  };
  const anteriorPag = () => {
    paginacion.value -= cantPag.value;
    postPaginacion.value = post.value.slice(paginacion.value, paginacion.value+cantPag.value);
  };
  const siguientePag = () => {
    paginacion.value += cantPag.value;
    postPaginacion.value = post.value.slice(paginacion.value, paginacion.value+cantPag.value);
  };
  
  //computed

</script>