<template>
  <div class="layoutStyles">
    <slot />
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Layout"
});
</script>

<style scoped>
.layoutStyles {
  width: 100%;
  display: flex;
  justify-content: center;
}
</style>