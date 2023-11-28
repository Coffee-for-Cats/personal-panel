<script setup>
  const { content } = defineProps(['content']);
</script>

<template>
  <h1># {{ content.text }}</h1>
</template>

<style>
 h1 {
  margin-bottom: .4rem;
 }
</style>