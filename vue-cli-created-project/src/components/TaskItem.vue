<template>
  <div class="task-row" :class="task.severity">
    <div v-if="task.severity" :class="task.severity" class="marker">
    </div>
    <i class="fa fa-check" @click="completeTask()"/>
    <input type="text" :value="task.text" disabled>
    <i class="fa fa-times" @click="deleteTask()"/>
  </div>
</template>

<script>
export default {
  name: "TaskItem",
  components: {},
  props: {
    task: Object
  },
  methods: {
    completeTask() {
      console.log('complete-task with id: ' + this.task.id)
      this.$emit('complete-task', this.task.id)
    },
    deleteTask() {
      console.log('delete-task with id: ' + this.task.id)
      this.$emit('delete-task', this.task.id)
    }
  }
}
</script>

<style scoped>
input {
  flex-grow: 1;
}
input:disabled {
  border-color: rgba(0,0,0,0);
  background-color: unset;
  color: unset;
}
input:disabled:hover{
  box-shadow: none;
}
.task-row.urgent{
  border-left: 0.5em solid red;
}
.marker.urgent {
  background-color: red;
  width: 1em;
  height: 1em;
  transform: rotate(45deg);
  margin: auto 1em auto -1em;
}
i {
  margin: auto 0;
}
.fa-times {
  color: red;
}
</style>
