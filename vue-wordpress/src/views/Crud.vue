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
            <v-btn icon small title="Eliminar" color="error" @click="eliminarConfirmar(item)">
              <v-icon small>fa-solid fa-trash</v-icon>
            </v-btn>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
    <ModalNvoEditar
      v-model="objModal.activo"
      :datos="objModal"
      @actualizar="controlarItem"
    />
    <ModalConfirmar
      v-model="activarConfimar"
      :text="textoConfirmar"
      :colorIcon="colorIconConfirmar"
      :icon="iconConfirmar"
      @confirmar="eliminarPost"
    />
  </div>
</template>

<script>
import moment from 'moment';
import ModalNvoEditar from '@/components/crud/ModalNvoEditar.vue';
import ModalConfirmar from '@/components/generales/ModalConfirmar.vue';

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
      },
      activarConfimar: false,
      textoConfirmar: '',
      colorIconConfirmar: '',
      iconConfirmar: '',
      obj: {},
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
        if(!this.$store.state.token){
          let datos = {
              "username": "webmaster",
              "password":  "mx@dqs8R3DC^srHiuz"
          }
          const resp = await fetch('http://localhost:80/vue-wordpress/wp-json/jwt-auth/v1/token',{
            method: 'POST',
            headers:{
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
          })
          this.$store.dispatch('setTokenAction', await resp.json());
        }
        this.load = false;
      } catch (error) {
        console.log(error);
      }
    },
    async nvoEditarPost(item){
      if(item){
        this.objModal.item = item;
        this.objModal.nuevo = false;
      }else{
        this.objModal.item = {
          title: null,
          content: null,
          date: new Date(),
          status: null
        }
        this.objModal.nuevo = true;
      }
      this.objModal.activo = true;
    },
    controlarItem(item){
      this.objModal.activo = false;
      let pos = this.entradas.map(e=>e.id).indexOf(item.id)
      if(pos == -1){
        this.entradas.push({
          id:      item.id,
          title:   item.title.rendered,
          content: this.limpiaEntrada(item.content.rendered),
          date:    item.date,
          status:  item.status,
        })
      }else{
        this.entradas[pos].title   = item.title.rendered;
        this.entradas[pos].content = this.limpiaEntrada(item.content.rendered);
      }
    },
    eliminarConfirmar(item){
      this.activarConfimar    = true;
      this.textoConfirmar     = 'Desea eliminar el post seleccionado?';
      this.colorIconConfirmar = 'warning';
      this.iconConfirmar      = 'fa-solid fa-circle-question';
      this.obj                = JSON.parse(JSON.stringify(item));
    },
    async eliminarPost(){
      try {
        this.activarConfimar = false;
        this.load = true;
        const res = await this.axios.delete(`wp/v2/posts/${this.obj.id}`,{
          headers:{
            'Authorization': 'Bearer'+this.$store.state.token
          }
        });
        this.load = false;
        
        let pos = this.entradas.map(e => e.id).indexOf(this.obj.id);
        if(pos != -1){
          this.entradas.splice(pos,1)
        }

        this.$store.state.objSnackBar.mensaje = 'Post eliminado correctamente.';
        this.$store.state.objSnackBar.color   = 'green';
        this.$store.state.objSnackBar.activo  = true;
      } catch (error) {
        this.$store.state.objSnackBar.mensaje = 'Ocurrió un error al intentar eliminar el post.';
        this.$store.state.objSnackBar.color   = 'red';
        this.$store.state.objSnackBar.activo  = true;
      }
    },
  },
  components:{
    ModalNvoEditar, ModalConfirmar
  }
}
</script>