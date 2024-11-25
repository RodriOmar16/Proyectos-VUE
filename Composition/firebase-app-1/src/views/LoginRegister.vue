<template>
  <form @submit.prevent="!login ? submit() : iniciarSesion()" class="ma-4 py-8 px-6 card d-flex justify-content-center">
    <v-row class="">
      <v-col cols="12" class="">
        <div class="d-flex justify-content-between">
          <h2>{{ login ?  'Iniciar sesion' : 'Registrarse' }}</h2>
          <v-switch
            v-model="login"
            :label="!login ? 'Iniciar sesion' : 'Registrarse'"
            hide-details
          ></v-switch>
        </div>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1"  v-if="!login">
        Nombre de Usuario
        <v-text-field
          v-model="username"
          :error="errorName"
          density="compact"
          variant="outlined"
          hide-details
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1" v-if="!login">
        DNI
        <v-text-field
          v-model="userdni"
          type="number"
          :error="errorDni"
          density="compact"
          variant="outlined"
          hide-details
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        Email
        <v-text-field
          v-model="useremail"
          :error="errorEmail"
          type="email"
          density="compact"
          variant="outlined"
          hide-details
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1">
        Contraseña
        <v-text-field
          v-model="userpass"
          :error="errorPassword"
          type="password"
          density="compact"
          variant="outlined"
          hide-details
          clearable
        ></v-text-field>
      </v-col>
      <v-col cols="12" sm="6" md="6" class="py-1"  v-if="!login">
        Telefono
        <v-text-field
          v-model="userphone"
          type="number"
          :error="errorPhone"
          density="compact"
          variant="outlined"
          hide-details
          clearable
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

        <v-btn @click="limpiar()" color="secondary"  v-if="!login" >
          Limpiar
        </v-btn>
      </v-col>
    </v-row>
    <div class="alert alert-danger d-flex align-items-center mt-2" v-if="!userStore.user && userStore.msjError">
      <v-icon class="me-2" >fa-solid fa-triangle-exclamation</v-icon>
      <div>
        {{ userStore.msjError }}
      </div>
    </div>
    {{ userStore.user }}
  </form>
</template>

<script setup>
// imports
  import { ref, watch } from 'vue';
  import { useUserStore } from '../stores/user';
  import { useRoute, useRouter } from 'vue-router';

// data
  const username  = ref('');  const errorName     = ref(false);
  const userpass  = ref('');  const errorEmail    = ref(false);
  const userphone = ref('');  const errorPhone    = ref(false);
  const useremail = ref('');  const errorPassword = ref(false);
  const userdni   = ref('');  const errorDni      = ref(false);
  const login     = ref(false);  
  const router    = useRouter();  
  const userStore = useUserStore();
  userStore.msjError = '';

//methods
  const validarCampos = () =>{
    errorPassword.value = !userpass.value
    errorEmail.value    = !useremail.value
    if(!login.value){
      errorPhone.value = !userphone.value
      errorName.value  = !username.value
      errorDni.value   = !userdni.value
      return (!errorPassword.value || !errorEmail.value || !errorPhone.value || !errorName.value || !errorDni.value )
    }
    return ( !errorPassword.value || !errorEmail.value ); 
  };
  const limpiar = () =>  {
    username.value  = '';
    useremail.value = '';
    userphone.value = '';
    userpass.value  = '';
    userdni.value   = '';
  };
  const submit = async () => {
    let validar = validarCampos();
    if(!validar){
      userStore.msjError = 'Rellenar campos.'
      return
    }
    await userStore.registerUser(useremail.value, userpass.value, username.value, userdni.value, userphone.value);
    limpiar();
    if(!userStore.msjError){
      router.push('/');
      return
    }else console.log("fue al no: ", userStore.msjError)
  };
  const iniciarSesion = async () => {
    let validar = validarCampos();
    if(!validar){
      userStore.msjError = 'Rellenar campos.'
      return
    }
    await userStore.loginUser(useremail.value, userpass.value);
    limpiar();
    if(!userStore.msjError){
      router.push('/');
      return
    }else console.log("fue al no: ", userStore.msjError)
  };
//watch
  watch(
    login,
    (loginNew, loginOld) => {
      if(loginNew != loginOld){
        userStore.msjError  = '';
        errorName.value     = false;
        errorDni.value      = false;
        errorEmail.value    = false;
        errorPassword.value = false;
        errorPhone.value    = false;
      }
    },
    { immediate: true }
  );

</script>