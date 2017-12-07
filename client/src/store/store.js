import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import router from '@/router/index'
import jwt from 'jsonwebtoken'
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
  },
  newPost(state, payload) {
    state.posts.push(payload)
  },
  removePost(state, payload) {
    let indexPost = state.posts.findIndex((post) => post._id === payload._id)
    state.posts.splice(indexPost, 1)
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
  },
  createNewPost({ commit }, dataPost) {
    //console.log(dataPost.image_url) file dapet
    let user = jwt.decode(localStorage.getItem('token')).username
    http.post('/api/posts', {
      username: user,
      caption: dataPost.caption,
      image_url: dataPost.image_url
    })
      .then((dataPost) => {
        commit('newPost', dataPost.data)
      })
      .catch((reason) => {
        console.log(reason)
      })
  },
  deleteDataPost({ commit }, id) {
    // console.log("Ini action yooooo",id)
    http.delete(`/api/posts/${id}`)
      .then((dataPost) => {
        commit('removePost', dataPost.data)
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
