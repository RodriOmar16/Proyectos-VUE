<template>
  <form @submit.prevent="submit" class="ma-4 py-8 px-6 card d-flex justify-content-center">
    <v-row class="">
      <v-col cols="12" class=""><h2>Formulario de registro</h2></v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        Nombre de Usuario
        <v-text-field
          v-model="username"
          :error="errorName"
          density="comfortable"
          variant="outlined"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        DNI
        <v-text-field
          v-model="userdni"
          type="number"
          :error="errorDni"
          density="comfortable"
          variant="outlined"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        Email
        <v-text-field
          v-model="useremail"
          :error="errorEmail"
          type="email"
          density="comfortable"
          variant="outlined"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        Contraseña
        <v-text-field
          v-model="userpass"
          :error="errorPassword"
          density="comfortable"
          variant="outlined"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        Telefono
        <v-text-field
          v-model="userphone"
          type="number"
          :error="errorPhone"
          density="comfortable"
          variant="outlined"
          hide-details
        ></v-text-field>
      </v-col>
      <v-col cols="12" class="d-flex justify-content-center">
        <v-btn
          class="me-4"
          type="submit"
          color="primary"
        >
          Enviar
        </v-btn>

        <v-btn @click="limpiar()" color="secondary">
          Limpiar
        </v-btn>
      </v-col>
    </v-row>
  </form>
</template>

<script setup>
  import { ref } from 'vue';
  import { useUserStore } from '../stores/user';

  const username  = ref('');  const errorName     = ref(false);
  const userpass  = ref('');  const errorEmail    = ref(false);
  const userphone = ref('');  const errorPhone    = ref(false);
  const useremail = ref('');  const errorPassword = ref(false);
  const userdni   = ref('');  const errorDni      = ref(false);
  
  const userStore = useUserStore();
  

  const updateName = () => {
    //userStore.register('Cosme fulanito')
  }
  const validarCampos = () =>{
    errorName.value     = !username.value
    errorEmail.value    = !useremail.value
    errorPhone.value    = !userphone.value
    errorPassword.value = !userpass.value
    errorDni.value      = !userdni.value
    return (!errorName.value || !errorEmail.value || !errorPhone.value || !errorPassword.value || !errorDni.value)
  };
  const submit = async () => {
    let validar = validarCampos();
    if(!validar){
      return
    }
    await userStore.registerUser(useremail.value, userpass.value);
    limpiar();
  };
  const limpiar = () =>  {
    username.value = '';
    useremail.value = '';
    userphone.value = '';
    userpass.value = '';
    userdni.value = '';
  }


</script>