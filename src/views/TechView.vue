<script setup>
  import { ref } from 'vue';
  import { useIntersectionObserver } from '@vueuse/core';

  const target = ref(null);
  const targetIsVisible = ref(false);

  const { stop } = useIntersectionObserver(
    target,
    ([entry], observerElement) => {
      targetIsVisible.value = entry?.isIntersecting || false;
    }
  );
</script>

<template>
  <div class="root">
    <div class="target-block target-block--first" ref="target"></div>

    <!-- <Transition name="fade"> -->
      <p class="appear-block" v-show="targetIsVisible">Message 1</p>
    <!-- </Transition> -->
  </div>
</template>

<style scoped>
  .root {
    position: relative;
    background: rgba(224, 255, 255, 0.422);
    border-radius: 15px;
  }
</style>
