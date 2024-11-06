<template>
  <v-dialog
    v-model="activo"
    width="600"
  >
    <v-card>
      <v-card-title>
        <span>Confirmar acción</span>
        <v-spacer></v-spacer>
        <v-btn icon title="Cerrar" @click="activo = false">
          <v-icon>fa-solid fa-circle-xmark</v-icon>
        </v-btn>
      </v-card-title>
      <v-divider class="pa-0 ma-0"></v-divider>
      <v-card-text>
        <v-row class="py-1">
          <v-col cols="12" class="d-flex justify-center py-1">
            <v-icon :color="colorIcon" x-large>{{ icon }}</v-icon>
          </v-col>
          <v-col cols="12" class="py-1">
            <div class="text-subtitle-1">{{ text }}</div>
          </v-col>
        </v-row>
      </v-card-text>
      <v-card-actions class="d-flex justify-end">
        <v-btn color="secondary" @click="activo = false">Cancelar</v-btn>
        <v-btn color="success" @click="aceptar()">Aceptar</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'ModalConfirmar',
  props:{
    value: Boolean,
    icon: String,
    colorIcon: String,
    text:  String
  },
  computed:{
    activo: {
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

    }
  },
  methods:{
    aceptar(){
      console.log("Aceptar")
      this.activo = false;
      this.$emit('confirmar')
    }
  }
}
</script>