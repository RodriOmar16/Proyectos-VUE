<template>
  <v-dialog v-model="loading" width="500" :persistent="loading"> 
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
  name:'LoadingModal',
  props:{
    value: Boolean, 
    mensaje: {
      type: String,
      default: 'Por favor espere...'
    },
    color:{
      type: String,
      default: 'info'
    }
  },
  computed:{
    loading:{
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
    loading: function(val){
      this.activar = val
    }
  }
}
</script>