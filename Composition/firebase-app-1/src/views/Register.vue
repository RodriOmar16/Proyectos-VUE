<template>
  <div>
    <h1>Register</h1>
    <h2>En {{ miniscula }}</h2>
    <button @click="updateName()">Registrar</button>
  </div>
</template>

<script setup>
  import { useUserStore } from '../stores/user';

  const userStore = useUserStore();
  const miniscula = userStore.minuscula;

  const updateName = () => {
    userStore.register('Cosme fulanito')
  }

</script>