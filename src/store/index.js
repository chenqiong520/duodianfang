import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    metadata: {}
  },
  getter: {
    doneTodos: (state, getters) => {
      return state.todos.filter(todo => todo.done)
    }
  },
  mutations: {
    getMetadata (state) {
      Vue.prototype.$http.get().then((res) => {})
    }
  },
  actions: {
    getMetadata({commit}) {
      commit('getMetadata')
    }
  }
})
export default store