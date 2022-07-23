<template>
  <div class="container" style="background-color: grey">
    <app-header/>
    <Button></Button>
    <Button color="lightgrey">large Button</Button>
    <Button color="magenta">large Button</Button>
    <Button color="green">large Button</Button>
    <Button color="orange">large Button</Button>
    <Button color="blue">large Button</Button>
    <Button color="red">large Button</Button>
    <Button color="yellow">large Button</Button>
    <Button color="lightgreen">large Button</Button>
    <Button color="purple">large Button</Button>
    <Button color="white">large Button</Button>
    <Button color="black">large Button</Button>
    <Button size="small">small Button</Button>
    <Button size="small" color="lightgrey">small Button</Button>
    <Button size="small" color="magenta">small Button</Button>
    <Button size="small" color="green">small Button</Button>
    <Button size="small" color="orange">small Button</Button>
    <Button size="small" color="blue">small Button</Button>
    <Button size="small" color="red">small Button</Button>
    <Button size="small" color="yellow">small Button</Button>
    <Button size="small" color="lightgreen">small Button</Button>
    <Button size="small" color="purple">small Button</Button>
    <Button size="small" color="white">small Button</Button>
    <Button size="small" color="black">small Button</Button>
    <Button size="medium">medium Button</Button>
    <Button size="medium" color="lightgrey">medium Button</Button>
    <Button size="medium" color="magenta">medium Button</Button>
    <Button size="medium" color="green">medium Button</Button>
    <Button size="medium" color="orange">medium Button</Button>
    <Button size="medium" color="blue">medium Button</Button>
    <Button size="medium" color="red">medium Button</Button>
    <Button size="medium" color="yellow">medium Button</Button>
    <Button size="medium" color="lightgreen">medium Button</Button>
    <Button size="medium" color="purple">medium Button</Button>
    <Button size="medium" color="white">medium Button</Button>
    <Button size="medium" color="black">medium Button</Button>
    <Button size="xx-large">xx-large Button</Button>
    <Button size="xx-large" color="lightgrey">xx-large Button</Button>
    <Button size="xx-large" color="magenta">xx-large Button</Button>
    <Button size="xx-large" color="green">xx-large Button</Button>
    <Button size="xx-large" color="orange">xx-large Button</Button>
    <Button size="xx-large" color="blue">xx-large Button</Button>
    <Button size="xx-large" color="red">xx-large Button</Button>
    <Button size="xx-large" color="yellow">xx-large Button</Button>
    <Button size="xx-large" color="lightgreen">xx-large Button</Button>
    <Button size="xx-large" color="purple">xx-large Button</Button>
    <Button size="xx-large" color="white">xx-large Button</Button>
    <Button size="xx-large" color="black">xx-large Button</Button>
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
.container {

}
</style>
