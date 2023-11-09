<script setup>
  import { ref, onMounted, defineAsyncComponent, provide } from 'vue';
  import AddNew from './components/AddNew.vue';

  // hardcoded json API.
  const pagePanels = ref([
    { component: 'Title', content: {text: 'I am Lucas!'}},
    { component: 'Paragraph', content: {text: "Welcome to my webpage!"}},
    { component: 'Title', content: {text: 'I am Matheus!'}}
  ]);
  // hardcoded editing option.
  const editing = true;
  if (editing) {
    provide('pagePanels', pagePanels);
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
    <template v-for="(c, i) in pagePanels" :key="i">
      <div class="wrapper">
        <component
          :is="Components[pagePanels[i].component]"
          :content="pagePanels[i].content"
        />
      </div>
      
    </template>
  </div>

  <AddNew v-if="editing" />
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
    margin: .2rem;
    padding: .3rem 1rem .3rem 1rem;
    border: 1px solid rgba(200, 200, 200, .2);
    border-radius: .6rem;
  }
</style>
