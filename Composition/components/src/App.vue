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
    <div v-for="postItem in post">
      <BlogPost
        :title="postItem.title"
        :body="postItem.body"
        :colorBg="postItem.colorBg"
        @cambiarFavorito="cambiarFavorito"
      />
    </div>

  </div>
</template>

<script setup>
  import { ref } from 'vue';
  import ButtonCounter from './components/ButtonCounter.vue';
  import BlogPost from './components/BlogPost.vue';

  //data
  const counter = ref(0);
  const post = ref([
    { title: 'Post 1', body: 'Hola mundo', colorBg: 'danger' },
    { title: 'Post 2', colorBg: 'primary' },
    { title: 'Post 3', body: 'Otro text', colorBg: 'success' },
  ]);
  const favorito = ref('');

  //methods
  const inc = (valor) => {
    counter.value = valor;
  }
  const cambiarFavorito = (post) =>{
    favorito.value = post
  }
  //computed

</script>