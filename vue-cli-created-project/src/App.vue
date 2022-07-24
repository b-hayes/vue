<template>
  <app-header/>
  <div class="container">
    <TextInput/>
    <Button></Button>
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
#app {
  width: 100vw;
}
.container {
  width: 100%
}
</style>
