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
    getMetadata (state, ctid) {
      let params = Vue.prototype.api.getParam('sydata3', {ctid: ctid}, {paging:true,pageNow:"1",order:"lpid",sort:"desc"})
      Vue.prototype.api.postData(Vue.prototype, params).then((data) => {
        if (data.code === 0) {
         state.metadata = data.data
        } else {

        }
      }).catch((code) => {

      })
    }
  },
  actions: {
    getMetadata({commit}, ctid) {
      commit('getMetadata', ctid)
    }
  }
})
export default store