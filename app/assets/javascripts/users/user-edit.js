Vue.component('user-edit', {
  data: function(){
    return {
      complete: false
    };
  },
  props: ['user'],
  template:
    `<div class="user-edit" v-bind:class="{ success: complete }">
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
