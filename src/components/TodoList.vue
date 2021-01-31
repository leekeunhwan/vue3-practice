<template>
  <ul class="TodoList__Container">
    <li class="TodoList__Item" v-for="list in todoList" :key="list.id">{{list.text}}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import { TodoList } from "../hooks/TodoHooks";

export default defineComponent({
  name: "TodoList",
  props: {
    todoList: Array as PropType<Array<TodoList>>,
    hanldeTodoUpdate: Function,
    handleTodoDelete: Function
  },
  setup(props) {
    const { todoList, hanldeTodoUpdate, handleTodoDelete } = props;
    return { todoList, hanldeTodoUpdate, handleTodoDelete };
  }
});
</script>

<style>
</style>