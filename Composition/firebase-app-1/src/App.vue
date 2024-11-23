<template>
  <div>
    <h1>Hola mundo</h1>
    <nav>
      <RouterLink to="/">Home</RouterLink> | 
      <RouterLink to="/login">Login</RouterLink> | 
      <RouterLink to="/register">Register</RouterLink> |
      <button>Logout</button>
    </nav>

    <RouterView></RouterView>
  </div>
</template>

<script setup>

import { RouterLink } from 'vue-router';

</script>
