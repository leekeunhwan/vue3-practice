<template>
  <layout>
    <router-view />
  </layout>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Layout from "./styles/Layout.vue";

export default defineComponent({
  name: "App",
  components: {
    Layout
  }
});
</script>

<style scoped>
</style>
