<template>
<div class="container text-center">
<form>
  <div class="form-group">
    <label for="name">Name:</label>
    <input type="text" class="form-control" v-model="dataUser.name">
  </div>
  <div class="form-group">
    <label for="username">Username: </label>
    <input type="text" class="form-control" v-model="dataUser.username">
  </div>
  <div class="form-group">
    <label for="username">Password: </label>
    <input type="password" class="form-control" v-model="dataUser.password">
  </div>
 
  <button type="button" class="btn btn-default" @click="register">Submit</button>
</form>

</div>
</template>

<script>
import { mapActions, mapState} from 'vuex'
  export default {
    data: function () {
      return {
        dataUser: {
          username: '',
          name: '',
          password: ''
        }
      }
    },
    methods:{
      ...mapActions([
        'signup'
      ]),
      register () {
        this.signup(this.dataUser)
        }
      }
  }
</script>

<style>
</style>