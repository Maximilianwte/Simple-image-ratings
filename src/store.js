import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    signin: false,
    key: null,
  },
  mutations: {
    setSignin(state, payload) {
      state.signin = payload;
    },
    setKey(state, payload) {
      state.key = payload;
    }
  },
})
