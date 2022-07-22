<template>
  <!--  <button :style="`background-color: ${color}`"> NOTE: this works but so does the method below.
   see: https://vuejs.org/guide/essentials/class-and-style.html
   -->
  <button :style="{backgroundColor: color}">
    <span  :style="{color: color}">
      <slot>Click Me!</slot>
    </span>
  </button>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Button",
  props: {
    color: {
      type: String,
      default: 'black'
    },
    size: {
      type: String,
      default: 'large'
    }
  }
}
</script>

<style scoped>
  button {
    font-size: large;
    /*font-weight: bold;*/
    padding: 0.5em 1em;
    border: 2px;
    border-style: solid;
    border-color: rgba(255,255,255, 0.5) rgba(0,0,0, 0.1) rgba(0,0,0, 0.1) rgba(255,255,255, 0.5);
    border-radius: 0.5em;
  }
  button:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.3);
  }
  button:active {
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3);
  }
  span {
    filter: grayscale(100%) contrast(10000%) invert(1);
  }
</style>
