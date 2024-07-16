import { defineStore } from 'pinia'

export const useTestStore = defineStore('test', {
  state: () => {
    return {
      count: 0,
    }
  },
  actions: {
    increment() {
      this.count++
    },
  },
})
