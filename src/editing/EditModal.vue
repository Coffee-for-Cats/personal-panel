<script setup>
import { inject } from 'vue'

const target = inject(['editTarget'])
const pagePanels = inject(['pagePanels'])

function closeModal() {
  target.value = false
}

</script>

<template>
  <div v-if="target" class="modal-wrapper">
    <div class="modal">
      <!-- <div>Element number: {{ pagePanels[target - 1].content.text }}</div> -->
      <textarea cols="40" rows="4"
        @input="e => {
          // has to be -1 because if it's the first index (0) it breaks the v-for
          pagePanels[target - 1].content.text = e.target.value
        }"
        :value="pagePanels[target - 1].content.text"
      />
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
   background: #151515;
   border: 1px solid rgba(200, 200, 200, .5);
   border-radius: .6rem;
   box-shadow: 0 0 .2rem 100rem rgba(15, 15, 15, .7);
 }

  textarea {
    background: #101010;
    outline: none;
    padding: .4rem;
    border: 1px solid rgba(200, 200, 200, .5);
    border-radius: .6rem;
  }

  .ok {
    background: #f0f0f0;
    color: #0f0f0f;
    border: none; border-radius: .4rem;
    padding: .3rem .4rem;
    cursor: pointer;
    font-size: 1rem;
    font-weight: 600;
    margin-top: .6rem;
    float: right;
  }
</style>