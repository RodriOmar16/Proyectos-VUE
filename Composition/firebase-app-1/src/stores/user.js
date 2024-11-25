import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut } from "firebase/auth";
import { auth } from '../firebaseConfig';

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      username: 'RodriOmar16',
      user: null,
      msjError: '',
      conectado: false,
      dialogSnackBar: false,
    }
  },
  getters:{
    minuscula(state){
      return state.username.toLowerCase();
    }
  },
  actions: {
    async registerUser(email, pass, name, dni, telefono){
      try {
        const userPeticion = await createUserWithEmailAndPassword(auth, email, pass);
        if(userPeticion){
          this.msjError = '';
          this.user = {
            id: userPeticion.user.uid,
            name: name,
            email: email,
            password: pass,
            dni: dni,
            telefono: telefono
          };
          try {
            const res = await updateProfile(auth.currentUser, { displayName: name })
          } catch (error) {
            console.log("Error: ", error)
          }
        }
      } catch (error) {
        console.log("Error: ", error)
        this.msjError = error.message == 'Firebase: Error (auth/email-already-in-use).' ? 'El usuario ingresado ya existe en el sistema.' : error.message;
      }
    },
    async loginUser(email, pass){
      this.dialogSnackBar = true;
      try {
        const res = await signInWithEmailAndPassword(auth, email, pass)
        if(res){
          this.msjError = '';
          this.user = {
            id: res.user.uid,
            name: res.user.displayName,
            email: email,
            password: pass,
          }
        }
      } catch (error) {
        console.log("Error: ", error)
        this.msjError = error.message == 'Firebase: Error (auth/invalid-credential).' ? 'El usuario o la contraseña no válidos.' : error.message;
      } finally {
        this.dialogSnackBar = false;
      }
    },
    async logout() {
      try {
        console.log("logout llegooo")
        const res = await signOut(auth);
        this.user      = null;
        this.msjError  = '';
        this.conectado = false;
      } catch (error) {
        console.log("Error: ", error)
        this.msjError = error.message
      }
    }
  },
})