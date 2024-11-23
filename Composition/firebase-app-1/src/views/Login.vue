<template>
  <div>
    <h1>Login</h1>
  </div>
</template>

<script setup>
  import { computed } from 'vue';
import { useUserStore } from '../stores/user'

const userStore      = useUserStore();
const textoMayuscula = computed(() => userStore.userData.toUpperCase());

</script>