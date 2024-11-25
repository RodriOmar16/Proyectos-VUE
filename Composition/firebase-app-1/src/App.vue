<template>

  <div>
    <nav class="navbar bg-primary px-4 d-flex justify-content-between" data-bs-theme="dark">
      <RouterLink class="text-decoration-none" to="/" v-if="userStore.user">
        <img src="./assets/vue.svg" alt="">
        <span class="ml-2 text-white">Logo</span>
      </RouterLink>
      <div class="d-flex justify-content-around">
        <RouterLink class="btn btn-secondary" to="/" v-if="userStore.user">Home</RouterLink>
        <RouterLink class="btn btn-secondary mx-2" to="/login-register" v-if="!userStore.user">Conectarse</RouterLink>
      </div>
      <div v-if="userStore.user">
        <span>
          Bienvenido {{ userStore.user.name }}
        </span>
        <button class="btn btn-secondary" @click="cerrarSesion()">Logout</button>
      </div>
    </nav>
    <SnackBar
        v-model="userStore.dialogSnackBar"
      />
    <main class="container">
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script setup>
  import { useUserStore } from './stores/user';
  import { RouterLink } from 'vue-router';
  import { useRouter } from 'vue-router';
  import SnackBar from './components/generales/SnackBar.vue';
  
  const userStore = useUserStore();
  const router    = useRouter();

  if(!userStore.user){
    router.push('/login-register');
  }

//methods
  const cerrarSesion = async () => {
    await userStore.logout()
    router.push('/login-register');
    console.log("estas en el register ?? ")
  };

</script>
