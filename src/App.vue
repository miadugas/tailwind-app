<template>
  <component :is="layout">
    <router-view />
  </component>
</template>

<script lang="ts">
export default {
  computed: {
    layout() {
      return this.$route.meta.layout
    },
  },
}
</script>

<style scoped>
.router-link-exact-active {
  color: #4005b4;
  font-weight: bolder;
}

</style>