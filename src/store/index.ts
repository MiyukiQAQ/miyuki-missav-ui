import { defineStore } from "pinia";

export const useMainStore = defineStore('main', {
    state: () => (
        {
            msg: 'hello world'
        }
    ),
    getters: {
        // double: (state) => state.count * 2,
    },
    actions: {
        // increment() {
        //     this.count++
        // },
    },
})