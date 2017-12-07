<template>
<div class="container text-center">
<form>
  <div class="form-group">
    <label for="username">Username: </label>
    <input type="text" class="form-control" v-model="dataUser.username">
  </div>
  <div class="form-group">
    <label for="username">Password: </label>
    <input type="password" class="form-control" v-model="dataUser.password">
  </div>
 
  <button type="button" class="btn btn-default" @click="login">Submit</button>
</form>

</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
  export default {
    name:'Signin',
    data: function () {
      return {
        dataUser: {
          name: '',
          password: ''
        }
      }
    },
    methods:{
      ...mapActions([
        'signin'
      ]),
      login () {
        this.signin(this.dataUser)
        }
      }
  }
</script>

<style>
</style>