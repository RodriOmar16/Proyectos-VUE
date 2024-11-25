<template>
  <v-dialog v-model="snackbar" width="500" :persistent="snackbar"> 
    <div class="bg-primary ma-3 pa-3">
      <span>{{ mensaje }}</span>
      <v-progress-linear
        :color="color"
        indeterminate
      ></v-progress-linear>
    </div>
  </v-dialog>
</template>

<script>
export default {
  name:'SnackBar',
  props:{
    value: Boolean, 
    mensaje: {
      type: String,
      default: 'Por favor espere...'
    },
    color:{
      type: String,
      default: 'primary'
    }
  },
  computed:{
    snackbar:{
      get(){
        return this.value;
      },
      set(value){
        this.$emit('input', value)
      }
    },
  },
  data(){
    return{
      activar: false,
    }
  },
  watch:{
    snackbar: function(val){
      this.activar = val
    }
  }
}
</script>