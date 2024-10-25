<template>
  <div  v-if="mostrar">
    <div class="d-flex justify-content-center">
      <div class="spinner-border" role="status">
      </div>
    </div>
    <p class="text-center" >Cargando...</p>
  </div>
</template>

<script setup>
  const props = defineProps({
    mostrar:{
      type: Boolean,
      default: false,
      required: true
    }
  })
</script>