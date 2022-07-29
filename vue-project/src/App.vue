<template>
  <div>
    <button @click="handleLogger">logger</button>
  </div>
</template>

<script setup lang="ts">
const handleLogger = (e: Event) => {
  throw new TypeError("error");
};
</script>

<style>
body {
  background: rgba(0, 0, 0, 0.7) !important;
}
</style>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
