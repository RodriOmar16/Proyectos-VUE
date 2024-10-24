<template>
  <button @click="inc">+</button>
</template>

<script setup>

// Recibimos la prop 'counterDato' desde el componente padre
defineProps(['counterDato']);

// Definimos el evento personalizado 'actualizar' que emitiremos
const emit = defineEmits(['actualizar']);

// Función para incrementar el contador
const inc = () => {
  console.log("counterDato: ", counterDato.value);
  const nuevoValor = counterDato + 1;
  emit('actualizar', nuevoValor); // Emitimos el nuevo valor al padre
};
</script>