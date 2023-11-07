<script setup>
  import { ref, onMounted, defineAsyncComponent } from 'vue';

  // hardcoded API json.
  const pagePanels = ref([
    { component: 'Title', content: {text: 'I am Lucas!'}},
    { component: 'Paragraph', content: {text: "Welcome to my webpage!"}},
    { component: 'Title', content: {text: 'I am Matheus!'}}
  ]);

  // Dynamic components hashmap.
  const Components = {}
  
  pagePanels.value.forEach(panel => {
    const component = defineAsyncComponent(
      () => import(`./components/${panel.component}.vue`)
    )
    // saves in the hashtable
    Components[panel.component] = component;
  })

  // temporary "add paragraph" function
  function addP() {
    pagePanels.value.push({component: "Paragraph", content: { text:"Hi" } })

    console.log(pagePanels.value);
  }
</script>

<template>
  <div id="container">
    <template v-for="(c, i) in pagePanels" :key="i">
      <component
        :is="Components[pagePanels[i].component]"
        :content="pagePanels[i].content"
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
    display: flex;
    flex-direction: column;

    background: #222;
    padding: 1.2rem;
    margin: .6rem;
    border-radius: .6rem;
    box-shadow: .2rem .4rem 2rem .8rem rgba(0, 0, 0, .3);
  }
</style>
