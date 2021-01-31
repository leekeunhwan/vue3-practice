<template>
  <div>
    <form class="TodoForm__Container" @submit.prevent="action.handleTodoAdd">
      <input class="TodoInput__Input" type="text" :value="todoText" @input="action.hanldeTextInput" />
      <spacing :right="8" />
      <button class="TodoForm__Button" @click.prevent="action.handleTodoAdd">작성</button>
    </form>
    <spacing :height="20" />
    <todo-list
      :todoList="todoList"
      :hanldeTodoUpdate="action.hanldeTodoUpdate"
      :handleTodoDelete="action.handleTodoDelete"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Spacing from "../components/common/Spacing.vue";
import TodoList from "../components/TodoList.vue";
import { useTodo } from "../hooks/TodoHooks";

export default defineComponent({
  name: "Home",
  components: {
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

    const action = {
      hanldeTextInput,
      handleTodoAdd,
      hanldeTodoUpdate,
      handleTodoDelete
    };

    return {
      todoList,
      todoText,
      action
    };
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

.TodoInput__Input {
  height: 100%;
  box-sizing: border-box;
  padding-left: 5px;
}
</style>