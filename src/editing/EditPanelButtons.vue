<script setup>
import { inject } from 'vue';

const panels = inject('pagePanels');
const editTarget = inject('editTarget');
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
  // -1 because arrays starts at 0
  if (nextIndex <= panels.value.length - 1) {
    // invert the previous and actual panel.
    const previousPanelTemp = panels.value[nextIndex];
    panels.value[nextIndex] = panels.value[panelIndex];
    panels.value[panelIndex] = previousPanelTemp;
  } else {
    console.log("Already the last element in pagePanels!");
  }
}

function openModal() {
  // has to be +1 because if it's the first index (0) it breaks the v-if
  editTarget.value = panelIndex + 1;
}

function trashSelf() {
  console.log('trying to erase index ' + panelIndex + ' from array')
  panels.value.splice(panelIndex, 1);
}

</script>

<template>
  <div class="editBlock">
    <button @click="openModal()">&#9998;</button>
    <div class="vertical">
      <button @click="moveSelfUp">&#10548;</button>
      <button @click="moveSelfDown()">&#10549;</button>
    </div>
    <button @click="trashSelf()">&#128465;</button>
  </div>
</template>

<style scoped>
  button {
    display: flex;
    background: rgba(15, 15, 15, .7);
    padding: .2rem .3rem;
    margin: 1px;
    border: 1px solid rgba(200, 200, 200, .5);
    border-radius: .2rem;
    cursor: pointer;
    font-size: 1rem;
  }

  .editBlock {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .vertical {
    display: flex;
    flex-direction: column;
  }
  .vertical > button {
    font-size: 1.1rem;
  }
</style>