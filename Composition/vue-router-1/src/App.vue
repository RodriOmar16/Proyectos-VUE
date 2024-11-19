<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary ">
    <div class="container">
      <RouterLink to="/" class="text-decoration-none text-dark">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        LOGO
      </RouterLink>
      <div class="btn-group">
        <RouterLink to="/"  class="btn btn-outline-primary">Inicio</RouterLink>
        <RouterLink to="/about"  class="btn btn-outline-primary">About</RouterLink>
        <RouterLink to="/pokemons" class="btn btn-outline-primary">Pokemons</RouterLink>
        <RouterLink to="/pokemons-favoritos" class="btn btn-outline-primary">Favoritos</RouterLink>
      </div>
    </div>
  </nav>

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
