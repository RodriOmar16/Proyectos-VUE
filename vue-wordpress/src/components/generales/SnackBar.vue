<template>
  <v-snackbar
    v-model="snackbar"
    multi-line
    :color="color"
    class="ma-0 pa-0"
  >
    <v-row>
      <v-col cols="11">
        <span>{{ mensaje }}</span>
      </v-col>
      <v-col cols="1" class="d-flex justify-end">
        <v-btn
          icon small
          @click="snackbar = false"
          class="pb-2"
        >
          <v-icon>fa-solid fa-circle-xmark</v-icon>
        </v-btn>
      </v-col>
    </v-row>
  </v-snackbar>
</template>

<script>
export default {
  name:'SnackBar',
  props:{
    value: Boolean,
    datos:{
      type: Object,
      default:{
        activo: false,
        mensaje: '',
        color: 'info',
      }
    }
  },
  computed:{
    snackbar:{
      get(){
        return this.datos.activo;
      },
      set(value){
        this.$emit('input', value)
      }
    },
    mensaje: {
      get(){
        return this.datos.mensaje;
      },
    },
    color: {
      get(){
        return this.datos.color;
      },
    }
  },
  data(){
    return{

    }
  },
  watch:{
  }
}
</script>