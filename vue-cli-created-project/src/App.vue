<template>
  <div class="container">
    <app-header/>
    <Button></Button>
    <Button color="grey" text="large Button"></Button>
    <Button color="magenta" text="large Button"></Button>
    <Button color="green" text="large Button"></Button>
    <Button color="orange" text="large Button"></Button>
    <Button color="blue" text="large Button"></Button>
    <Button color="red" text="large Button"></Button>
    <Button color="yellow" text="large Button"></Button>
    <Button color="lightgreen" text="large Button"></Button>
    <Button color="purple" text="large Button"></Button>
    <Button color="white" text="large Button"></Button>
    <Button color="black" text="large Button"></Button>
    <Button size="small" text="small Button"></Button>
    <Button size="small" color="grey" text="small Button"></Button>
    <Button size="small" color="magenta" text="small Button"></Button>
    <Button size="small" color="green" text="small Button"></Button>
    <Button size="small" color="orange" text="small Button"></Button>
    <Button size="small" color="blue" text="small Button"></Button>
    <Button size="small" color="red" text="small Button"></Button>
    <Button size="small" color="yellow" text="small Button"></Button>
    <Button size="small" color="lightgreen" text="small Button"></Button>
    <Button size="small" color="purple" text="small Button"></Button>
    <Button size="small" color="white" text="small Button"></Button>
    <Button size="small" color="black" text="small Button"></Button>
    <Button size="medium" text="medium Button"></Button>
    <Button size="medium" color="grey" text="medium Button"></Button>
    <Button size="medium" color="magenta" text="medium Button"></Button>
    <Button size="medium" color="green" text="medium Button"></Button>
    <Button size="medium" color="orange" text="medium Button"></Button>
    <Button size="medium" color="blue" text="medium Button"></Button>
    <Button size="medium" color="red" text="medium Button"></Button>
    <Button size="medium" color="yellow" text="medium Button"></Button>
    <Button size="medium" color="lightgreen" text="medium Button"></Button>
    <Button size="medium" color="purple" text="medium Button"></Button>
    <Button size="medium" color="white" text="medium Button"></Button>
    <Button size="medium" color="black" text="medium Button"></Button>
    <Button size="xx-large" text="xx-large Button"></Button>
    <Button size="xx-large" color="grey" text="xx-large Button"></Button>
    <Button size="xx-large" color="magenta" text="xx-large Button"></Button>
    <Button size="xx-large" color="green" text="xx-large Button"></Button>
    <Button size="xx-large" color="orange" text="xx-large Button"></Button>
    <Button size="xx-large" color="blue" text="xx-large Button"></Button>
    <Button size="xx-large" color="red" text="xx-large Button"></Button>
    <Button size="xx-large" color="yellow" text="xx-large Button"></Button>
    <Button size="xx-large" color="lightgreen" text="xx-large Button"></Button>
    <Button size="xx-large" color="purple" text="xx-large Button"></Button>
    <Button size="xx-large" color="white" text="xx-large Button"></Button>
    <Button size="xx-large" color="black" text="xx-large Button"></Button>
    <Button><img alt="Vue logo" src="./assets/logo.png"></Button>
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
* {
  box-sizing: border-box;
}
#app {
  display: flex;
  justify-content: center;
}
.container {

}
</style>
