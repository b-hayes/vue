<template>
  <!--  <button :style="`background-color: ${color}`"> NOTE: this works but so does the method below.
   see: https://vuejs.org/guide/essentials/class-and-style.html
   -->
  <button :style="{backgroundColor: color, fontSize: size}">
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
      default: 'grey'
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
    margin: 0.1em;
    padding: 0.5em 1em;
    border: 0.1em solid;
    border-color: rgba(255,255,255, 0.5) rgba(0,0,0, 0.5) rgba(0,0,0, 0.5) rgba(255,255,255, 0.5);
    border-radius: 0.3em;
    /*box-shadow: 0.1em 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.3);*/
  }
  button:hover {
    box-shadow: inset 0 0 0 10em rgba(255, 255, 255, 0.1);
  }
  button:active {
    box-shadow: inset 0em 0em 0em 10em rgba(0, 0, 0, 0.3);
    border-color: rgba(0,0,0, 0.5) rgba(255,255,255, 0.5) rgba(255,255,255, 0.5) rgba(0,0,0, 0.5);
  }
  /* Span contains the button text */
  span {
    filter: grayscale(100%) contrast(100000%) invert(1);
  }
</style>
