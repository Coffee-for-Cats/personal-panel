<script setup>
const { sourcePanel } = defineProps(['sourcePanel']);
</script>

<template>
  <h1># <slot/> </h1>
  {{ sourcePanel }}
</template>

<style>
</style>