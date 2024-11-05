<template>
  <v-menu
    v-model="menu"
    :close-on-content-click="false" 
    transition="scale-transition"   
    offset-y                        
    max-width="290px"
    min-width="290px"
  >
    <template v-slot:activator="{ on, attrs }">
      <div class="d-flex">
        <v-text-field
          class="mt-2"
          v-model="fecha"
          hide-details
          outlined
          dense
          readonly
          filled
          clearable
        ></v-text-field>
        <v-btn  
          class="mt-1"
          color="primary"
          v-bind="attrs"
          v-on="on"
          title="Seleccionar Fecha"
          icon
        >
          <v-icon>fa-soli fa-calendar-days</v-icon>
        </v-btn>
      </div>

    </template>
    <v-date-picker 
      v-model="date"
      @input="menu = false"
      @change="formatearFecha()"
      :hide-header="true"
      bg-color="white"
    ></v-date-picker>
  </v-menu>
</template>

<script>
import moment from 'moment';

export default {
  name: 'FechaPicker',
  props:{
    value: String
  },
  computed:{
    fecha: {
      get(){
        return this.value;
      },
      set(value){
        this.$emit('input', value);
      }
    }
  },
  data(){
    return {
      moment: moment,
      menu: false,
      date: moment(new Date()).format('YYYY-MM-DD')
    }
  },
  created(){
    this.aplicarFormato();
  }, 
  methods:{
    formatearFecha(){
    },
    aplicarFormato(){
      if(this.fecha){
        let fechaArr = this.fecha.split('/')
        this.date = moment(new Date(fechaArr[2], fechaArr[1]-1, fechaArr[0])).format('YYYY-MM-DD')
      }else{
        this.fecha = moment(new Date()).format('DD/MM/YYYY');
      }
    }
  },
  watch:{
    menu: function(val){
      if(val){
        this.aplicarFormato();
      }
    },
    date: function(val){
      if(!val){
        this.fecha = null;
      }else {
        let dateArr = val.split('-');
        this.fecha = moment(new Date(dateArr[0], dateArr[1]-1, dateArr[2])).format('DD/MM/YYYY');
      }
    },
  }
}

</script>