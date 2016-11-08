Vue.component('user-forms', {
  data: function(){
    return {
      complete: false
    };
  },
  props: ['users'],
  template: `<div class="user-forms" v-bind:class="{ success: complete }">
  <user-edit v-for="user in users" :user="user"></user-edit>
  <button @click="submit">save all</button>
  </div>`,
  methods: {
    submit: function () {
      var that = this;
      this.users.forEach( function(item) {
        that.sendItem(item);
      });
    },
    sequalize: function (item) {
      return {
        "name": item.name,
        "email": item.email,
        "admin": item.admin
      };
    },
    sendItem: function (item) {
      this.$http.put('/users/' + item.id + '.json', this.sequalize(item))
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
  }
});
