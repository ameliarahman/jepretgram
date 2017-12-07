<template>
  <div class="hello">
  
  <div class="col-sm-2"> 
    <router-link to="/signin"> Signin</router-link>
     <router-link to="/signup"> Signup</router-link>
  </div>
    <div class="col-sm-8 text-left"> 
      <div class="panel panel-default" v-for="(post, index) in posts" :key="index">
         <div class="panel-body">
        <img :src="post.image_url" />
         </div>
         <div class="panel-footer">
          {{post.caption}}
          <h6>Posted by:  {{post.username}}</h6>
         </div>
        
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState} from 'vuex'
export default {
  name: 'HelloWorld',
  computed : {
    ...mapState([
      'posts'
    ])
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      token: false
    }
  },
  methods: {
    ...mapActions([
      'getAllDataPost'
    ])
  },
  created () {
    this.getAllDataPost()
    if(localStorage.getItem('token') !== null) {
      token = true
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
