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

    <Transition name="fade">
      <p class="appear-block" v-show="targetIsVisible">Message 1</p>
    </Transition>
  </div>
</template>

<style scoped>
  .root {
    position: relative;
    /* height: 2000px; */

    background: rgba(224, 255, 255, 0.422);
    border-radius: 15px;
  }

    /* .appear-block {
      display: flex;
      justify-content: center;

      width: 350px;
      padding: 25px;
      position: absolute;
      font-size: 2rem;
      top: 200px;

      border-radius: 15px;
      background: red;

      transition: var(--standart-transition);
    }

    .appear-block:hover {
      background: blue;
    }

    .target-block {
      position: absolute;
      width: 100%;
      height: 600px;
      top: 850px;
    } */
</style>
