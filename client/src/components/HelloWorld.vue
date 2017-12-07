<template>
  <div class="hello">
  <div class="add-post">
  <button type="button" class="btn btn-info" data-toggle="modal" data-target="#myModal">Add Post</button>

<!-- Modal -->
<div id="myModal" class="modal fade" role="dialog">
  <div class="modal-dialog">

    <!-- Modal content-->
    <div class="modal-content">
      <div class="modal-header">
        <button type="button" class="close" data-dismiss="modal">&times;</button>
        <h4 class="modal-title">Add Post</h4>
      </div>
      <div class="modal-body">
        <form enctype=multipart/form-data>
          <div class="form-group">
            <label for="name">Caption:</label>
            <input type="text" v-model="dataPost.caption" class="form-control">
          </div>
          <div class="form-group">
            <label for="username">image_url: </label>
            <input type="file" name="image_url" id="image_url" class="form-control" @change="onFileUpload">
          </div>
  
        <button type="button" class="btn btn-default" data-dismiss="modal" @click="uploadNewData">Submit</button>
      </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
      </div>
    </div>

  </div>
</div>
  </div>
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
          <div class="pull-right">
            <button type="button" class="btn btn-danger" @click="deletePost(post._id)">Delete</button>
            <button type="button" class="btn btn-info">Edit</button>
            <a type="button"> <span class="glyphicon glyphicon-thumbs-up"></span> </a>
          </div>
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
      token: false,
      dataPost: {
        caption: '',
        image_url:''
      }
    }
  },
  methods: {
    ...mapActions([
      'getAllDataPost',
      'createNewPost',
      'deleteDataPost'
    ]),
    uploadNewData () {
      // var image = new Image();
      // // var reader = new FileReader();
      // // var vm = this;

      // // reader.onload = (e) => {
      // //   vm.image = e.target.result;
      // // };
      // // reader.readAsDataURL(this.dataPost.image_url);
      this.createNewPost(this.dataPost)

    },
    onFileUpload(e) {
       var files = e.target.files || e.dataTransfer.files;
      if (!files.length)
        return;
        this.dataPost.image_url = files[0]
    },
    deletePost (id) {
     this.deleteDataPost(id)
    }
  },
  created () {
    this.getAllDataPost()
    if(localStorage.getItem('token') !== null) {
      this.token = true
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
