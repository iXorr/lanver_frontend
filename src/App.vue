<script setup>
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';

  import AnimatedWires from '@/components/common/AnimatedWires.vue';
  import AppHeader from '@/components/common/AppHeader.vue';

  const isHeaderLoaded = ref(false);
  setTimeout(() => { isHeaderLoaded.value = true }, 750);
</script>

<template>
  <div class="root">
    <AppHeader class="root__header" ref="header" />

    <Transition name="fade">
      <RouterView v-if="isHeaderLoaded" class="root__content" />
    </Transition>
  </div>

  <AnimatedWires />
</template>

<style scoped>
  .root {
    width: inherit;
    height: inherit;
    padding: 0 5%;
  }

    .root__header {
      animation: slide .5s .25s forwards;
      opacity: 0;
    }

    .root__content {
      color: white;
    }
</style>