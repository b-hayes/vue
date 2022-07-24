<template>
  <div class="task-row" :class="task.severity">
    <div v-if="task.severity" :class="task.severity" class="marker">
    </div>
    <i class="fa fa-check"/>
    <input type="text" :value="task.text" disabled>
    <i class="fa fa-bars"/>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  components: {},

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
.task-row.urgent{
  border-left: 0.5em solid red;
}
.marker.urgent {
  display: none; /* not sure if I want this, hidden for now */
  background-color: red;
  width: 1em;
  height: 1em;
  transform: rotate(45deg);
  margin: auto 1em auto -1em;
}
i {
  margin: auto 0;
}
</style>
