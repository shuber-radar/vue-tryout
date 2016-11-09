<template>
  <div id="users">
    <h1>Users</h1>
    <div v-bind:class="{ success: success }">
      <user-overview :users="users"></user-overview>
      <user-forms :users="users"></user-forms>
    </div>
    <div v-if="errormsg">
      {{errormsg}}
    </div>
  </div>
</template>

<script>
import UserForms from './UserForms.vue'
import UserOverview from './UserOverview.vue'

export default {
  name: 'users',
  components: {
    UserForms,
    UserOverview
  },
  data () {
    return {
      success: false,
      users: null,
      errormsg: null
    }
  },
  created () {
    this.fetchData()
  },

  methods: {
    fetchData () {
      this.$http.get('/users.json')
        .then(
          function (response) { this.successCallback(response) },
          function (error) { this.setErrorMsg(error) }
        )
    },
    successCallback (response) {
      this.users = response.body
    },
    setErrorMsg: function (error) {
      this.errormsg = error
    },
    saveSuccess () {
      this.success = true
    },
    resetSuccess () {
      this.success = false
    }
  }
}
</script>

<style lang="scss">
#users {
  height: 100%;
  width: 100%;

  .success {
    animation-name: fade-out;
    animation-duration: 0.4s;
  }

  @keyframes fade-out {
      0% {
        background-color: #FFF;
      }
      20% {
        background-color: #5C5;
      }
      100% {
        background-color: #FFF;
      }
  }
}
</style>
