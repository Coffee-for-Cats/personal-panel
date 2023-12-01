<script setup>
  const { content } = defineProps(['content'])
</script>

<template>
  <p>{{ content.text }}</p>
</template>

<style>
  p {
    grid-column-start: 1;
    grid-column-end: 5;

    margin-left: 2rem;
  }
</style>