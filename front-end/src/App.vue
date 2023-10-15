<script setup>
  import { ref, onMounted, defineAsyncComponent } from 'vue';

  // hardcoded API json.
  const pagePanels = [
    { component: 'Title', content: {text: 'I am Lucas!'}, pos: {start: 2, end: 5}},
    { component: 'Paragraph', content: {text: "Welcome to my webpage!"}},
    { component: 'Title', content: {text: 'I am Matheus!'}, pos: {start: 1, end: 5}}
  ]
  // hardcoded editing option.
  // Todo

  const Components = ref([]);
  
  pagePanels.forEach(panel => {
    const componentBuilder = defineAsyncComponent(
      () => import(`./components/${panel.component}.vue`)
    )
    Components.value.push(componentBuilder)
  })

  function addP() {
    const componentBuilder = defineAsyncComponent(
      () => import(`./components/Paragraph.vue`)
    )
    Components.value.push(componentBuilder)
    pagePanels.push({component: "Paragraph", content: { text:"Hi" } })
  }
</script>

<template>
  <div id="container">
    <template v-for="(c, i) in Components" :key="i">
      <component
        :is="c"
        :content="pagePanels[i].content"
        :pos="pagePanels[i]?.pos"
      >
      </component>
    </template>
  </div>
  <div>
    <button @click="addP">+++</button>
  </div>
</template>

<style scoped>
  #container {
    width: clamp(35vw, 36rem, 95vw);
    display: grid;
    grid-template-columns: 25% 25% 25% 20%;
    gap: .4rem;

    background: #222;
    padding: 1.2rem;
    margin: .6rem;
    border-radius: .6rem;
    box-shadow: .2rem .4rem 2rem .8rem rgba(0, 0, 0, .3);
  }
</style>
