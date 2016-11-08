// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//= require users/user-forms.js
//= require users/user-edit.js
//= require users/user-display.js

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
