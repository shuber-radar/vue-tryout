<template>
  <div class="user-forms" v-bind:class="{ success: completed }">
    <user-edit v-for="user in users" :user="user"></user-edit>
    <button @click="submit">save all</button>
  </div>
</template>

<script>
import UserEdit from './UserEdit.vue'

export default {
  name: 'user-forms',
  components: {
    UserEdit
  },
  data: () => {
    return {
      completed: false
    }
  },
  props: ['users'],
  methods: {
    submit: function () {
      var that = this
      this.users.forEach((item) => {
        that.sendItem(item)
      })
    },
    sequalize: function (item) {
      return {
        'name': item.name,
        'email': item.email,
        'admin': item.admin
      }
    },
    sendItem: function (item) {
      this.$http.put('/users/' + item.id + '.json', this.sequalize(item))
        .then(
          (response) => { this.success(response) },
          (response) => { this.setErrorMsg(response) }
      )
    },
    success: function (response) {
      this.saveSuccess()
      setTimeout(this.resetSuccess, 400)
    },
    setErrorMsg: function (error) {
      this.$parent.setErrorMsg(error)
    },
    saveSuccess: function () {
      this.completed = true
    },
    resetSuccess: function () {
      this.completed = false
    }
  }
}
</script>

<style lang="scss">
.user-forms {
  width: 250px;
  padding: 10px;

  & > button {
    float: right;
    margin-right: 10px;
  }
}
</style>
