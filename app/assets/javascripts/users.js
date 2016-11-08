// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

Vue.component('user-form', {
  data: function(){
    return {
      complete: false
    };
  },
  props: ['user'],
  template:
    `<div class="user-form" v-bind:class="{ success: complete }">
      Name: <input v-model="user.name"></input><br>
      E-Mail: <input v-model="user.email"></input><br>
      Admin : <input type="checkbox" v-model="user.admin"></input><br>
      <button @click="submit">save</button>
    </div>`,
  methods: {
    submit: function () {
      var that = this;
      data = {
        "name": this.user.name,
        "email": this.user.email,
        "admin": this.user.admin
      }
      this.$http.put('/users/' + this.user.id + '.json', data)
        .then(
          function(response) { this.success(response) },
          function(response) { this.error(response) }
      );
    },
    success: function (response) {
      this.saveSuccess();
      setTimeout(this.resetSuccess, 400);
    },
    error: function (error) {
      this.$emit("errorCallback", error)
    },
    saveSuccess: function (){
      this.complete = true;
    },
    resetSuccess: function (){
      this.complete = false;
    }
  },
});

Vue.component('user-display', {
  props: ['user'],
  template:
    `<li>{{user.name}}, {{user.email}}{{user.admin ? ", Admin" : ""}}
    </li>`
});

var usersViewModel = new Vue({
  el: '#users',

  data: {
    success: false,
    users: null
  },
  created: function () {
    this.fetchData()
  },

  methods: {
    fetchData: function () {
      this.$http.get('/users.json')
        .then(
          function(response) { this.successCallback(response) },
          function(error) { this.errorCallback(error) }
        );
    },
    successCallback: function (response) {
      this.users = response.body;
    },
    errorCallback: function (error){
      console.log(error);
    },
    saveSuccess: function (){
      this.success = true;
    },
    resetSuccess: function (){
      this.success = false;
    }
  }
})
