<script setup>
  import { ref } from 'vue';

  const contentShow = ref(false);

  setTimeout(() => {
    contentShow.value = true;
  }, 350);
</script>

<template>
  <div class="root">
    <header class="root__header">
      <h2 class="root__header-text">Home</h2>

      <Transition name="push">
        <div class="root__header-line" v-if="contentShow"></div>
      </Transition>
    </header>

    <section class="local-content">
      Something
    </section>
  </div>
</template>

<style scoped>
  .root__header {
    display: flex;
    align-items: center;
  }

    .root__header-text {
      margin-right: 25px;
    }

    .root__header-line {
      width: 100%;
      height: 5px;
      background: lightcyan;
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