<script setup>
import { ref, defineAsyncComponent, provide } from 'vue';

// a section/toolbar for adding new elements in the page.
import AddNew from './editing/AddNew.vue';
// a group of buttons to move and/or edit a page element.
import EditPanelButtons from './editing/EditPanelButtons.vue'
// a hidden modal to edit a single page element.
// turns visible when a button in EditPanelButtons is pressed.
import EditModal from './editing/EditModal.vue'

// hardcoded json API.
const pagePanels = ref([
  { component: 'Title', content: {text: 'I am Lucas!'}},
  { component: 'Paragraph', content: {text: "Welcome to my webpage!"}},
  { component: 'Title', content: {text: 'I am Matheus!'}}
]);

// hardcoded editing option.
const editing = true; // if I can edit the page. Should come from server too.
const editTarget = ref(false); // target to the editing modal.
if (editing) {
  // provides to EditPanelButtons and EditModal.
  provide('pagePanels', pagePanels);
  provide('editTarget', editTarget);
}

// Dynamic components hashmap.
const Components = {}

for (const panel of pagePanels.value) {
  // if the component does not exist yet.
  if (!pagePanels[panel.component]) {
    console.log(`loading ${panel.component}`);
    // gives it to vue download.
    const component = defineAsyncComponent(
      () => import(`./components/${panel.component}.vue`)
    )
    // saves in the hashtable
    Components[panel.component] = component;
  }
}

</script>

<template>
  <div id="container">
    <template v-for="(_c, i) in pagePanels" :key="i">
      <div class="wrapper">
        <component
          :is="Components[pagePanels[i].component]"
          :content="pagePanels[i].content"
        />

        <EditPanelButtons v-if="editing" :panelIndex="i" />
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