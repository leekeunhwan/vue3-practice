<template>
  <todo-input />
</template>

<script>
import { defineComponent } from "vue";
import TodoInput from "../components/TodoInput.vue";

export default defineComponent({
  name: "TodoList",
  components: {
    TodoInput,
    TodoInput2
  }
});
</script>

<style scoped>
</style>