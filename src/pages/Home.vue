<template>
  <div>
    <todo-form
      :todoText="todoText"
      :hanldeTextInput="hanldeTextInput"
      :handleTodoAdd="handleTodoAdd"
    />
    <spacing :height="20" />
    <todo-list
      :todoList="todoList"
      :hanldeTodoUpdate="hanldeTodoUpdate"
      :handleTodoDelete="handleTodoDelete"
    />
  </div>
</template>

<script>
import { defineComponent, ref } from "vue";
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
      todoText,
      hanldeTextInput,
      handleTodoAdd,
      hanldeTodoUpdate,
      handleTodoDelete
    } = useTodo();

    return {
      todoList,
      todoText,
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