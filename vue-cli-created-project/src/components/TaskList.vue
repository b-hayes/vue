<template>
    <div class="task-list" v-for="task in tasks" :key="task.id">
        <TaskItem :task="task" @delete-task="$emit('delete-task', task.id)"/>
    </div>
</template>

<script>
import TaskItem from "@/components/TaskItem";

export default {
    name: "TaskList",
    components: {TaskItem},
    props: {
        tasks: Array
    },
    emits: ['delete-task']
}
</script>

<style scoped>
.task-list {

}
</style>
