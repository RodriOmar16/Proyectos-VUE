<template>
  <div>
    <h1>CRUD</h1>
    <v-row class="px-4">
      <v-col cols="12">
        <v-data-table
          :headers="headers"
          :items="entradas"
          :search="search"
        >
          <template v-slot:top>
            <v-text-field
              class="px-4 py-1"
              v-model="search"
              label="Buscar...."
              hide-details
              outlined
              dense
            ></v-text-field>
          </template>
          <template v-slot:[`item.date`]="{item}">
            {{ moment(item.date).format('DD/MM/YYYY') }}
          </template>
          <template v-slot:[`item.acciones`]="{item}">
            <v-btn icon small title="Editar" color="primary">
              <v-icon small>fa-solid fa-pen</v-icon>
            </v-btn>
            <v-btn icon small title="Editar" color="error">
              <v-icon small>fa-solid fa-trash</v-icon>
            </v-btn>
          </template>

        </v-data-table>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import moment from 'moment';

export default{
  name: 'Crud',
  data(){
    return{
      moment: moment,
      search: '',
      entradas: [],
      headers:[
        { text: 'Id', value: 'id' },
        { text: 'Titulo', value: 'title' },
        { text: 'Contenido', value: 'content' },
        { text: 'Fecha', value: 'date' },
        { text: 'Estado', value: 'status' },
        { text: 'Acciones', value: 'acciones' }
      ]
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
        console.log("res: ", res);
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
      } catch (error) {
        console.log(error);
      }
    }
  }
}
</script>