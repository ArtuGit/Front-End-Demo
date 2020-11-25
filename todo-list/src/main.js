import { createApp } from "vue";
import App from "./App.vue";

import '../assets/css/tailwind.css'

import NewTask from "./components/NewTask.vue";
import Task from "./components/Task.vue";
import Total from "./components/Total.vue";

const app = createApp(App);

app.component("new-task", NewTask);
app.component("task", Task);
app.component("total", Total);
app.mount("#app");
