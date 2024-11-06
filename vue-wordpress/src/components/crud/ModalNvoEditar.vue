<template>
  <v-dialog 
    v-model="activo"
    width="700"
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
          <v-col cols="12" sm="6" md="12" class="py-1">
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
          <!--<v-col cols="12" sm="6" md="4" class="py-1">
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
          </v-col>-->
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
      <v-card-actions class="d-flex justify-end">
        <v-btn color="secondary" @click="activo = false">Cancelar</v-btn>
        <v-btn color="success" @click="guardar()">
          <v-icon class="me-2">fa-solid fa-floppy-disk</v-icon>
          {{ nuevo ? 'Grabar' : 'Guardar' }}
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
import FechaPicker from '../generales/FechaPicker.vue';
import moment from 'moment';
import axios from 'axios';

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
    async guardar(){
      if(!this.filtro.title){
        this.$store.state.objSnackBar.mensaje = 'Es necesario ingresar un titulo.'
        this.$store.state.objSnackBar.color   = 'red';
        this.$store.state.objSnackBar.activo = true;
        return 
      }
      if(!this.filtro.content){
        this.$store.state.objSnackBar.mensaje = 'Es necesario ingresar un Contenido.'
        this.$store.state.objSnackBar.color   = 'red';
        this.$store.state.objSnackBar.activo = true;
        return 
      }
      this.load = true;
      let obj = {
        title:   this.filtro.title,
        content: this.filtro.content,
        status:  'publish'
      }
      try {
        let texto  = '';
        let res;
        if(this.nuevo){
          res = await this.axios.post('wp/v2/posts',obj,{
            headers:{
              'Authorization': 'Bearer'+this.$store.state.token
            }
          });
          texto  = 'El post se grabó con exito';
        }else{
          res = await this.axios.post(`wp/v2/posts/${this.datos.item.id}`,obj,{
            headers:{
              'Authorization': 'Bearer'+this.$store.state.token
            }
          });
          texto  = 'El post se editó con exito';
        }

        this.$store.state.objSnackBar.mensaje = texto
        this.$store.state.objSnackBar.color   = 'green';
        this.$store.state.objSnackBar.activo = true;

        this.$emit('actualizar', res.data)

      } catch (error) {
        this.$store.state.objSnackBar.mensaje = `Ocurrió un error al intentar ${this.nuevo ? 'grabar' : 'editar'} el post: `+error
        this.$store.state.objSnackBar.color   = 'red';
        this.$store.state.objSnackBar.activo = true;
        return
      }
      
      this.load = false;
    }
  },
  components:{
    FechaPicker
  },
  watch:{
    activo: function(val){
      if(val){
        this.filtro.title   = this.datos.item.title;
        this.filtro.content = this.datos.item.content;
        this.filtro.date    = moment(new Date(this.datos.item.date)).format('DD/MM/YYYY');
        this.filtro.status  = this.datos.item.status;
      }
    }
  }
}
</script>