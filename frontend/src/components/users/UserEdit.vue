<template>
  <div class="user-edit" v-bind:class="{ success: complete }">
    Name: <input v-model="user.name"></input><br>
    E-Mail: <input type="email" v-model="user.email"></input><br>
    Admin : <input type="checkbox" v-model="user.admin"></input><br>
    <button @click="submit">save {{firstName(user.name)}}</button>
  </div>
</template>

<script>
let emailregex = /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i

export default {
  name: 'user-edit',
  data: function () {
    return {
      complete: false
    }
  },
  props: ['user'],
  methods: {
    submit: function () {
      if (!this.user.email.match(emailregex)) {
        this.setErrorMsg('E-Mail falsches Format')
        return
      }
      let data = {
        'name': this.user.name,
        'email': this.user.email,
        'admin': this.user.admin
      }
      this.$http.put('/users/' + this.user.id + '.json', data)
        .then(
          function (response) { this.success(response) },
          function (response) { this.setErrorMsg(response) }
      )
    },
    success: function (response) {
      this.complete = true
      this.setErrorMsg(null)
      setTimeout(() => { this.complete = false }, 400)
    },
    setErrorMsg: function (error) {
      this.$parent.setErrorMsg(error)
    },
    firstName: function (name) {
      return name.split(' ')[0]
    }
  }
}
</script>

<style lang="scss">
  .user-edit {
    padding: 10px;
    padding-bottom: 20px;

    button {
      float: right;
    }

    &:after {
      display: block;
      content: '';
      clear: both;
    }
  }
</style>
