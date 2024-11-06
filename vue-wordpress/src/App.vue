<template>
  <v-app>
    <v-main>
      <router-view/>
      <SnackBar
        v-model="$store.state.objSnackBar.activo"
        :datos="$store.state.objSnackBar"
      />
    </v-main>
  </v-app>
</template>

<script>
import SnackBar from './components/generales/SnackBar.vue';

export default {
  name: 'App',
  data(){
    return{}
  },
  components:{
    SnackBar
  }
};
</script>
