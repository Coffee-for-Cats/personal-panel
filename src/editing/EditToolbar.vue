<script setup>
  import { inject } from 'vue';
  const panels = inject('pagePanels');

  function add(component = "Paragraph") {
    panels.value.push({
      component, content: { text: 'Edit me.' }
    })
}

  async function publish() {
    //TODO: connect with the api to publish the panels as json
  }
</script>

<template>
  <details class="toolbar">
    <summary><span>More </span> <button class="publish" @click="publish">Publish</button> </summary>
    <ul>
      <button @click="add('Paragraph')">Paragraph</button>
      <button @click="add('Title')">Title</button>
    </ul>
  </details>
</template>

<style scoped>
  .toolbar {
    border: 2px solid #f0f0f0;
    border-bottom: none;
    border-radius: 1.2rem 1.2rem 0 0;
    position: fixed;
    bottom: 0;
    width: clamp(35vw, 36rem, 95vw);
    padding: 1.4rem;
  }

  summary {
    display: flex;
    align-items: center;
    font-size: 1.4rem;
  }

  summary > span {
    cursor: pointer;
  }

  button {
    cursor: pointer;
    background-color: #0f0f0f;
    padding: .2rem .4rem;
    font-size: 1.2rem;
    border: 1px solid white;
    border-radius: .2rem;
    margin: .2rem;
  }

  .publish {
    display: flex;
    background: #f0f0f0;
    color: #0f0f0f;
    font-size: 1.2rem;
    font-weight: 500;
    margin-left: auto;
  }
</style>