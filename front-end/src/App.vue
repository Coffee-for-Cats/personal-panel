<script setup>
  import { ref, onMounted, defineAsyncComponent } from 'vue';

  const pagePanels = [
    { name: 'Title', text: 'Hello Lucas!' },
    { name: 'Paragraph', text: "its my p"}
  ]

  const Components = [];
  
  pagePanels.forEach(panel => {
    const componentBuilder = defineAsyncComponent(
      () => import(`./components/${panel.name}.vue`)
    )
    Components.push(componentBuilder)
  })
</script>

<template>
  <template v-for="(c, i) in Components">
    <component
      :is="c"
      :sourcePanel="pagePanels[i]"
    >
      
      <!-- slot -->
      {{ pagePanels[i].text }}
    </component>
  </template>
</template>

<style scoped>

</style>
