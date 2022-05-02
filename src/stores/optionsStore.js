import { defineStore } from 'pinia'

export const useOptionsStore = defineStore('optionsStore', {
    state: () => ({
        userName: "Not Set",
        responseStatus: "Not Responded",
        menuType: "Not Chosen",
        menuOptions: {}
    }),
    getters: {
        isUserGoing(state) {
            if(state.responseStatus === "Not Responded" || state.responseStatus === "no")
            return false
            else return true
        },
        getMenuType(state){
            return state.menuType
        },
        isUserEating(state) {
            if(state.menuType == "Not Chosen")
            return false
            else return true
        },
        getAcceptance(state){       
            return state.responseStatus
        },
        getMenuOptions(state){       
            return state.menuOptions
        },
        getName(state){       
            return state.userName
        }
    },
    actions: {
    updatedAcceptance(text) {
        this.responseStatus = text
    },
    updatedMenuType(text){
        this.menuType = text
    },
    updatedMenu(id, text) {
        this.menuOptions[id] = text
    },
    updatedName(text) {
        this.userName = text
    },
    }
})