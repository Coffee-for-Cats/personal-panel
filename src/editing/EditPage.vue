<script setup>
function editPage() {
  const id = window.location.pathname.split('/').filter(str => str != '')[0];
  console.log(id)
  window.location.assign(`${id ? '': 'home'}/edit`)
}
</script>

<template>
  <div class="bottomPlaceholder">
    <button @click="editPage()">
      Edit Page
    </button>
  </div>
</template>

<style scoped>
  .bottomPlaceholder {
    width: clamp(35vw, 36rem, 95vw);
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
  }
  button {
    background: #f0f0f0;
    color: #0f0f0f;
    font-weight: 600;
    padding: .6rem 1rem;
    border: none;
    border-radius: .4rem;
    margin-bottom: .4rem;
    cursor: pointer;
  }
</style>