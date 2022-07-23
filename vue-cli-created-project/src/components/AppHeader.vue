<template>
  <header>
    <slot>Hello World!</slot>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
header {
  padding: 0.1em 2em;
  width: 100%;
  display: flex;
  background-color: cornflowerblue;
  justify-content: space-between;
}
</style>
