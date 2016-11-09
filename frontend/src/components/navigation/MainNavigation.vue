<template>
  <div class="main-navigation">
    <h1>POC vue + rails</h1>
    <ul>
      <navigation-item v-for="link in links" :link="link"></navigation-item>
    </ul>
  </div>
</template>

<script>
import NavigationItem from './NavigationItem.vue'

export default {
  name: 'main-navigation',

  components: {
    NavigationItem
  },

  data: function () {
    return {
      links: [
        {
          route: Routes.root_path(),
          name: 'home'
        },
        {
          route: Routes.users_path(),
          name: 'users'
        }
      ]
    }
  },

  created: function () {
  },

  methods: {
  }
}
</script>

<style lang="scss">
.main-navigation {
  padding: 10px;
  background-color: #cdefff;

  h1 {
    float: left;
  }

  ul {
    padding-top: 10px;
    float: left;

    li {
      width: 120px;
      display: block;
      float: left;
    }
  }

  &:after {
    content: '';
    display: block;
    clear: both;
  }
}
</style>
