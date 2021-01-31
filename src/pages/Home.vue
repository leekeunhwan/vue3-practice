<template>
  <div>
    <todo-form
      :inputTodoText="inputTodoText"
      :hanldeTextInput="hanldeTextInput"
      :handleTodoAdd="handleTodoAdd"
    />
    <spacing :height="80" />
    <todo-list
      :todoList="todoList"
      :hanldeTodoUpdate="hanldeTodoUpdate"
      :handleTodoDelete="handleTodoDelete"
    />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoForm from "../components/TodoForm.vue";
import Spacing from "../components/common/Spacing.vue";
import TodoList from "../components/TodoList.vue";
import { useTodo } from "../hooks/TodoHooks";

export default defineComponent({
  name: "Home",
  components: {
    TodoForm,
    Spacing,
    TodoList
  },
  setup() {
    const {
      todoList,
      inputTodoText,
      hanldeTextInput,
      handleTodoAdd,
      hanldeTodoUpdate,
      handleTodoDelete
    } = useTodo();

    return {
      todoList,
      inputTodoText,
      hanldeTextInput,
      handleTodoAdd,
      hanldeTodoUpdate,
      handleTodoDelete
    };
  }
});
</script>

<style scoped>
</style>