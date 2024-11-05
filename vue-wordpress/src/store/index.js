import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    token: ''
  },
  getters: {
  },
  mutations: {
    setToken(state, payload){
      state.token = payload.token
    }
  },
  actions: {
    setTokenAction({commit}, payload){      
      commit('setToken',payload)
    } 
  },
  modules: {
  }
})
