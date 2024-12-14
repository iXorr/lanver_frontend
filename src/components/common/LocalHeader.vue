<script setup>
  const props = defineProps(['title']);
</script>

<template>
  <div class="local__header">
    <h2 class="local__header-text">{{ props.title }}</h2>
    <div class="local__header-line" ref="line"></div>
  </div>
</template>

<style scoped>
  .local__header {
    display: flex;
    align-items: center;
    margin-bottom: 1.5rem;
    font-size: 1.25rem;
    text-wrap: nowrap;
  }

    .local__header-text {
      margin-right: 1rem;
    }

    .local__header-line {
      height: 3px;
      background: rgba(224, 255, 255);
      box-shadow: 0 0 5px #fff;
      animation: push .5s forwards;
    }
</style>