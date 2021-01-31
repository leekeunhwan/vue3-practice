<template>
  <form class="TodoForm__Container" @submit.prevent="handleTodoAdd">
    <todo-input :todoText="todoText" :hanldeTextInput="hanldeTextInput" />
    <spacing :right="8" />
    <button class="TodoForm__Button" @click.prevent="handleTodoAdd">작성</button>
  </form>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import TodoInput from "../components/TodoInput.vue";
import Spacing from "./common/Spacing.vue";

export default defineComponent({
  name: "TodoForm",
  components: {
    TodoInput,
    Spacing
  },
  props: {
    todoText: String,
    hanldeTextInput: Function,
    handleTodoAdd: Function
  },

  setup(props) {
    const { todoText, hanldeTextInput, handleTodoAdd } = props;
    return { todoText, hanldeTextInput, handleTodoAdd };
  }
});
</script>

<style scoped>
.TodoForm__Container {
  display: flex;
  align-items: center;
  height: 28px;
}

.TodoForm__Button {
  height: 100%;
  border: 1px solid black;
  background-color: white;
  border-radius: 3px;
}
</style>