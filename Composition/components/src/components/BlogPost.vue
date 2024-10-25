<template>
  <div class="card" :class="`bg-${props.colorBg}`" @click="controlandoFavorito(props.title)">
    <div class="card-body">
      <h5 class="card-title">{{ props.id }} - {{ props.title }}</h5>
      <p>{{ props.body }}</p>
    </div>
  </div>
</template>

<script setup>
  //props
  const props = defineProps({
    id:{
      type: Number
    },  
    title: {
      type:String,
      default: ''
    },
    body: {
      type:String,
      default: 'Lorem ipsum dolor, sit amet'
    },
    colorBg:{
      type:String,
      default: 'info'
    }
  });
  
  //emits
  const emit = defineEmits(['cambiarFavorito']);
  
  //data

  //methods
  const controlandoFavorito = (post) => {
    emit('cambiarFavorito', post)
  };

  //computed

</script>