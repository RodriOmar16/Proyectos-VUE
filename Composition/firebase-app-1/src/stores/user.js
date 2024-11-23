import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      username: 'RodriOmar16'
    }
  },
  getters:{
    minuscula(state){
      return state.username.toLowerCase();
    }
  },
  actions: {
    register(name){
      this.username = name;
    }
  },
})