import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        clickedColor: null,
        winColor: null,
        difficultyAmmount: 3,
        hasWon: null

    },
    actions: {
        newGame({commit}){
            commit('startNewGame');
        },
        changeDifficulty({commit}, newDifficulty){
            commit('changeDifficulty', newDifficulty);
        },
        colorClicked({commit}, square){
            commit('colorClicked', square);
        },
        winColorSelected({commit}, winColor){
            commit('winColorSelected', winColor);
        },
        hasWon({commit}, hasWon){
            commit('hasWon', hasWon)
        },
    },
    mutations: {
        changeDifficulty(state, newDifficulty){
            state.difficultyAmmount = newDifficulty;
        },
        startNewGame(state){
            state.winColor = null;
            state.clickedColor = null;
            state.hasWon = null;
        },

        hasWon(state, hasWon){
            state.hasWon = hasWon;
        },
        colorClicked(state,square){
            state.clickedColor = square.color;

        },
        winColorSelected(state, winColor){
            state.winColor = winColor;
        }
    },  
})