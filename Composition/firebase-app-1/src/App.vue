<template>

  <div>
    <nav class="navbar bg-primary px-4 d-flex " :class="route.path == '/' ? 'justify-content-between' : 'justify-content-center'" data-bs-theme="dark">
      <RouterLink class="text-decoration-none" to="/" v-if="userStore.user">
        <img src="./assets/vue.svg" alt="">
        <span class="ml-2 text-white">Logo</span>
      </RouterLink>
      <div class="d-flex justify-content-center">
        <RouterLink class="text-white text-decoration-none" to="/" v-if="userStore.user">Home</RouterLink>
        <RouterLink class="text-white text-decoration-none" to="/login-register" v-if="!userStore.user">Conectarse</RouterLink>
      </div>
      <div v-if="userStore.user">
        <span class="mr-2">Bienvenido, <strong>{{ userStore.user.name }}</strong></span>
        <v-icon color="cyan" title="Cerrar sesión" @click="cerrarSesion()" size="small">fa-solid fa-right-from-bracket</v-icon> 
      </div>
    </nav>
    <LoadingModal
      v-model="userStore.dialogLoading"
    />

    <SnackBarModal
      v-model="userStore.snackBar.activo"
      :color="userStore.snackBar.color"
      :mensaje="userStore.snackBar.message"
    />

    <main class="container">
      <RouterView></RouterView>
    </main>
    
  </div>
</template>

<script setup>
  import { useUserStore } from './stores/user';
  import { RouterLink } from 'vue-router';
  import { useRouter, useRoute } from 'vue-router';
  import LoadingModal from './components/generales/LoadingModal.vue';
  import SnackBarModal from './components/generales/SnackBarModal.vue';
  
  const userStore = useUserStore();
  const router    = useRouter();
  const route     = useRoute();

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
