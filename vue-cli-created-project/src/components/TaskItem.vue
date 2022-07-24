<template>
  <div class="task-row">
    <Button color="darkseagreen" text="">
      <i class="fa fa-check"/>
    </Button>
    <input type="text" :value="task.text" disabled>
    <Button text="" color="lightgrey">
      <i class="fa fa-bars"/>
    </Button>
  </div>
</template>

<script>

import Button from "@/components/Button";
export default {
  name: "TaskItem",
  components: {Button},

  props: {
    task: Object
  }
}
</script>

<style scoped>
input {
  flex-grow: 1;
}
input:disabled {
  border-color: rgba(0,0,0,0);
}
input:disabled:hover{
  box-shadow: none;
}
button {
  max-width: 2.8em;
  background-color: unset;
  border: none;
}
</style>
