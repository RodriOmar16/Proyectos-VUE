<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar bg-body-tertiary">
    <div class="container ">
      <RouterLink to="/" class="btn btn-outline-primary">
        <img src="@/assets/logo.svg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        Vue - Router 
      </RouterLink>
      <div class="btn-group">
        <RouterLink to="/about"  class="btn btn-outline-primary">About</RouterLink>
        <RouterLink to="/pokemons" class="btn btn-outline-primary">Pokemon</RouterLink>
      </div>
    </div>
  </nav>
  <!--<header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/pokemons">Pokemon</RouterLink>
      </nav>
    </div>
  </header>-->

  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>

</style>
