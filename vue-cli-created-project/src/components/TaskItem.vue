<template>
    <div class="task-row" :class="[task.severity, task.complete ? 'complete' : '']">
        <div v-if="task.severity" :class="task.severity" class="marker">
        </div>
        <i class="fa fa-check" @click="$emit('complete-task', task.id)"/>
        <input type="text" :value="task.text" disabled>
        <i class="fa fa-times" @click="$emit('delete-task', task.id)"/>
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
    border-color: rgba(0, 0, 0, 0);
    background-color: unset;
    color: unset;
}

input:disabled:hover {
    box-shadow: none;
}

.task-row:hover {
    background-color: grey;
}
.task-row.urgent {
    border-left: 0.5em solid red;
}
.task-row.complete {
    filter: brightness(50%);
}
.task-row.complete input {
    text-decoration: line-through;
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
