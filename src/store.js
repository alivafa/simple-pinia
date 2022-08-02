import {defineStore}from "pinia"

export const useStore = defineStore({
    id:"counter",
    state : () => ({
        count : 0
    }),

    actions:{
         sum(){
            this.count++
        },
       minus(){
           this.count--
        },
    },

    getters: {
        oddOreven: (state) => {
            if (state.count % 2 === 0) return 'even'
            return 'odd'
        }
    }
})

