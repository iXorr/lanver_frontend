<script setup>
  import { ref } from 'vue';

  const props = defineProps(['title']);

  const contentShow = ref(false);

  setTimeout(() => {
    contentShow.value = true;
  }, 350);
</script>

<template>
  <header class="local__header">
    <h2 class="local__header-text">{{ props.title }}</h2>

    <Transition name="push">
      <div class="local__header-line" v-if="contentShow"></div>
    </Transition>
  </header>
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
    }

  /* local animation */
  
  .push-enter-active {
	  animation: push 0.5s;
  }

  .push-leave-active {
    animation: push 0.5s reverse;
  }

  @keyframes push {
    0% {
      opacity: 0;
      width: 0;
    }
    
    100% {
      opacity: 1;
      width: 100%;
    }
  }
</style>