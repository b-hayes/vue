<template>
  <header>
    <h1>📝 Todo List</h1>
  </header>
</template>

<script>
export default {
  name: "AppHeader"
}
</script>

<style scoped>
header {
  text-align: center;
  padding: 0.5em 2em;
  width: 100%;
  flex-shrink: 0;
  background: cornflowerblue;
  box-shadow: 0 0.1em 1em black;
  border-radius: 0 0 0.5em 0.5em;
  border-bottom: 2px solid rgba(0,0,0, 0.6);
  margin-bottom: 0.5em;
}
h1 {
  color: white;
  text-shadow: 1px 1px 2px black, 0 0 25px blue, 0 0 5px darkblue;
}
</style>
