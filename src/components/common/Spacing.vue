<template>
  <div
    :style="`height: ${height}px; margin-top: ${top}px; margin-left: ${left}px; margin-right: ${right}px; margin-bottom: ${bottom}px;`"
  ></div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Spacing",
  props: {
    height: Number,
    top: Number,
    left: Number,
    right: Number,
    bottom: Number
  },
  setup(props) {
    const { height, top, left, rigth, bottom } = props;
    return { height, top, left, rigth, bottom };
  }
});
</script>
<style scoped>
</style>