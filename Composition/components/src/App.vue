<template>
  <div class="container">
    <h1>
      {{ counter }}
    </h1>
    <ButtonCounter
      :counterDato="counter"
      @actualizar="inc"
    />
    <hr>
    <BlogPost
      title="Post 1"
    />
    <BlogPost
      title="Post 2"
    />
    <BlogPost
      title="Post 3"
    />

  </div>
</template>

<script setup>
import { ref } from 'vue';
import ButtonCounter from './components/ButtonCounter.vue';
import BlogPost from './components/BlogPost.vue';

const counter = ref(0);

const inc = (valor) => {
  counter.value = valor;
}

</script>