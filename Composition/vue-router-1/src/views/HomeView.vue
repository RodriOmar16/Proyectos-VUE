<script setup>
  import {useCounterStore} from '../store/counter'

  const useCounter = useCounterStore()
  //con desestructuracion
  const { increment } = useCounterStore()

</script>

<template>
  <h1>Home counter: {{ useCounter.count }}</h1>
  <v-btn @click="increment"> + </v-btn>
  <h1>double counter: {{ useCounter.double }}</h1>

</template>
