<template>

  <div>
    <nav class="navbar bg-primary px-4 d-flex justify-content-between" data-bs-theme="dark">
      <RouterLink class="text-decoration-none" to="/">
        <img src="./assets/vue.svg" alt="">
        <span class="ml-2 text-white">Logo</span>
      </RouterLink>
      <div class="d-flex justify-content-around">
        <RouterLink class="btn btn-secondary" to="/">Home</RouterLink>
        <RouterLink class="btn btn-secondary mx-2" to="/login">Login</RouterLink>
        <RouterLink class="btn btn-secondary me-2" to="/register">Register</RouterLink>
        <button class="btn btn-secondary">Logout</button>
      </div>
    </nav>

    <main class="container">
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script setup>

  import { RouterLink } from 'vue-router';

</script>
