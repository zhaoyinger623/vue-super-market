import {getBannerList, getHomeData} from "../service/home";

const home = {
  namespaced: true,
  state: {
    bannerList: [],
    recommendList: [],
    keywords: [],
    goodsList: {
      pop: {page: 1, list: []},
      new: {page: 1, list: []},
      sell: {page: 1, list: []}
    },
  },
  getters: {

  },
  mutations: {
    setBannerList(state, data){
      state.bannerList = data
    },
    setRecommendList(state, data){
      state.recommendList = data
    },
    setKeyWords(state, data){
      state.keywords = data
    },
    setGoodsList(state, {type, page, data}){
      if(type==='new'){
        state.goodsList.new.list.push(...data)
        state.goodsList.new.page = page
      }
      if(type==='pop'){
        state.goodsList.pop.list.push(...data)
        state.goodsList.pop.page = page
      }
      if(type==='sell'){
        state.goodsList.sell.list.push(...data)
        state.goodsList.sell.page = page
      }
    },
  },
  actions: {
    asyncFetchList({commit}){
      getBannerList().then((res)=>{
        const data = res.data
        commit('setBannerList', data.banner.list)
        commit('setRecommendList', data.recommend.list)
        commit('setKeyWords', data.keywords.list)
      })

    },
    asyncFetchData({commit}, payload){
      const {type, page} = payload
      getHomeData(type, page).then((res)=>{
        commit('setGoodsList', {type, page, data: res.data.list})
        // console.log(res.data.list)
      })
    }

  }

}
export default home