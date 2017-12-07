<template>
  <div class="hello">
  <div class="col-sm-2"> </div>
    <div class="col-sm-8 text-left"> 
      <div class="panel panel-default" v-for="(post, index) in posts" :key="index">
         <div class="panel-body">
         <img :src="post.image_url" />
         </div>
         <div class="panel-footer">
          {{post.caption}}
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
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    ...mapActions([
      'getAllDataPost'
    ])
  },
  created () {
    this.getAllDataPost()
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
