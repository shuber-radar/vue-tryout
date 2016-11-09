<template>
  <div class="user-overview">
    <ul>
      <user-display v-for="user in users" :user="user"></user-display>
    </ul>
  </div>
</template>

<script>
import UserDisplay from './UserDisplay.vue'

export default {
  name: 'user-overview',
  components: {
    UserDisplay
  },
  props: ['users']
}
</script>

<style lang="scss">
  .user-overview {
    float: right;
    padding-right: 50px;
  }
</style>
