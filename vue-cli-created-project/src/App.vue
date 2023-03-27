<template>
  <app-header/>
  <div class="container">
    <div class="task-row">
      <TextInput style="flex: 1"/>
      <Button text="Add"></Button>
    </div>
    <TaskList :tasks="tasks"/>
  </div>
</template>

<script>
import AppHeader from "@/components/AppHeader";
import Button from "@/components/Button";
import TextInput from "@/components/TextInput";
import TaskList from "@/components/TaskList";

export default {
  name: 'App',
  data() {
    return {
      'title': 'Hello world!',
      tasks: []
    }
  },
  created() {
    this.tasks = [
      {
        id: 0,
        text: 'Urgent Task',
        due: 'Tomorrow',
        severity: 'urgent'
      },
      {
        id: 1,
        text: 'Click some buttons',
        due: 'Tomorrow'
      },
      {
        id: 2,
        text: 'Create a fake server class with post/update/delete endpoints the simply return true/the same data that was entered.',
        due: 'Tomorrow'
      },
      {
        id: 2,
        text: 'Make the add button call fakeAPI.post and add a new task component into the list with the data returned.',
        due: 'Tomorrow'
      },
      {
        id: 3,
        text: 'Make the delete button call fakeAPI.delete and remove the component when it returns false.',
        due: 'Tomorrow'
      },
      {
        id: 4,
        text: 'Make the check button call fakeAPI.update and rule out the task',
        due: 'Tomorrow'
      },
      {
        id: 5,
        text: 'Fake a slow connection with fakeAPI and make the buttons disable with visual feedback until the fakeAPI finishes.',
        due: 'Tomorrow'
      },
      {
        id: 6,
        text: 'Make the fakeAPI throw errors and implement a handler to show error messages and re-enable the currently disabled buttons',
        due: 'Tomorrow'
      },
      {
        id: 7,
        text: 'Create a way to edit old items.',
        due: 'Tomorrow'
      },
    ]
  },
  components: {
    TaskList,
    TextInput,
    AppHeader,
    Button
  }
}
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
}
button {
  margin: 0.1em;
  padding: 0.5em 1em;
  border: 0.1em solid;
  border-color: rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.5) rgba(255, 255, 255, 0.5);
  border-radius: 0.3em;
}
input, textarea {
  margin: 0.1em;
  padding: 0.5em 1em;
  border: 0.1em inset;
  border-radius: 0.3em;
  border-color: rgba(0, 0, 0, 0.5) rgba(255, 255, 255, 0.5) rgba(255, 255, 255, 0.5) rgba(0, 0, 0, 0.5);
}
input:focus, textarea:focus, button:focus {
  border: solid cornflowerblue;
  outline: none;
}
input:hover, textarea:hover, button:hover {
  box-shadow: -1px 0 3px cornflowerblue, 0 1px 3px cornflowerblue, 1px 0 3px cornflowerblue, 0 -1px 3px cornflowerblue;
}
#app {
  --app-banner-colour: cornflowerblue;
  --app-background-colour: #e5e5e5;
  --app-text-colour: black;
  width: 100vw;
  background-color: var(--app-background-colour);
  color: var(--app-text-colour);
}
.container {
  width: 100%;
}
.task-row {
  display: flex;
  padding: 0.5em;
  border-bottom: 1px solid black;
}

@media (prefers-color-scheme: dark) {
  body {
    background-color: black;
  }
  input, textarea {
    background-color: grey;
  }
  #app{
    --app-banner-colour: #2c5599;
    --app-background-colour: #616161;
    --app-text-colour: white;
    font-weight: bold;
  }
}
</style>
