<script setup>
import { ref, defineAsyncComponent, provide } from 'vue';

import AddNew from './editing/AddNew.vue';
import EditPanelButton from './editing/EditPanelButton.vue'
import EditModal from './editing/EditModal.vue'

// hardcoded json API.
const pagePanels = ref([
  { component: 'Title', content: {text: 'I am Lucas!'}},
  { component: 'Paragraph', content: {text: "Welcome to my webpage!"}},
  { component: 'Title', content: {text: 'I am Matheus!'}}
]);

// hardcoded editing option.
const editing = true;
const editTarget = ref(false);
if (editing) {
  provide('pagePanels', pagePanels);
  provide('editTarget', editTarget);
}

// Dynamic components hashmap.
const Components = {}

pagePanels.value.forEach(panel => {
  const component = defineAsyncComponent(
    () => import(`./components/${panel.component}.vue`)
  )
  // saves in the hashtable
  Components[panel.component] = component;
})

</script>

<template>
  <div id="container">
    <template v-for="(_c, i) in pagePanels" :key="i">
      <div class="wrapper">
        <component
          :is="Components[pagePanels[i].component]"
          :content="pagePanels[i].content"
        />

        <EditPanelButton v-if="editing" :panelIndex="i" />
      </div>
    </template>
  </div>

  <AddNew v-if="editing" />
  <EditModal v-if="editTarget" />
</template>

<style scoped>
  #container {
    width: clamp(35vw, 36rem, 95vw);
    display: flex;
    flex-direction: column;

    background: #222;
    padding: 1.2rem;
    margin: .6rem;
    border-radius: .6rem;
    box-shadow: .2rem .4rem 2rem .8rem rgba(0, 0, 0, .3);
  }

  .wrapper {
    display: flex;
    margin: .2rem;
    padding: .3rem 1rem .3rem 1rem;
    border: 1px solid rgba(200, 200, 200, .2);
    border-radius: .6rem;
  }
</style>
