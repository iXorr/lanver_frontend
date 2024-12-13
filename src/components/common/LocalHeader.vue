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
    margin-bottom: 1rem;
  }

    .local__header-text {
      margin-right: 1rem;
    }

    .local__header-line {
      width: 100%;
      height: 2px;
      background: rgba(224, 255, 255);
      box-shadow: 0 0 10px #fff;

      opacity: 0;
      animation: push .5s forwards;
    }

  @keyframes push {
    0% {
      width: 0;
    }
    
    100% {
      opacity: 1;
      width: 100%;
    }
  }
</style>