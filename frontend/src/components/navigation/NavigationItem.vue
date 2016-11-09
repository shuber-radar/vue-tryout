<template>
  <li>
    <a :href="link.route">{{link.name}}</a>
  </li>
</template>

<script>
export default {
  name: 'navigation-link',
  props: ['link']
}
</script>

<style lang="scss">

</style>
