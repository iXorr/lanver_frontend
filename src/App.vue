<script setup>
  import { RouterView } from 'vue-router';

  import AnimatedWires from '@/components/AnimatedWires.vue';
  import Header from '@/components/common/AppHeader.vue';
</script>

<template>
  <div class="root">
    <Header class="root__header" />

    <div class="root__content">
      <RouterView class="root__content--no-delay" />
    </div>
  </div>

  <AnimatedWires />
</template>

<style scoped>
  .root {
    width: inherit;
    height: inherit;
    padding: 0 5%;
  }

    .last-block {
      bottom: 0;
      position: absolute;
      width: 100%;
      color: white;
      background: darkcyan;
    }

    .root__header {
      animation: slide .5s .5s forwards;
      opacity: 0;
    }

    .root__content {
      animation: fade .5s 1s forwards;
      opacity: 0;
      color: white;
    }

    .root__content--no-delay {
      animation: fade .5s forwards;
      opacity: 0;
    }
</style>