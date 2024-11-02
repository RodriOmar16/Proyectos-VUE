<template>
  <div>
    <h1>CRUD</h1>
    <v-row class="px-4">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="entradas"
          :search="search"
          :loading="load"
        >
          <template v-slot:top>
            <v-row>
              <v-col cols="9">
                <v-text-field
                  class="px-4 py-1"
                  v-model="search"
                  label="Buscar...."
                  hide-details
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col cols="3" class="d-flex justify-end pe-8">
                <v-btn color="success" small fab @click="nvoEditarPost(null)">
                  <v-icon>fa-solid fa-plus</v-icon>
                </v-btn>
              </v-col>
            </v-row>
          </template>
          <template v-slot:[`item.date`]="{item}">
            {{ moment(item.date).format('DD/MM/YYYY') }}
          </template>
          <template v-slot:[`item.acciones`]="{item}">
            <v-btn icon small title="Editar" color="primary" @click="nvoEditarPost(item)">
              <v-icon small>fa-solid fa-pen</v-icon>
            </v-btn>
            <v-btn icon small title="Eliminar" color="error" @click="eliminarPost(item)">
              <v-icon small>fa-solid fa-trash</v-icon>
            </v-btn>
          </template>

        </v-data-table>
      </v-col>
    </v-row>
    <ModalNvoEditar
      v-model="objModal.activo"
      :datos="objModal"
    />
  </div>
</template>

<script>
import moment from 'moment';
import ModalNvoEditar from '@/components/crud/ModalNvoEditar.vue';

export default{
  name: 'Crud',
  data(){
    return{
      moment: moment,
      search: '',
      load: false,
      entradas: [],
      headers:[
        { text: 'Id', value: 'id' },
        { text: 'Titulo', value: 'title' },
        { text: 'Contenido', value: 'content' },
        { text: 'Fecha', value: 'date' },
        { text: 'Estado', value: 'status' },
        { text: 'Acciones', value: 'acciones' }
      ],
      objModal: {
        activo: false,
        nuevo: false,
        item:{
          title: null,
          content: null,
          date: null,
          status: null
        }
      }
    }
  },
  created(){
    this.getEntradas();
  },
  methods:{
    limpiaEntrada(value){
      return value.replace(/<\/?[^>]+(>|$)/g,"")
    },  
    async getEntradas(){
      try {
        const res = await this.axios.get('/wp/v2/posts');
        this.load = true;
        await res.data.forEach(e => {
          let item = {
            id:      e.id,
            title:   e.title.rendered,
            content: this.limpiaEntrada(e.content.rendered),
            date:    e.date,
            status:  e.status,
          }
          this.entradas.push(item);
        });
        this.load = false;
      } catch (error) {
        console.log(error);
      }
    },
    async nvoEditarPost(item){
      if(item){
        this.objModal.item = item;
        this.objModal.nuevo = false;
      }else this.objModal.nuevo = true;
      this.objModal.activo = true;
    },
    async eliminarPost(item){
      console.log("item borrar: ", item)
    },
  },
  components:{
    ModalNvoEditar
  }
}
</script>