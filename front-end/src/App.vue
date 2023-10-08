<script setup>
import { ref, onMounted, defineAsyncComponent } from 'vue';

import Title from './components/Title.vue'
console.log(Title);

const pageComponentsRaw = [
  { name: 'Title', text: 'Hello Lucas!' },
  { name: 'Paragraph'}
]

const Components = ref([]);
pageComponentsRaw.forEach(rawComponent => {
  const component = defineAsyncComponent(
    () => import(`./components/${rawComponent.name}.vue`)
  )
  Components.value.push(component)
})

</script>

<template>
  <template v-for="c in Components">
    <component :is="c"></component>
  </template>
</template>

<style scoped>

</style>
