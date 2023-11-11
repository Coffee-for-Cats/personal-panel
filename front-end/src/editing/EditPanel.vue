<script setup>
  import { inject } from 'vue';

  const panels = inject('pagePanels');
  const { panelIndex } = defineProps(['panelIndex']);

  function moveSelfUp() {
    const previousIndex = panelIndex - 1;
    if (previousIndex >= 0) {
      // invert the previous and actual panel.
      const previousPanelTemp = panels.value[previousIndex];
      panels.value[previousIndex] = panels.value[panelIndex];
      panels.value[panelIndex] = previousPanelTemp;
    } else {
      console.log("Already the first element in pagePanels!");
    }
  }

  function moveSelfDown() {
    const nextIndex = panelIndex + 1;
    if (nextIndex <= panels.value.length) {
      // invert the previous and actual panel.
      const previousPanelTemp = panels.value[nextIndex];
      panels.value[nextIndex] = panels.value[panelIndex];
      panels.value[panelIndex] = previousPanelTemp;
    } else {
      console.log("Already the last element in pagePanels!");
    }
  }
</script>

<template>
  <div class="editBlock">
    <button @click="openModal()">Edit</button>
    <button @click="moveSelfUp">Up</button>
    <button @click="moveSelfDown()">Down</button>
  </div>
</template>

<style scoped>
  button {
    display: flex;
    margin-left: auto;
    height: fit-content;
  }

  .editBlock {
    display: flex;
  }
</style>