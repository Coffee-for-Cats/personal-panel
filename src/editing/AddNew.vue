<script setup>
  import { inject } from 'vue';
  const panels = inject('pagePanels');

  function add(component = "Paragraph") {
    panels.value.push({
      component, content: { text: 'Add your text here.' }
    })
  }
</script>

<template>
  <h3>Add a new: </h3>
  <ul>
    <li> <button @click="add('Paragraph')">Paragraph</button> </li>
    <li> <button @click="add('Title')">Title</button></li>
  </ul>
</template>

<style scoped>
  button {
    background-color: #0f0f0f;
    padding: .2rem;
    border: 1px solid white;
    border-radius: .2rem;
    margin: .2rem;
  }
</style>