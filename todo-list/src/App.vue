<template>
  <main class="flex items-center justify-center">
    <section class="todo bg-white border rounded shadow-xl p-6">
      <div class="mb-4">
        <h1 class="text-3xl text-gray-700">Todo List</h1>
        <new-task @add-task="addTask"></new-task>
      </div>
      <div>
        <task
          v-for="task in tasks"
          :key="task.id"
          :p-done="task.done"
          :p-id="task.id"
          :p-name="task.name"
          @delete="deleteTask"
          @toggle-done="toggleDone"
        >
        </task>
      </div>
    <total
        :p-total="tasksTotal"
        :p-done="tasksDone"
        :p-not-done="tasksNotDone"
    ></total>
    </section>
  </main>
</template>

<script>
export default {
  data() {
    return {
      tasks: [
        {
          id: "1",
          name: "Add another task",
          done: false
        },
        {
          id: "2",
          name: 'Mark a task as "Done"',
          done: true
        },
        {
          id: "3",
          name: 'Mark a task as "Not Done"',
          done: false
        },
        {
          id: "4",
          name: "Remove a task",
          done: false
        }
      ]
    };
  },
  methods: {
    toggleDone(taskdId) {
      const identifiedTask = this.tasks.find(task => task.id === taskdId);
      identifiedTask.done = !identifiedTask.done;
    },
    deleteTask(taskId) {
      this.tasks = this.tasks.filter(task => task.id !== taskId);
    },
    addTask(name) {
      const newTask = {
        id: new Date().toISOString(),
        name: name,
        done: false
      };
      this.tasks.unshift(newTask);
    }
  },
  computed: {
    tasksTotal: function () {
      return this.tasks.length;
    },
    tasksDone: function () {
      return this.tasks.filter(t => {
        return  t.done;
      }).length;
    },
    tasksNotDone: function () {
      return this.tasksTotal-this.tasksDone;
    }
  }
};
</script>

<style>
@import "../dist/css/main.css";
</style>
