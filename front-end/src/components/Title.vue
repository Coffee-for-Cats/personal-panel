<script setup>
  import { reactive, ref } from 'vue'
  const { content } = defineProps(['content']);
</script>

<template>
  <h1
  ># {{ content.text }}</h1>
</template>

<style>
 h1 {
  
 }
</style>