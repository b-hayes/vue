<template>
  <div class="container" style="background-color: grey">
    <app-header title="Task Tracker"/>
    <Button color="magenta">This is a Button</Button>
    <Button color="green">This is a Button</Button>
    <Button color="orange">This is a Button</Button>
    <Button color="blue">This is a Button</Button>
    <Button color="red">This is a Button</Button>
    <Button color="yellow">This is a Button</Button>
    <Button color="lightgreen">This is a Button</Button>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Button from "@/components/Button";

export default {
  name: 'App',
  data() {
    return {
      'title': 'Hello world!'
    }
  },
  components: {
    AppHeader,
    Button
  }
}
</script>

<style>
#app {
  box-sizing: border-box;
  display: flex;
  justify-content: center;
}
</style>
