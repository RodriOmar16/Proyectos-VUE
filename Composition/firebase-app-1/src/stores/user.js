import { defineStore } from 'pinia'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebaseConfig';

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      username: 'RodriOmar16',
      user: null,
    }
  },
  getters:{
    minuscula(state){
      return state.username.toLowerCase();
    }
  },
  actions: {
    async registerUser(email, pass){
      try {
        const userPeticion = await createUserWithEmailAndPassword(auth, username, email, pass, dni, telefono);
        if(userPeticion){
          console.log("userPeticion: ", userPeticion)
          //this.user = userPeticion.user
          console.log("this.user: ", userPeticion.user)
          this.user = null;

        }
      } catch (error) {
        console.log("Error: ", error)
      }
    }
  },
})