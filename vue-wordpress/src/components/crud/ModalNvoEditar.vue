<template>
  <v-dialog 
    v-model="activo"
    width="800"
  >
    <v-card :loading="load">
      <v-card-title class="">
        <div style="font-size: 20px" v-text="nuevo ? 'Nuevo Post' : 'Editar Post N°: '+datos.item.id"></div>
        <v-spacer></v-spacer>
        <v-btn right icon @click="activo = false">
          <v-icon>fa-solid fa-circle-xmark</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider class="ma-0" :thickness="2"></v-divider>
      <v-card-text>
        <v-row>
          <v-col cols="12" sm="6" md="4" class="py-1">
            Título
            <v-text-field
              class="mt-2"
              v-model="filtro.title"
              hide-details
              outlined
              dense
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-1">
            Fecha
            <FechaPicker v-model="filtro.date"/>
          </v-col>
          <v-col cols="12" sm="6" md="4" class="py-1">
            Estado
            <v-text-field
              class="mt-2"
              v-model="filtro.status"
              hide-details
              outlined
              dense
              clearable
            ></v-text-field>
          </v-col>
          <v-col cols="12" class="py-1">
            Contenido
            <v-textarea
              class="mt-2"
              v-model="filtro.content"
              hide-details
              outlined
              dense
              clearable
            ></v-textarea>
          </v-col>
        </v-row>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import FechaPicker from '../FechaPicker.vue';
import moment from 'moment';

export default {
  name: 'ModalNvoEditar',
  props:{
    value: Boolean,
    datos:{
      type: Object,
      default: {}
    }
  },
  computed:{
    activo:{
      get(){
        return this.datos.activo;
      },
      set(value){
        this.$emit('input', value)
      }
    },
    nuevo:{
      get(){
        return this.datos.nuevo
      }
    }
  },
  data(){
    return{
      load: false,
      filtro:{
        title: null,
        content: null,
        date: null,
        status: null
      },
      fecha: '',
    }
  },
  methods:{
    //async init(){
      //console.log("datos: ", this.datos);
    //}
    
  },
  components:{
    FechaPicker
  },
  watch:{
    activo: function(val){
      if(val){
        if(this.datos.item.id){
          this.filtro.title   = this.datos.item.title;
          this.filtro.content = this.datos.item.content;
          this.filtro.date    = this.datos.item.date;//this.aplicarFormato();
          this.filtro.status  = this.datos.item.status;
        }
        //this.init();
      }else{
        this.filtro = {
          title: null,
          content: null,
          date: null,
          status: null
        }
      }
    }
  }
}
</script>