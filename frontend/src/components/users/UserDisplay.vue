<template>
  <li>
    {{user.name}}, {{user.email}}{{user.admin ? ", Admin" : ""}}
  </li>
</template>

<script>
export default {
  name: 'user-display',
  props: ['user']
}
</script>

<style lang="scss">

</style>
