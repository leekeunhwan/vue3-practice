<template>
  <div>
    <input type="text" :value="inputTodoText" @input="inputText" />
    <div>{{inputTodoText}}</div>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { useTodo } from "../hooks/TodoHooks";

export default defineComponent({
  name: "TodoInput",
  setup() {
    const { inputTodoText, getInputTodoText, inputText } = useTodo();
    return {
      inputTodoText,
      getInputTodoText,
      inputText
    };
  }
});
</script>
<style scoped>
</style>