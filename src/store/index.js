import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
const store = new Vuex.Store({
  state: {
    metadata: {},
    cityAreaList: [],
    averagePriceList: [],
    totalPriceList: [],
    mjList:[]
  },
  mutations: {
    getMetadata (state, ctid) {
      let params = Vue.prototype.api.getParam('cm2')
      Vue.prototype.api.postData(Vue.prototype, params).then((data) => {
        if (data.code === 0) {
         state.metadata = data.data
        } else {

        }
      }).catch((data) => {

      })
    },
    getCityArea(state, ctid) {
      let params = Vue.prototype.api.getParam('qy3', {ctid: ctid})
      Vue.prototype.api.postData( Vue.prototype, params).then((res) => {
        if (res.code === 0) {
         state.cityAreaList = res.data
        } else {

        }
      }).catch((code) => {

      })
    },
    //根据城市ID查询均价
    getCityAverage (state, ctid) {
      let params = Vue.prototype.api.getParam('jg1', {ctid: ctid})
      Vue.prototype.api.postData(Vue.prototype, params).then((res) => {
        if (res.code === 0) {
          state.averagePriceList= res.data
        } else {

        }
      }).catch((code) => {

      })
    },
    //根据城市id获取总价
    getCityTotalPrice(state, ctid) {
      let params = Vue.prototype.api.getParam('zj1', {ctid: ctid})
      Vue.prototype.api.postData(Vue.prototype, params).then((res) => {
        if (res.code === 0) {
          state.totalPriceList= res.data
        } else {

        }
      }).catch((code) => {

      })
    },
    //根据城市id获取面积
    getCityMj(state, ctid) {
      let params = Vue.prototype.api.getParam('mj1', {ctid: ctid})
      Vue.prototype.api.postData(Vue.prototype, params).then((res) => {
        if (res.code === 0) {
          state.mjList= res.data
        } else {

        }
      }).catch((code) => {

      })
    },
  },
  actions: {
    getMetadata({commit}, ctid) {
      commit('getMetadata', ctid)
    },
    getCityArea({commit}, ctid) {
      commit('getCityArea', ctid)
    },
    getCityTotalPrice({commit}, ctid) {
      commit('getCityTotalPrice', ctid)
    },
    getCityAverage({commit}, ctid) {
      commit('getCityAverage', ctid)
    },
    getCityMj({commit}, ctid) {
      commit('getCityMj', ctid)
    }
  }
})
export default store
