<script setup>
  import { reactive, ref } from 'vue'
  const { content, pos } = defineProps(['content', 'pos']);

  const position = reactive({ 'grid-column-start': pos.start, 'grid-column-end': pos.end })
</script>

<template>
  <h1
    :style="position"
  ># {{ content.text }}</h1>
</template>

<style>
 h1 {
  grid-column-start: 1;
  grid-column-end: 5;
 }
</style>