import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'

Vue.use(Vuex)
const http = axios.create({
  baseURL: 'http://localhost:3000'
})


const state = {
  posts: []
}

const mutations = {
  setDataPost(state, payload) {
    state.posts = payload
  }
}

const actions = {
  signin({ commit }, dataUser) {
    http.post('/api/users/signin', {
      username: dataUser.username,
      password: dataUser.password
    })
      .then((dataUser) => {
        localStorage.setItem('token', dataUser.data.token)
        alert("Successfully login")
      })
      .catch((reason) => {
        console.log(reason)
      })
    router.push('/')
  },
  signup({ commit }, dataUser) {
    http.post('/api/users/signup', {
      name: dataUser.name,
      username: dataUser.username,
      password: dataUser.password
    }).then((dataUser) => {
      alert("Successfully registered! Please login first..")
    }).catch((reason) => {
      console.log(reason)
    })
    router.push('/signin')
  },
  getAllDataPost({ commit }) {
    http.get('/api/posts')
      .then((dataPosts) => {
        commit('setDataPost', dataPosts.data)
      })
      .catch((reason) => {
        console.log(reason)
      })
  }

}
const store = new Vuex.Store({
  state,
  mutations,
  actions
})

export default store
