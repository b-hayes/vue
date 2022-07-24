<template>
  <app-header/>
  <div class="container">
    <TextInput/>
    <Button text="✚ Add Task"></Button>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";

export default {
  name: 'App',
  data() {
    return {
      'title': 'Hello world!'
    }
  },
  components: {
    TextInput,
    AppHeader,
    Button
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
input:focus, textarea:focus, button:focus, input:hover, textarea:hover, button:hover {
  outline: none;
  box-shadow: -1px 0 3px cornflowerblue, 0 1px 3px cornflowerblue, 1px 0 3px cornflowerblue, 0 -1px 3px cornflowerblue;
}
#app {
  width: 100vw;
}
.container {
  width: 100%
}
</style>
