<script setup>
  const { content } = defineProps(['content'])
</script>

<template>
  <p>{{ content.text }}</p>
</template>

<style>
  p {
    padding: .4rem;
    margin-left: 1.2rem;
  }
</style>