import { defineStore } from 'pinia'

export const useUserStore = defineStore('user', {
  state: () => {
    return { 
      useData: 'Bluuweb@test.com'
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})