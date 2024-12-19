<script setup>
  import { ref, provide } from 'vue';
  import { RouterView } from 'vue-router';

  import AnimatedWires from '@/components/common/AnimatedWires.vue';
  import AppHeader from '@/components/common/AppHeader.vue';

  const isHeaderLoaded = ref(false);
  setTimeout(() => { isHeaderLoaded.value = true }, 750);

  const areAnimationsSkipped = ref(false);
  function skipAnimations() {
    areAnimationsSkipped.value = !areAnimationsSkipped.value;
  }

  function toggleSkipAnimation(tl) {
    if (areAnimationsSkipped.value) {
      tl.timeScale(3)
    } else {
      tl.timeScale(1)
    }
  }

  provide('areAnimationsSkipped', areAnimationsSkipped);
  provide('toggleSkipAnimation', toggleSkipAnimation);
</script>

<template>
  <p style="color: white; position: absolute;">{{ areAnimationsSkipped }}</p>

  <div class="root">
    <AppHeader class="root__header" ref="header" @skipAnimations="skipAnimations" />

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

<style>
  h1 {
    font-size: 1.5rem;
    margin-bottom: 1.5rem;
  }
</style>