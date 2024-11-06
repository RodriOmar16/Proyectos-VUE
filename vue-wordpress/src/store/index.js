import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: '',
    objSnackBar:{
      mensaje:   '',
      color:  '',
      activo: false
    }
  },
  getters: {
  },
  mutations: {
    setToken(state, payload){
      state.token = payload.token
    },
    setSnackBar(state, payload){
      state.objSnackBar.mensaje= payload.mensaje
      state.objSnackBar.color  = payload.color
      state.objSnackBar.activo = payload.activo
    }
  },
  actions: {
    setTokenAction({commit}, payload){      
      commit('setToken',payload)
    },
    setSnackBarAction({commit}, payload){      
      commit('setSnackBar',payload)
    } 
  },
  modules: {
  }
})
