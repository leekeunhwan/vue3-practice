<template>
  <input class="TodoInput__Input" type="text" :value="todoText" @input="hanldeTextInput" />
</template>
<script lang="ts">
import { defineComponent, watch } from "vue";

export default defineComponent({
  name: "TodoInput",
  props: {
    todoText: String,
    hanldeTextInput: Function
  },
  setup(props) {
    const { todoText, hanldeTextInput } = props;

    watch(
      () => props,
      (first, second) => {
        console.log("todoText>>>", first, second);
      }
    );
    return { todoText, hanldeTextInput };
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