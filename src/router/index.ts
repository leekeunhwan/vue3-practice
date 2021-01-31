import { createWebHistory, createRouter } from "vue-router";
import TodoList from "../pages/TodoList.vue";

const routes = [
  {
    path: "/",
    name: "TodoList",
    component: TodoList,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
