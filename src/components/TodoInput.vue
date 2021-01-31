<template>
  <input class="TodoInput__Input" type="text" :value="inputTodoText" @input="hanldeTextInput" />
</template>
<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoInput",
  props: {
    inputTodoText: String,
    hanldeTextInput: Function
  },
  setup(props) {
    const { inputTodoText, hanldeTextInput } = props;
    return { inputTodoText, hanldeTextInput };
  }
});
</script>
<style scoped>
.TodoInput__Input {
  height: 100%;
  box-sizing: border-box;
  padding-left: 5px;
}
</style>