<template>
  <div class="task-list" v-for="task in tasks" :key="task.id">
    <TaskItem :task="task"/>
  </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";
export default {
  name: "TaskList",
  components: {TaskItem},
  props: {
    tasks: Array
  }
}
</script>

<style scoped>
  .task-list {

  }
</style>
