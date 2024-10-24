<template>
  <button class="btn btn-primary" @click="inc">+</button>
</template>

<script setup>

  // props
  const props = defineProps({
    counterDato: {
      type: Number,
      required: true
    },
    datos:{
      type: Boolean,
      default: false
    }
  });

  // emit
  const emit = defineEmits(['actualizar']);

  // data

  // methods
  const inc = () => {
    emit('actualizar', props.counterDato + 1); // Emitimos el nuevo valor al padre
  };
</script>