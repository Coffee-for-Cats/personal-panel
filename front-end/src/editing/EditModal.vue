<script setup>
import { inject } from 'vue'

const target = inject(['editTarget']);
const pagePanels = inject(['pagePanels'])

function closeModal() {
  target.value = false;
}

</script>

<template>
  <div v-if="target" class="modal-wrapper">
    <div class="modal">
      <input type="text"
        @input="e => {
          // has to be -1 because if it's the first index (0) it breaks the v-for
          pagePanels[target - 1].content.text = e.target.value
        }"
        :value="pagePanels[target - 1].content.text"
      >
      <br>
      <button class="ok" @click="closeModal()">Ok</button>
    </div>
  </div>
</template>

<style scoped>
 div.modal-wrapper {
   display: flex;
   align-items: center; justify-content: center;
   position: fixed;
   height: 100vh; width: 100vw;
   top: 0; left: 0;
 }

 .modal {
   display: block;
   padding: 2.4rem;
   width: fit-content;
   border: 1px solid #f0f0f0;
 }

  input {
    background: #0f0f0f;
  }

  .ok {
    margin-top: .6rem;
    float: right;
  }
</style>