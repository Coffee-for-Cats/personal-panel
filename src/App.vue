<script setup>
import { ref, defineAsyncComponent, provide, watch } from 'vue';
import { serverUrl } from './config.js';

// tracks the elements in the page
const pagePanels = ref([])
const pathname = window.location.pathname.split('/').filter(str => str != '')

// gets pagePanels' value as json from the API
startUp();
async function startUp() {
  const pageId = pathname[0] || 'home'
  const response = await fetch(`${serverUrl}${pageId}`, {
    cache: 'force-cache',
    cors: 'no-cors'
  })
  
  const panels = await response.json()
  pagePanels.value = panels
}

// watches and rebuilds the website when the pagePanels updates
const Components = {}
watch(pagePanels, async () => {
  for (const panel of pagePanels.value) {
    // if the component is not yet cached
    if (!Components[panel.component]) {
      // vue dynamic component (download)
      const component = defineAsyncComponent(
        () => import(`./components/${panel.component}.vue`)
      )
      // saves for the next use
      Components[panel.component] = component;
    }
  }
}, { deep: true })

// editing elements
import EditToolbar from './editing/EditToolbar.vue'
import EditPanelButtons from './editing/EditPanelButtons.vue'
import EditModal from './editing/EditModal.vue'

const editing = pathname[1] === "edit"  // is being edited right now
const editTarget = ref(false);          // target being edited by editModal

// provides ref's to /editing elements
if (editing) {
  provide('pagePanels', pagePanels)
  provide('editTarget', editTarget)
}

</script>

<template>
  <div id="container">
    <template v-for="(_, i) in pagePanels" :key="i">
      <div class="wrapper">
        <component
          :is="Components[pagePanels[i].component]"
          :content="pagePanels[i].content"
        />
        <EditPanelButtons v-if="editing" :panelIndex="i" />
      </div>
    </template>
  </div>

  <EditToolbar v-if="editing" />
  <!-- only visible when <edit> of EditPanelButtons is pressed -->
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
