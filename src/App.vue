<script setup>
  import { ref } from 'vue';
  import { RouterView } from 'vue-router';

  import AnimatedWires from '@/components/AnimatedWires.vue';
  import Header from '@/components/common/Header.vue';

  // простая реализация очереди анимаций
  const firstShow = ref(false);
  const secondShow = ref(false);

  setTimeout(() => {
    firstShow.value = true;

    setTimeout(() => {
      secondShow.value = true;
    }, 500);
  }, 500);
</script>

<template>
  <main class="root">
    <Transition name="slide">
      <Header v-if="firstShow" />
    </Transition>

    <section class="content">
      <Transition name="fade">
        <RouterView v-if="secondShow" class="router-content" />
      </Transition>
    </section>
  </main>

  <!-- <AnimatedWires /> -->
</template>

<style scoped>
  .root {
    font-size: 1rem;
    padding: 0 5%;
  }

    /* .content {
      padding: 0 5%;
    } */

      .router-content {
        color: white;
      }
</style>